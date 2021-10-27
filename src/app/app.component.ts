import { Component, OnInit } from '@angular/core';

import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  primengConfig: PrimeNGConfig;
  messageService: MessageService;

  constructor() {
    this.primengConfig = new PrimeNGConfig();
    this.messageService = new MessageService();
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
