import { HostListener } from '@angular/core';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
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

