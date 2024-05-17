import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-layout',
  // standalone: true,
  // imports: [
  //   CommonModule,
  //   NavbarComponent,
  //   FooterComponent
  // ],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicLayoutComponent {}
