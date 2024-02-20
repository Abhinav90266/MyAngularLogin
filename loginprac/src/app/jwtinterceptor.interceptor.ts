import { HttpInterceptorFn } from '@angular/common/http';

export const jwtinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
