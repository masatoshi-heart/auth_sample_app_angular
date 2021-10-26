import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Mlic } from './mlic.model';
import { MlicStore } from './mlic.store';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json'),
};

@Injectable({ providedIn: 'root' })
export class MlicService {

  constructor(
    private mlicStore: MlicStore,
    private http: HttpClient,
    private route: Router
  ) {}

  getMlics(): void{
    this.mlicStore.setLoading(true);
    this.http
      .get<Mlic[]>('/api/MLICs').toPromise()
      .then(entities =>
        {
          this.mlicStore.set(entities);
        });
  }

  getMlic(id: number): Promise<void>{
    this.mlicStore.setLoading(true);
    return this.http
      .get<Mlic>(`/api/MLICS/${id}`).toPromise()
      .then(mlic =>
        {
          this.mlicStore.add(mlic);
          this.mlicStore.setLoading(false);
        });
  }

  addMlic(mlic: Mlic): void {
    this.http
    .post<Mlic>('api/MLICS', mlic).toPromise()
    .then(result => {
      this.mlicStore.add(result);
      this.route.navigate([`mlic/show/${result.id}`]);
    });
  }

  updaetMlic(mlic: Mlic): void {
    this.http
      .put<Mlic>(`api/MLICS/${mlic.id}`, mlic, httpOptions).toPromise()
      .then(result => {
        this.mlicStore.update(mlic.id, {...result});
        this.route.navigate([`mlic/show/${result.id}`]);
      });
  }

  deleteMlic(id: string): void {
    this.http
      .delete(`api/MLICS/${id}`).toPromise()
      .then(result => {
        this.mlicStore.remove(id);
        this.route.navigate(['/mlic']);
      });
  }
}
