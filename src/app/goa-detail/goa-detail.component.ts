import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GOA } from '../goaInterface';

@Component({
  selector: 'app-goa-detail',
  templateUrl: './goa-detail.component.html',
  styleUrls: ['./goa-detail.component.css']
})
export class GoaDetailComponent implements OnInit {

  @Input() goa: GOA;

  constructor() { }

  ngOnInit(): void {
  }

}
