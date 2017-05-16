import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../shared/logging.service';
import { AccountsService } from './../shared/accounts.service'; 

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})

export class NewAccountComponent implements OnInit {

  constructor(private logService: LoggingService, private accountService:AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status:string) => console.log("Subscribe status changed: " + status)
    );
   }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.logService.logStatus(accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
    
  }

}
