import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgIconRegistry } from './shared/svg/svg-markup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tinder-CLone-Webapp';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer){
    SvgIconRegistry.registerIcons(iconRegistry, sanitizer);
  }
}
