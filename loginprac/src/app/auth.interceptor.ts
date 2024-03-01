import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class authInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const myToken = JSON.parse((localStorage.getItem('token'))|| '{}');
    const modifiedRequest = request.clone({ setHeaders: { Authorization:  `Bearer ${myToken.token}` }});
    return next.handle(modifiedRequest);
  }
}

