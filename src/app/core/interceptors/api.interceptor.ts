import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();

    return next
      .handle(
        request.clone({
          url: `${environment.API_URL}/${request.url}`,
        }),
      )
      .pipe(finalize(() => this.loaderService.hide()));
  }
}
