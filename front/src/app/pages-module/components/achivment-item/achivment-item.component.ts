import { Component } from '@angular/core';

@Component({
  selector: 'app-achivment-item',
  templateUrl: './achivment-item.component.html',
  styleUrls: ['./achivment-item.component.scss']
})

export class AchivmentItemComponent {
  public isSelected: boolean = false;

  onClickInItem() {
    this.isSelected = true;
  } 

}
