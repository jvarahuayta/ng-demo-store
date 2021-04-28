import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageModule } from '../../../shared/page/page.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, ShellRoutingModule, MatToolbarModule, PageModule],
})
export class ShellModule {}
