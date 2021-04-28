import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BypassSecurityTrustUrlPipe } from '../bypass-security-trust-url.pipe';

@NgModule({
  declarations: [BypassSecurityTrustUrlPipe],
  imports: [CommonModule],
  exports: [BypassSecurityTrustUrlPipe],
})
export class BypassSecurityTrustUrlPipeModule {}
