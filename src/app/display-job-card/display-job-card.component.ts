import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { JobCardModel } from '../models/JobCardModel';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
    selector: 'display-job-card',
    templateUrl: './display-job-card.component.html',
    styleUrls: ['./display-job-card.component.css']
})
export class DisplayJobCardComponent implements OnInit, OnChanges {
    @Input() results: Array<JobCardModel> = [];
    @Input() index = 0;
    @Input() disabled = true;

    dateFormGroup: FormGroup;
    cachedImages: Array<Array<SafeUrl>> = [];

    private subscription: Subscription;
    scale = false;
    toggleScaleDown(){
        this.scale = !this.scale;
    }
    imageIndex = 0;
    maxImageIndexArray: Array<number> = [];
    get maxImageIndex():number {
        this.maxImageIndexArray.length = this.results.length;
        return this.maxImageIndexArray[this.index] || 999;
    }
    set maxImageIndex(maxValue: number){
        this.maxImageIndexArray.length = this.results.length;
        this.maxImageIndexArray[this.index] = maxValue;
    }
    public imageurl: SafeUrl;
    min = 1;
    max = 1;
    job = new JobCardModel();
    // tslint:disable-next-line: max-line-length
    jobDetailInfo: { maxCount: number, suffixAndType: Array<{ suffix: string, type: 'string' | 'number' }> } = { maxCount: 0, suffixAndType: [] };
    // tslint:disable-next-line: max-line-length
    repeatedNameList: { suffixAndType: Array<{ suffix: string, type: 'string' | 'number' }>, names: Array<string> } = { suffixAndType: [], names: [] };

    jobDetailFor: Array<number> = [];

    constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

    ngOnInit() {
        this.cachedImages.length = this.results.length;
        this.initDateFormGroup();
    }

    initDateFormGroup() {
        this.dateFormGroup = new FormGroup({
            picker1: new FormControl({ disabled: this.disabled }),
            picker2: new FormControl({ disabled: this.disabled }),
            picker3: new FormControl({ disabled: this.disabled })
        });
    }

    pad(n, width, z: string = '0') {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    convertToCurrency(value: string): string {
        if (/^\d+$/.test(value)) {
            value += ".00";
        } else if (/^\d+\.\d$/.test(value)) {
            value += "0";
        }
        return value;
    }
    getRepeatedNameInfo(name: string, suffix: string): string | number {
        const jobFieldName = "job" + name + suffix;
        return this.convertToCurrency(this.job[jobFieldName] || '');

    }

    getJobDetailInfo(index: number, suffix: string): string | number {
        const jobFieldName = "job" + suffix + this.pad(index, 2);
        return this.convertToCurrency(this.job[jobFieldName] || '');
    }

    hasRepeatedNameNonNull(name: string): boolean {
        for (const suffixAndType of this.repeatedNameList.suffixAndType) {
            if (this.getRepeatedNameInfo(name, suffixAndType.suffix)) {
                return true;
            }
        }
        return false;
    }

    hasJobDetailInfoNonNull(index: number): boolean {
        for (const suffixAndType of this.jobDetailInfo.suffixAndType) {
            if (this.getJobDetailInfo(index, suffixAndType.suffix)) {
                return true;
            }
        }
        return false;
    }


    cycleImage() {
        this.imageIndex = (this.imageIndex + 1) % this.maxImageIndex;
        this.getImage();
    }

    private async init() {
        if (this.results) {
            this.cachedImages.length = this.results.length;
            this.imageIndex = 0;
            const len = this.results.length;
            this.max = len;
            this.min = 1;
            if (this.index >= len) {
                this.index = 0;
            }
            this.job = this.results[this.index];
            this.initDateFormGroup();
            this.imageurl = null;
            this.jobDetailInfo = JobCardModel.getJobDetailInfo();
            this.jobDetailFor = [];
            for (let i = 0; i <= this.jobDetailInfo.maxCount; i++) {
                this.jobDetailFor.push(i);
            }
            this.repeatedNameList = JobCardModel.getRepeatedNameList();
            this.getImage();
        } else {
            this.max = 0;
            this.min = 0;
        }
    }

    private async getImage(){
        let existing = this.cachedImages[this.index];
        if (!existing){
            existing = [];
            this.cachedImages[this.index] = existing;
        }
        if (this.imageIndex < existing.length){
            this.imageurl = existing[this.imageIndex];
        } else {
            if (this.subscription){
                this.subscription.unsubscribe();
            }
            this.subscription = this.http.get('/api/platingSearch/images/' + this.job.jobID + "?q=" + this.imageIndex).subscribe((result: string) => {
                if (result) {
                    this.imageurl = this.domSanitizer.bypassSecurityTrustUrl(result);//"data:image/jpg;base64, " + result);
                    const security = this.imageurl ? this.imageurl["changingThisBreaksApplicationSecurity"]: null;
                    if (security){
                        let foundFiltered = existing.filter((item)=>{
                            return (item && item["changingThisBreaksApplicationSecurity"] === security);
                        })
                        if (foundFiltered.length){
                            this.maxImageIndex = existing.length;
                        } else {
                            existing.push(this.imageurl);
                        }
                    }
                }
            }, error => {
                console.error(error);
            });
        }
    }

    onSliderChange(event: MatSliderChange) {
        this.index = event.value - 1;
        this.init();
    }

    formatSliderLabel(value: number) {

        return '' + value;
    }
    ngOnChanges() {
        this.init();
    }

}
