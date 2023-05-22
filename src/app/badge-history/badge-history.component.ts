import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-history',
  templateUrl: './badge-history.component.html',
  styleUrls: ['./badge-history.component.css']
})
export class BadgeHistoryComponent implements OnInit {
  badgeHistory: string[] = [];

  constructor() { }

  ngOnInit() {
    this.badgeHistory = [
      'Badge 1',
      'Badge 2',
      'Badge 3',
      'Badge 4',
      'Badge 5'
    ];
  }
}
