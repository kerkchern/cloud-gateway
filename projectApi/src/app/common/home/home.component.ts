import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';

  countType: [];
  countBookedType: [];

  cropsCount: number = 0;
  flowerCount: number = 0;
  fruitsCount: number = 0;
  vegetableCount: number = 0;
  othersCount: number = 0;

  cropsBookCount: number = 0;
  flowerBookCount: number = 0;
  fruitsBookCount: number = 0;
  vegetableBookCount: number = 0;
  othersBookCount: number = 0;


  //countType: Map<string, number>;

  typeChartLabels: Label[];
  typeChartData: MultiDataSet = [
    []
  ];
  typeChartType: ChartType;

  bookTypeChartLabels: Label[];
  bookTypeChartData: MultiDataSet = [
    []
  ];
  bookTypeChartType: ChartType;


  constructor(private authService: AuthenticationService,
              private requestService: RequestService,
              private http: HttpClient) { }

  ngOnInit(): void {

    this.username = this.authService.getUser();
    this.retrieveAllFarmTypes();
    this.retrieveAllBookFarmTypes();
  }

  retrieveAllFarmTypes(){

    console.log('retrieveAllFarmTypes...');
    this.requestService.get('/farmListing/retrieve/type').subscribe(
      data => {
        this.countType = data as any;
        console.log(this.countType);

        for (var key in this.countType) {
           this.cropsCount = this.countType["Crops"];
           this.flowerCount = this.countType["Flower"];
           this.fruitsCount = this.countType["Fruits"];
           this.vegetableCount = this.countType["Vegetables"];
           this.othersCount = this.countType["Others"];
        }

        console.log("init doughnut chart..");
        this.typeChartLabels = ['Crops', 'Flowers', 'Fruits', 'Vegetables', 'Others'];
        this.typeChartData = [
          [this.cropsCount, this.flowerCount, this.fruitsCount, this.vegetableCount, this.othersCount]
        ];
        this.typeChartType = 'doughnut';
      }
    );
  }

  retrieveAllBookFarmTypes() {
    this.requestService.get('/farmListing/retrieve/booked/type').subscribe(
      data => {
        console.log('retrieving data from backend..');
        this.countBookedType = data as any;
        console.log(this.countBookedType);

        for (var key in this.countBookedType) {
            this.cropsBookCount = this.countBookedType["Crops"];
            this.flowerBookCount = this.countBookedType["Flower"];
            this.fruitsBookCount = this.countBookedType["Fruits"];
            this.vegetableBookCount = this.countBookedType["Vegetables"];
            this.othersBookCount = this.countBookedType["Others"];
        }

        console.log("init book type doughnut chart..");
        this.bookTypeChartLabels = ['Crops', 'Flowers', 'Fruits', 'Vegetables', 'Others'];
        this.bookTypeChartData = [
          [this.cropsBookCount, this.flowerBookCount, this.fruitsBookCount, this.vegetableBookCount, this.othersBookCount]
        ];
        this.bookTypeChartType = 'doughnut';
      }
    );

  }



}
