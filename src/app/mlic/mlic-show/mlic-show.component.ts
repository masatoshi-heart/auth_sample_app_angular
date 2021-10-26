import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MlicQuery, MlicService } from '../store';

@Component({
  selector: 'app-mlic-show',
  templateUrl: './mlic-show.component.html'
})
export class MlicShowComponent implements OnInit {

  id = +this.route.snapshot.paramMap.get('id');
  readonly mlic$ = this.mlicQuery.selectEntity(this.id);
  readonly isLoading = this.mlicQuery.selectLoading();
   displayedColumns: string[] = ['id', 'cpid', 'svid', 'svnm', 'stat', 'lisu', 'exdt'];

  constructor(
    private route: ActivatedRoute,
    private mlicService: MlicService,
    private mlicQuery: MlicQuery,
  ) {}

  ngOnInit(): void {
    this.mlicService.getMlic(this.id);
  }

  deleteMlic(): void {
    this.mlicService.deleteMlic(this.route.snapshot.paramMap.get('id'));
  }

}
