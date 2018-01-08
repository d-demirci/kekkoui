import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;
import { SignalService } from '../signal.service';
import { Signal } from './signal';

@Component({
  selector: 'app-admin-signals',
  templateUrl: './admin-signals.component.html',
  styleUrls: ['./admin-signals.component.css']
})
export class AdminSignalsComponent implements OnInit {

  constructor(public signalService: SignalService) { }
  signals:Signal =
    {
      'pair':'string',
      'type':'string',
      'longTermAvarage':0.5555555555555555,
      'midTermAvarage':0.4444444455555555,
      'shortTermAvarage':0.33333355555555,
      'quickTermAvarage':0.222222255555555,
      'longTermMin':0.111111155555555,
      'longTermMax':0.00000155555555,
      'CCI':'string',
      'action':'string',
      'lastTime':'string',
      'lastClosePrice':0.5555555555555,
      'interval':'string'
    }
  ;
  ngOnInit() {
    AdminLTE.init();
    this.getSignals();
  }
  getSignals(): void {

      this.signalService.addSignal(this.signals);
      this.signalService.getMessage()
      .subscribe(signals => this.signals = this.signals);
  }
}
