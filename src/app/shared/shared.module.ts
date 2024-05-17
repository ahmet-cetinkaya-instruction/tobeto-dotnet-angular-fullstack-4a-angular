import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './components/basic-layout/basic-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [BasicLayoutComponent, FooterComponent], // Declarations: Template tarafında kullanmamız gereken standolone olmayan angular bileşenlerini -component'ler, directive'ler, pipe'lar- tanımladığımız yerdir.

  imports: [
    CommonModule,
    NavbarComponent,
    // FooterComponent
  ],

  exports: [BasicLayoutComponent, NavbarComponent, CommonModule], // Export: Bu modül içerisinde tanımlanan bileşenlerin, directive'lerin ve pipe'ların dışarıya açılmasını sağlar. Bu sayede bu modülü import eden diğer modüller bu bileşenleri kullanabilir.
})
export class SharedModule {}
// exports tarafındaki angular bileşenlerini kullanmak isteyen diğer modüller veya standolone bileşenler, bu modülü import etmelidir.
// Böylece imports tarafındaki import edilen modüller de kullanılabilir hale gelir.
// Hem de exports tarafındaki bileşenler de kullanılabilir hale gelir.
