import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { GlobalErrorStore } from './global-error.store';

@Injectable({ providedIn: 'root' })
export class GlobalErrorService {

  constructor(private globalErrorStore: GlobalErrorStore, private http: HttpClient) {
  }


}
