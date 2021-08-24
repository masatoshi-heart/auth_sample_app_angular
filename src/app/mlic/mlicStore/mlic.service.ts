import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Mlic } from '../mlic.model';
import { MlicStore } from './mlic.store';

@Injectable({ providedIn: 'root' })
export class MlicService {

  constructor(private store: MlicStore, private http: HttpClient) {}

  getAllMlics(): Observable<Mlic[]> {
    return this.http.get<Mlic[]>('/api/mlics').pipe(
      tap(mlics => {
        this.store.loadMlics(mlics, true);
      })
    );
  }

  createMlic(mlic: Mlic): Observable<Mlic> {
    return this.http.post<Mlic>('/api/mlics', mlic).pipe(
      tap(value => {
        this.store.add([value]);
      })
    );
  }

  deleteMlic(mlicId: string): Observable<any> {
    return this.http.delete('/api/mlics/' + mlicId).pipe(
      tap(result => {
        this.store.remove(mlicId);
      })
    );
  }

  updateMlic(mlicId: string, mlic: Mlic): Observable<any> {
    return this.http.put('/api/mlics/' + mlicId, mlic).pipe(
      tap(result => {
        this.store.update(mlicId, mlic);
      })
    );
  }

}
