import { Component, OnInit } from '@angular/core';
import { Mlic, MlicQuery, MlicService } from '../store';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mlic-post',
  templateUrl: './mlic-post.component.html'
})
export class MlicPostComponent implements OnInit {

  mlicForm: FormGroup;
  mlic: Mlic;

  constructor(
    private mlicService: MlicService,
    private fb:FormBuilder
  ) {
    this.mlicForm = this.fb.group({
      cpid: [''],
      svid: [''],
      svnm: [''],
      stat: ['1'],
      lisu: [0],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const mlic: Mlic = this.mlicForm.getRawValue();
    mlic.exdt = new Date();
    this.mlicService.addMlic(mlic);
  }

}
