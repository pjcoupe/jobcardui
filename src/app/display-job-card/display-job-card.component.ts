import { Component, OnInit, Input } from '@angular/core';
import { JobCardModel } from '../models/JobCardModel';
import { FormControl } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'display-job-card',
    templateUrl: './display-job-card.component.html',
    styleUrls: ['./display-job-card.component.css']
})
export class DisplayJobCardComponent implements OnInit {
    @Input() results: Array<JobCardModel> = [];
    @Input() index = 0;
    @Input() disabled = false;

    imageIndex = 0;
    public imageurl: Array<SafeUrl> = [];
    min = 1;
    max = 1;
    job = new JobCardModel();
    jobDetailInfo: { maxCount: number, suffixAndType: Array<{suffix: string, type: 'string' | 'number' }>}  = {maxCount: 0, suffixAndType: []};
    repeatedNameList: { suffixAndType: Array<{ suffix: string, type: 'string' | 'number' }>, names: Array<string> } = {suffixAndType: [], names: []};
  
    jobDetailFor: Array<number> = [];
   
    constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

    ngOnInit() {
    }

    pad(n, width, z: string = '0') {        
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    getRepeatedNameInfo(name: string, suffix: string): string | number {
        let jobFieldName = "job" + name + suffix;
        let value = this.job[jobFieldName];
        return value || '';
    }

    getJobDetailInfo(index: number, suffix: string): string | number {
        let jobFieldName = "job" + suffix + this.pad(index, 2);
        let value = this.job[jobFieldName];
        return value || '';
    }

    hasRepeatedNameNonNull(name: string): boolean{
        for (let suffixAndType of this.repeatedNameList.suffixAndType){
            if (this.getRepeatedNameInfo(name, suffixAndType.suffix)){
                return true;
            }
        }
        return false;
    }

    hasJobDetailInfoNonNull(index: number): boolean{
        for (let suffixAndType of this.jobDetailInfo.suffixAndType){
            if (this.getJobDetailInfo(index, suffixAndType.suffix)){
                return true;
            }
        }
        return false;
    }

    
    cycleImage(){
        this.imageIndex = (this.imageIndex + 1) % this.imageurl.length;
    }
    
    private async init(){
        if (this.results) {
            this.imageIndex = 0;
            let len = this.results.length;
            this.max = len;
            this.min = 1;
            if (this.index >= len) {
                this.index = 0;
            }
            this.job = this.results[this.index];
            this.imageurl = [];
            this.jobDetailInfo = JobCardModel.getJobDetailInfo();
            this.jobDetailFor = [];
            for (let i=0; i <= this.jobDetailInfo.maxCount; i++){
                this.jobDetailFor.push(i);
            }
            this.repeatedNameList = JobCardModel.getRepeatedNameList();
            this.http.get('/api/platingSearch/images/'+this.job.jobID).subscribe((results: Array<string>) => {
                if (results && results.length){
                    for (let result of results){
                        this.imageurl.push(this.domSanitizer.bypassSecurityTrustUrl("data:image/jpg;base64, " + result));
                    }
                }
            }, error => {
               console.error(error);
            });
        } else {
            this.max = 0;
            this.min = 0;
        }
    }

    onSliderChange(event: MatSliderChange) {
        this.index = event.value - 1;
        this.init();
      }

    formatSliderLabel(value: number) {

        return ''+value;      
    }
    ngOnChanges() {
        this.init();
    }

}
