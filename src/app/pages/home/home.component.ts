import { Component } from '@angular/core';
import { fadeIn } from '../../modules/animation/animation.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeIn]
})
export class HomeComponent {

}
