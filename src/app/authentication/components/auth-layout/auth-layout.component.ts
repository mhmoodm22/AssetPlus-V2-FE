import { Component } from '@angular/core';
import { flyInOut } from '../../../modules/animation/animation.component';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  animations:[flyInOut]
})
export class AuthLayoutComponent {

}
