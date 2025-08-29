import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { FooterComponent } from './Shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PayIt';
}
