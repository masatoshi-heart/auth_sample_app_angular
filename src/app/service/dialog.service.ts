import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  callDialogS(
    dialogContent: any,
    afterColsedMethod: (par?: any) => void,
    data?: any
  ): void {
    const dialogRef = this.dialog.open(dialogContent, {
      width: '420px',
      data: { data },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        afterColsedMethod();
      }
    });
  }

  callDialogM(
    dialogContent: any,
    afterColsedMethod: (par?: any) => void,
    data?: any
  ): void {
    const dialogRef = this.dialog.open(dialogContent, {
      width: '840px',
      data: { data },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        afterColsedMethod();
      }
    });
  }

  callDialogL(
    dialogContent: any,
    afterColsedMethod: (par?: any) => void,
    data?: any
  ): void {
    const dialogRef = this.dialog.open(dialogContent, {
      width: '1024px',
      data: { data },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        afterColsedMethod();
      }
    });
  }

}

