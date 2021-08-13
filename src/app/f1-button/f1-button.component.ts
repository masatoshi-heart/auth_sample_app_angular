import { Component, Input, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { confirmDialogMessage } from '../confirm-dialog/data/dialog-message';
import { DialogService } from '../service/dialog.service';
import { HotkeyService } from '../service/hotkey.service';

@Component({
  selector: 'app-f1-button',
  templateUrl: './f1-button.component.html',
  styleUrls: ['./f1-button.component.scss']
})
export class F1ButtonComponent implements OnInit {

  @Input() doSomething: any;
  @Input() message: string;
  @Input() fKey: string;

  constructor(
    private dialog: DialogService,
    private hotkey: HotkeyService
  ) { }

  ngOnInit(): void {
    this.hotkey.addShortcut({keys: this.fKey}).subscribe(() => {
      this.confirmDialog();
    });
  }

  confirmDialog(): void{
    this.dialog.dialogS(ConfirmDialogComponent, this.doSomething, this.message);
  }
}
