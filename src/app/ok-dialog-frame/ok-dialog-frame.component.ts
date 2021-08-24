import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ok-dialog-frame',
  templateUrl: './ok-dialog-frame.component.html',
  styleUrls: ['./ok-dialog-frame.component.scss']
})
export class OkDialogFrameComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OkDialogFrameComponent>,
  ) {}

  ngOnInit(): void {}

  closeDialog(result: boolean): void {
    this.dialogRef.close(result);
  }
}
