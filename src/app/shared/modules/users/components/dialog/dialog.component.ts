import { Component, Inject } from '@angular/core';
import { EditableUser } from '../../models/editable-user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'apicars-user-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditableUser
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return 'Por favor, preencha o campo.';
  }
}
