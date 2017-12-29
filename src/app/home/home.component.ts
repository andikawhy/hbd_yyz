import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatTextareaAutosize, MatDialogClose, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { LoadingComponent } from '../loading/loading.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        state('true' , style({ opacity: 1 })), 
        state('false', style({ opacity: 0 })),
        transition(':enter', [
          style({ opacity: 0 }),
          animate('750ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('0ms', style({ opacity: 0 }))
        ])
      ]
    )
  ]
})

export class HomeComponent implements OnInit {
  loading: boolean;

  urlGambar: string = '../../assets/images/berdua.jpg';

  home: string;
  pertama: string;
  kedua: string;
  ketiga: string;
  penutup: string;
  akhir: string;
  salah: string;

  constructor(
    public dialog: MatDialog,
    private _http: Http,
  ) {
    this.loading = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.home = 'isi';
      this.loading = false;
    }, 2000);
  }

  openDialog(tanggal: String): void {
    if (tanggal === '12 maret 2016' ||
    tanggal === '12 Maret 2016' ||
    tanggal === '12 maret') {
      this.pertama = 'isi';
      this.home = null;
      this.loading = true;
      this.salah = null;
      setTimeout(() => {
        this.loading = false;
        const dialogRef: any = this.dialog.open(DialogComponent, {
          disableClose: true,
        });
      }, 2000);
      // let sub: any = dialogRef.componentInstance.onAdd.subscribe((data) => this.namaPet = data);
    } else {
      this.salah = 'Ingat baik-baik.';
    }
  }

  pertanyaanPertama(body: string): void {
    if (body === '3' || body === 'tiga' || body === '3 bulan' || body === 'tiga bulan') {
      this.pertama = null;
      this.loading = true;
      this.salah = null;
      setTimeout(() => {
        this.kedua = 'isi';
        this.loading = false;
      }, 2000);
    } else {
      this.salah = 'Ingat baik-baik.';
    }
    }

    pertanyaanKedua(body: string): void {
      if (body === 'Minggu' || body === 'minggu' || body === 'ahad') {
        this.kedua = null;
        this.loading = true;
        this.salah = null;
        setTimeout(() => {
          this.ketiga = 'isi';
          this.loading = false;
        }, 2000);
      } else {
        this.salah = 'Ingat baik-baik.';
      }
    }

    pertanyaanKetiga(body: string): void {
      if (body === 'parangtritis' || body === 'Parangtritis') {
        this.ketiga = null;
        this.loading = true;
        this.salah = null;
        setTimeout(() => {
          this.penutup = 'isi';
          this.loading = false;
        }, 2000);
      } else {
        this.salah = 'Ingat baik-baik.';
      }
    }

    penutupCerita(): void {
      this.penutup = null;
      this.loading = true;
      this.salah = null;
      setTimeout(() => {
        this.akhir = 'isi';
        this.loading = false;
      }, 2000);
    }

}

