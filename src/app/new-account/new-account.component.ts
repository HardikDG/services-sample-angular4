import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() newAccount = new EventEmitter<{name:string, status:string}>() 

  constructor() { }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.newAccount.emit({
      name: accountName,
      status: accountStatus
    });
  }

}