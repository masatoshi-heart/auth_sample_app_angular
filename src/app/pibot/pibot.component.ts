import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import * as wjOlap from '@grapecity/wijmo.olap';
import '@grapecity/wijmo.touch';

@Component({
  selector: 'app-pibot',
  templateUrl: './pibot.component.html',
  styleUrls: ['./pibot.component.scss']
})
export class PibotComponent implements OnInit {
  ng: wjOlap.PivotEngine;

  constructor(@Inject(DataService) private dataService: DataService) {
    this.ng = new wjOlap.PivotEngine({
      autoGenerateFields: false,
        fields: [
          { binding: 'date', header: '日付' },
          { binding: 'buyer', header: '担当者' },
          { binding: 'type', header: '分類' },
          { binding: 'amount', header: '金額' }
        ],
        itemsSource: dataService.getData(1000), // raw data
        valueFields: ['金額'], // summarize amounts
        rowFields: ['担当者', '分類'], // by buyer and Type
        showRowTotals: 'Subtotals',
        showColumnTotals: 'Subtotals',
    });
    this.ng.fields.getField('金額').format = 'c0';
    this.ng.fields.getField('日付').format = 'yyyy';
    }
  ngOnInit(): void {
  }

}
