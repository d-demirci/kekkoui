import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSignalsComponent } from './admin-signals/admin-signals.component';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { SignalService } from './signal.service';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    AdminSignalsComponent
  ],
  exports: [AdminComponent],
  providers: [SignalService]
})
export class AdminModule { }
