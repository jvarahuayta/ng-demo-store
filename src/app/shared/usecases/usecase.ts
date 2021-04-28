import { Observable } from 'rxjs';

export interface IUsecase<Request, Result> {
  execute(request: Request): Result;
}

export interface IAsyncUsecase<Request, Result> {
  execute(request: Request): Promise<Result>;
}

export interface IObservableUsecase<Request, Result> {
  execute(request: Request): Observable<Result>;
}
