import { Component, OnInit } from '@angular/core';
import { FooterItemModel, FooterItemModelData } from '../../models/footer-item';

@Component({
  selector: 'tinder-clone-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerItemData: FooterItemModel[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.footerItemData = FooterItemModelData.getFooterItemData();
  }

}
