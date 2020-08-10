import { Component, OnInit } from '@angular/core';

interface MyInterface {
  value: string;
}

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
