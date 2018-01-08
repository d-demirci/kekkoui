import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map'

import {Signal} from "./admin-signals/signal";

@Injectable()
export class SignalService {

  constructor(private socket: Socket) { let data = <any>{}; }

  sendMessage(msg: string){
    this.socket.emit("message", msg);
  }

  getMessage() {
    return this.socket
      .fromEvent("message")
      .map( data => data);
  }

  messages: string[] = [];

  signals:Signal[] = [];

  addMessage(message: string) {
    this.messages.push(message);
  }
  addSignal(signal:Signal){
    this.signals.push(signal)
  }

  clear() {
    this.messages = [];
  }

}

