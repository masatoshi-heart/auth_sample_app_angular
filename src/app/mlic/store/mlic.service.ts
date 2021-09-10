import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Mlic } from '../mlic.model';
import { MlicStore } from './mlic.store';

@Injectable({ providedIn: 'root' })
export class MlicService {

  constructor(private mlicStore: MlicStore, private http: HttpClient) {
  }

  getMlic(): Observable<Mlic[]>{
    return this.http
      .get<Mlic[]>('https://5fdc6e02-bd80-412c-8798-5491f88f6e75.mock.pstmn.io/api/MLICs')
      .pipe(
        tap(entities => {
          this.mlicStore.set(entities);
        })
    );
  }

}
