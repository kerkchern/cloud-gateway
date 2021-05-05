import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
    selector: 'app-view-worker',
    templateUrl: './view-worker.component.html',
    styleUrls: ['./view-worker.component.css']
  })
export class ViewWorkerComponent implements OnInit {

    listings: [];

    listing = {
        workerId : null,
        name: '',
        workType : '',
        employment : ''
      }

    constructor(private http:HttpClient,
        private requestService: RequestService,
        private dataService: DataService,
        private router:Router,
        private parserFormatter: NgbDateParserFormatter) { }
        
      ngOnInit(): void {
         this.retrieveWorker();
      }

      retrieveWorker(){
        this.requestService.get('/farmListing/retrieveAllWorker').subscribe(
          data => {
            this.listings = data as any;
          }
        );
      }
}