import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { confirmDialogMessage } from '../confirm-dialog/data/dialog-message';
import { HotkeyService } from '../service/hotkey.service';

@Component({
  selector: 'app-dialog-button',
  templateUrl: './dialog-button.component.html',
  styleUrls: ['./dialog-button.component.scss']
})
export class DialogButtonComponent implements OnInit {

  // メッセージを取得
  message: string = confirmDialogMessage.clear;

  constructor(
    private dialog: MatDialog,
    private hotkey: HotkeyService
    ) { }

  ngOnInit(): void {
    this.hotkey.addShortcut({keys: 'F2'}).subscribe(() => {
      this.confirmDialog();
    });
  }

  confirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {   // テンプレートを指定
      width: '420px',    // ダイアログサイズを指定
      data: {
        dialogMessage: this.message,    // 表示サイズを指定
      },
      disableClose: true,
      hasBackdrop: true,
    });
    dialogRef.afterClosed().subscribe((result) => {    // OKボタン押下後の挙動を指定
      if (result === true) {
        console.log('OKされました。');
      }
    });
  }

}
