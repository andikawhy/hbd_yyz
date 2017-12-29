import { Component, HostBinding, AfterViewInit, Inject, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatTextareaAutosize, MatDialogClose, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  onAdd: any = new EventEmitter();

  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: any,
    public http: Http,
    public pembukaDialog: MatDialogRef<DialogComponent>,
    public dialog: MatDialog,
   ) { }

  ngOnInit() {

  }

  closeDialog(): void {
    this.pembukaDialog.close();
  }

}
