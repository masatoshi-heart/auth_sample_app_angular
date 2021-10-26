import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mlic-form',
  templateUrl: './mlic-form.component.html'
})
export class MlicFormComponent implements OnInit {

  @Input()
  mlicForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get cpid() { return this.mlicForm.get('cpid'); }
  get svid() { return this.mlicForm.get('svid'); }
  get svnm() { return this.mlicForm.get('svnm'); }
  get stat() { return this.mlicForm.get('stat'); }
  get lisu() { return this.mlicForm.get('lisu'); }

}
