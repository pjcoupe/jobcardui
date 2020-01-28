import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { JobCardModel } from '../models/JobCardModel';

@Component({
    selector: 'app-input-search-form',
    templateUrl: './input-search-form.component.html',
    styleUrls: ['./input-search-form.component.css']
})
export class InputSearchFormComponent implements OnInit, AfterViewInit {

    public results: Array<JobCardModel>;
    afterDate = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());
    beforeDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
    pickedBeforeDate: Date;
    pickedAfterDate: Date;
    doneSubmit = false;
    error: string;
    limit = 50;
    index = 0;


    constructor(private http: HttpClient, private router: Router) {

    }
    phoneFormControl = new FormControl('', [Validators.minLength(7), Validators.pattern(/^\d+$/)]);
    idFormControl = new FormControl('', [Validators.minLength(4), Validators.pattern(/^[1-9]\d+$/)]);
    customerFormControl = new FormControl('', [Validators.minLength(4)]);
    addressFormControl = new FormControl('', [Validators.minLength(10)]);
    orderNumberFormControl = new FormControl('', [Validators.minLength(4)]);
    emailFormControl = new FormControl('', [
        Validators.minLength(7),
        Validators.pattern(
            // tslint:disable-next-line: max-line-length
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )]);

    ngOnInit() {

    }
    ngAfterViewInit() {

    }



    onSubmit() {
        this.doneSubmit = true;
        this.setError("");
        this.results = null;
        const data: {
            jobPhone?: string,
            jobID?: number,
            jobCustomer?: string,
            jobEmail?: string,
            jobAddress?: string,
            jobOrderNumber?: string,
            jobDate?: { $gte: Date, $lte: Date }
        } = {};
        if (this.pickedAfterDate || this.pickedBeforeDate) {
            // tslint:disable-next-line: max-line-length
            data.jobDate = { $gte: this.pickedAfterDate || this.afterDate, $lte: this.pickedBeforeDate || this.beforeDate };
        }
        if (this.phoneFormControl.value && this.phoneFormControl.valid) {
            data.jobPhone = this.phoneFormControl.value;
        }
        if (this.idFormControl.value && this.idFormControl.valid) {
            data.jobID = this.idFormControl.value;
        }
        if (this.customerFormControl.value && this.customerFormControl.valid) {
            data.jobCustomer = this.customerFormControl.value;
        }
        if (this.emailFormControl.value && this.emailFormControl.valid) {
            data.jobEmail = this.emailFormControl.value;
        }
        if (this.orderNumberFormControl.value && this.orderNumberFormControl.valid) {
            data.jobOrderNumber = this.orderNumberFormControl.value;
        }
        if (this.addressFormControl.value && this.addressFormControl.valid) {
            data.jobAddress = this.addressFormControl.value;
        }
        if (!Object.keys(data).length) {
            this.setError("No search details entered so showing newest entries");
        }
        this.index = 0;
        this.http.post('/api/platingSearch', data).subscribe((results: Array<JobCardModel>) => {
            this.results = results.map(item => {
                return new JobCardModel(item);
            });
        }, error => {
            this.setError(this.extractLongestTextBits(error));
        });
    }


    clear(){
        this.results = null;
        this.error = null;
        this.pickedBeforeDate = null;
        this.pickedAfterDate = null;
        this.doneSubmit = false;
        this.index = 0;
        

        // tslint:disable-next-line: forin
        for (let key in this){
            let value = this[key];
            let type = typeof value;
            if (value){
                if (type === "object" && value instanceof FormControl){
                    value.reset();
                }
            }
        }
    }

    setError(newText:string){
        setTimeout(()=>{
            this.error = newText;
        }, 100);
    }

    extractLongestTextBits(obj: any): string {
        let retString = "";
        let current: any;
        const toDo: Array<any> = [obj];
        while (current = toDo.shift()) {
            if (current) {
                if (typeof current === "object" && !(current instanceof Date)) {
                    toDo.push(current);
                } else if (typeof current !== "function") {
                    let value = "" + current;
                    if (value.length > 24) {
                        retString += "" + value + " - ";
                    }
                }
            }
        }
        return retString;
    }
}
