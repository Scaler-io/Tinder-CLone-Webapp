import { Component, Input, OnInit } from '@angular/core';
import { FooterItemModel } from 'src/app/core/model/footer-item';

@Component({
  selector: 'tinder-clone-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.scss']
})
export class FooterItemComponent implements OnInit {
  @Input() footerContent: FooterItemModel;
  
  constructor() {}

  ngOnInit(): void {
  }

}
