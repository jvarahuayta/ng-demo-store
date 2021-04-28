import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'bypassSecurityTrustUrl',
})
export class BypassSecurityTrustUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string | undefined, ...args: unknown[]): unknown {
    if (!value) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
}
