import { Component } from '@angular/core';
import { fadeIn } from '../../modules/animation/animation.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  animations: [fadeIn]
})
export class ContactUsComponent {

}
