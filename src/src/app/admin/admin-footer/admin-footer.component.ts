import { Component, OnInit } from '@angular/core';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.css']
})
export class AdminFooterComponent implements OnInit {

  constructor(public signalService: SignalService) { }

  ngOnInit() {
    this.signalService.addMessage("Socket Connected")
  }

}
