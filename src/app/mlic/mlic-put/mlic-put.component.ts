import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mlic, MlicQuery, MlicService } from '../store';

@Component({
  selector: 'app-mlic-put',
  templateUrl: './mlic-put.component.html'
})
export class MlicPutComponent implements OnInit {

  id = +this.route.snapshot.paramMap.get('id');
  mlic$ = this.mlicQuery.selectEntity(this.id);
  mlicForm: FormGroup;
  isLoading$ = this.mlicQuery.selectLoading();

  constructor(
    private mlicQuery: MlicQuery,
    private mlicService: MlicService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mlic$.subscribe(result =>{
      if (!result) {
        const promise = this.mlicService.getMlic(this.id)
        .then(() => {
          this.setInitialValue(result);
        });
        promise.catch(e => {}); // Uncaught (in promise)エラーの抑制
      } else {
        this.setInitialValue(result);
      }
    });
  }

  setInitialValue(mlic: Mlic): void {
      this.mlicForm = this.fb.group({
        id: [mlic.id],
        cpid: [mlic.cpid],
        svid: [mlic.svid],
        svnm: [mlic.svnm],
        stat: [mlic.stat],
        lisu: [mlic.lisu],
      });
  }

  onSubmit(): void{
    const mlic = this.mlicForm.getRawValue();
    mlic.exdt = new Date();
    this.mlicService.updaetMlic(mlic);
  }

}
