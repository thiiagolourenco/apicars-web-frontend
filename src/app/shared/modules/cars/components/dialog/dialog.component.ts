import { Car } from '../../models/car.model';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'apicars-car-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return 'Por favor, preencha o campo.';
  }
}
