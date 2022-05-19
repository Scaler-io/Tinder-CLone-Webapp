import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'tinder-clone-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }
   
  @HostListener('window:resize', ['$event'])
  isMobileView(): boolean{
    if(window.innerWidth <= 599) return true;
    else return false;
  }

}
