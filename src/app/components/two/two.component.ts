import { Component, OnInit } from '@angular/core';

interface MyInterface {
  value: string;
}

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
