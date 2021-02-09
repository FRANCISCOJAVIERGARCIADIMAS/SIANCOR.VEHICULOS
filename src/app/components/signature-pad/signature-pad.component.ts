/**
 * Angular Component
 * @name SignaturePad
 * @description Handles component signature pad
 * @version 1.0 - Jan 30th, 2020
 * @requires angular2-signaturepad
 * 
 * API reference: {@link https://github.com/wulfsolter/angular2-signaturepad SignaturePad}
 */

import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss'],
})

export class SignaturePadComponent implements OnInit {

  @Input() label: string;
  @Input() signature: string;
  @Output() signatureEmitted: EventEmitter<string>;

  @ViewChild('signaturePad') signaturePad: SignaturePad;
  signaturePadOptions: Object;

  constructor() {
    this.signatureEmitted = new EventEmitter<string>();
  }

  ngOnInit() {
    this.signaturePadOptions = {
      'minWidth': 0.5,
      'canvasWidth': 1000,
      'canvasHeight': 300,
      'penColor': "rgb(0, 0, 255)"
    };
  }

  drawComplete() {
    this.signature = this.signaturePad.toDataURL('image/svg+xml');
  }

  onClickClean() {
    this.signaturePad.clear();
  }

  onClickSuccess() {
    this.signatureEmitted.emit(this.signature);
  }

}
