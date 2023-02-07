import { Component } from '@angular/core';

interface TreasureType {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '_Dev_Null_\'s DnD 5e Loot Generator';
  challengeRating: number = 1;
  groupLoot: boolean = false;
}
