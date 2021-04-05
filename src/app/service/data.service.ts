import { Injectable } from '@angular/core';
import * as wjCore from '@grapecity/wijmo';

export interface DataItem {
    date: Date;
    buyer: string;
    type: string;
    amount: number;
}

function randomItem(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(cnt: number): DataItem[] {
    var today = new Date(),
    buyers = '成宮 真紀,山本 雅治,加藤 泰江,川村 匡'.split(','),
    types = '音楽,ビデオ,本,家電,パソコン,食品'.split(','),
    data = [];
    for (var i = 0; i < cnt; i++) {
      data.push({
        date: wjCore.DateTime.addDays(today, -Math.random() * 365 * 3),
        buyer: randomItem(buyers),
        type: randomItem(types),
        amount: 20 + Math.random() * 1000
      });
    }
    return data;
  }

  getData2() {
    return [
      { country: 'アメリカ', '2014': 17348075, '2015': 18036650, '2016': 18624450 },
      { country: '中国', '2014': 10356508, '2015': 11181556, '2016': 11232110 },
      { country: '日本', '2014': 4602367, '2015': 4124211, '2016': 4936540 },
      { country: 'ドイツ', '2014': 3874437, '2015': 3365293, '2016': 3479230 },
      { country: 'イギリス', '2014': 2950039, '2015': 2858482, '2016': 2629190 },
      { country: 'フランス', '2014': 2833687, '2015': 2420163, '2016': 2466470 },
      { country: 'インド', '2014': 2051228, '2015': 2073002, '2016': 2263790 },
      { country: 'イタリア', '2014': 2147744, '2015': 1815759, '2016': 1850740 }
    ];
  }

  constructor() { }
}
