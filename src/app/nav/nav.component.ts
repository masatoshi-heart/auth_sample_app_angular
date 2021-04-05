import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { from, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CdkDropList, CdkDragDrop } from '@angular/cdk/drag-drop';
import { AuthMetaService } from '../service/auth.service';
import { sidNavItems} from './nav.data';

export interface Meta {
  user_type: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  //ToolTipの表示

  // sideNaveのリンクデータ
  sidNavData = sidNavItems;
  // ナビメニュー検索ワードを格納する変数
  searchText: string = "";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authMetaServis: AuthMetaService,
 ) {}

  ngOnInit(): void {
    // メニューの表示・非表示の切り替え
    this.authMetaServis.getAuth();
  }
  // メニューの表示・非表示の切り替え
  get metadata(): Meta{
    return this.authMetaServis.metadata;
  };


  // ドラッグ&ドロップの記述
  dropped($event: CdkDragDrop<string>) {
    console.log($event);
  }

  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>;

  drops: CdkDropList[];

  ngAfterViewInit() {
    this.dropsQuery.changes.subscribe(() => {
      this.drops = this.dropsQuery.toArray()
    })
    Promise.resolve().then(() => {
      this.drops = this.dropsQuery.toArray();
    })
  }
}
