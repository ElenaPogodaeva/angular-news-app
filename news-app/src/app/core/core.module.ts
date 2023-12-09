import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ApiInterceptor } from './interceptors/api.interceptor';

@NgModule({
  declarations: [HeaderComponent, NotFoundPageComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
