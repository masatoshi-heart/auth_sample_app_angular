import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  callDialogS(
    dialogContent: any,
    afterColsedMethod?: (par?: any) => void,
    message?: any
  ): void {
    const dialogRef = this.dialog.open(dialogContent, {
      width: '420px',
      data: { message },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        if (afterColsedMethod !== undefined){
          afterColsedMethod();
        }
      }
    });
  }

  callDialogM(
    dialogContent: any,
    afterColsedMethod?: (par?: any) => void,
    message?: any
  ): void {
    const dialogRef = this.dialog.open(dialogContent, {
      width: '840px',
      data: { message },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        if (afterColsedMethod !== undefined){
          afterColsedMethod();
        }
      }
    });
  }

  callDialogL(
    dialogContent: any,
    afterColsedMethod?: (par?: any) => void,
    message?: any
  ): void {
    const dialogRef = this.dialog.open(dialogContent, {
      width: '1024px',
      data: { message },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        if (afterColsedMethod !== undefined){
          afterColsedMethod();
        }
      }
    });
  }

}

