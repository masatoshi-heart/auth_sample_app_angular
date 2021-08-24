import { Component, Input, OnInit } from '@angular/core';
import { ConfirmDialogContentComponent } from '../confirm-dialog-content/confirm-dialog-content.component';
import { DialogService } from '../service/dialog.service';
import { HotkeyService } from '../service/hotkey.service';

@Component({
  selector: 'app-f1-button',
  templateUrl: './f1-button.component.html',
  styleUrls: ['./f1-button.component.scss']
})
export class F1ButtonComponent implements OnInit {

  @Input() closedMethod?: any | undefined;
  @Input() message: string;
  @Input() functionKey: string;

  constructor(
    private dialog: DialogService,
    private hotkey: HotkeyService
  ) { }

  ngOnInit(): void {
    this.hotkey.addShortcut({keys: this.functionKey}).subscribe(() => {
      this.confirmDialog();
    });
  }

  confirmDialog(): void{
    this.dialog.callDialogS(ConfirmDialogContentComponent, this.closedMethod, this.message);
  }
}
