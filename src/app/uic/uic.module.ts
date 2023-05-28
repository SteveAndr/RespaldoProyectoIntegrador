import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UicComponent } from './uic.component';
import { InfoProjectComponent } from './info-project/info-project.component';
import { AssignComponent } from './assign/assign.component';
import { UptakeComponent } from './agreement/uptake/uptake.component';
import { SendExtensionComponent } from './agreement/send-extension/send-extension.component';



@NgModule({
  declarations: [
    UicComponent,
    InfoProjectComponent,
    AssignComponent,
    UptakeComponent,
    SendExtensionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UicModule { }
