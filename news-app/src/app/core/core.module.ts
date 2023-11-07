import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
