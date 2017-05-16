import { Component, OnInit,Input } from '@angular/core';
import { LoggingService } from './../shared/logging.service';
import { AccountsService } from './../shared/accounts.service'; 

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account:{name:string, status:string};
  @Input() id:number;

  constructor(private logService:LoggingService, private accountService:AccountsService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
    }

}
