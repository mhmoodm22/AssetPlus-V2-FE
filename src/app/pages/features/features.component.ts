import { Component } from '@angular/core';
import { fadeIn } from '../../modules/animation/animation.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  animations: [fadeIn]
})
export class FeaturesComponent {

}
