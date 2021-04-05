import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-flex-chart',
  templateUrl: './flex-chart.component.html',
  styleUrls: ['./flex-chart.component.scss']
})
export class FlexChartComponent implements OnInit {

  data: any[];

  constructor(@Inject(DataService) private dataService: DataService) {
    this.data = dataService.getData2();
  }

  ngOnInit(): void {
  }
}
