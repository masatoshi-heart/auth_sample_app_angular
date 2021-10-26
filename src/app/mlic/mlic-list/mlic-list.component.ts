import { Component, OnInit } from '@angular/core';
import { getEntityType } from '@datorama/akita';
import { Observable } from 'rxjs';
import { MlicQuery, MlicService, MlicState, MlicStore } from '../store';

@Component({
  selector: 'app-mlic-list',
  templateUrl: './mlic-list.component.html'
})
export class MlicListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cpid', 'svid', 'svnm', 'stat', 'lisu', 'exdt'];

  readonly mlics$: Observable<getEntityType<MlicState>[]>;
  readonly isLoading$ = this.mlicQuery.selectLoading();

  constructor(
    private mlicService: MlicService,
    private mlicQuery: MlicQuery,
    private mlicStore: MlicStore,
  ) {
    this.mlics$ = this.mlicQuery.selectAll();
  }

  ngOnInit(): void {
    this.mlicService.getMlics();
  }

  storeClear() {
    this.mlicStore.reset();
  }

}
