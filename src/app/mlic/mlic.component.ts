import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MlicQuery, MlicService, MlicState, MlicStore } from './store';
import { getEntityType } from '@datorama/akita';

@Component({
  selector: 'app-mlic',
  templateUrl: './mlic.component.html',
  styleUrls: ['./mlic.component.scss']
})
export class MlicComponent implements OnInit {

  readonly mlics$: Observable<getEntityType<MlicState>[]>;

  constructor(
    private mlicService: MlicService,
    private mlicQuery: MlicQuery,
    private mlicStore: MlicStore,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.mlics$ = this.mlicQuery.selectAll();
  }

  ngOnInit(): void {
    this.mlicService.getMlic().subscribe(
      result => console.log(result)
    );
  }

  storeClear() {
    this.mlicStore.reset();
  }

  redraw() {
    // 強制的に再描画させる
    this.changeDetectorRef.detectChanges();
  }



}
