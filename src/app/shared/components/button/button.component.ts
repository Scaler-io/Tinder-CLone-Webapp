import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'tinder-clone-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public buttonText: string;

  @Input() 
  set text(name: string){
    this.buttonText = name;
  }

  @Input() isAutoWidth: boolean = false;
  @Input() isSubmit: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() customWidth: string;
  @Input() color: string;

  @Output() clicked: Subject<any> = new Subject<any>();
  
  get text(): string{
    return this.buttonText;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.clicked.next(null);
  }
}
