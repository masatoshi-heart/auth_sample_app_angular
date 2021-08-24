import { Component, OnInit } from '@angular/core';
import { confirmDialogMessage } from '../confirm-dialog/data/dialog-message';

@Component({
  selector: 'app-screen-item',
  templateUrl: './screen-item.component.html',
  styleUrls: ['./screen-item.component.scss']
})
export class ScreenItemComponent implements OnInit {

  message = confirmDialogMessage;

  constructor() { }

  ngOnInit(): void {}

  showConsole = () => console.log('F1が押されました。');
}

