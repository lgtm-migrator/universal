import { Observable, of as observableOf, throwError } from 'rxjs';

import { UniqueId } from '../../../../../framework/ngrx';
import { ERROR__NO_PAYLOAD } from '../../../../../shared';
import { Airline } from '../../airline.model';
import { MOCK_AIRLINE, MOCK_AIRLINES } from '../common';

export class MockAirlineService {
  private _isFailing = false;

  set isFailing(value: boolean) {
    this._isFailing = value;
  }

  getMany$(): Observable<Array<Airline>> {
    return !this._isFailing ? observableOf(MOCK_AIRLINES) : throwError(ERROR__NO_PAYLOAD);
  }

  getOne$(id: UniqueId): Observable<Airline> {
    return !this._isFailing
      ? observableOf({
          ...MOCK_AIRLINE,
          _id: id
        })
      : throwError(ERROR__NO_PAYLOAD);
  }

  createOne$(resource: Airline): Observable<Airline> {
    return !this._isFailing ? observableOf(resource) : throwError(ERROR__NO_PAYLOAD);
  }

  updateOne$(resource: Airline): Observable<Airline> {
    return !this._isFailing ? observableOf(resource) : throwError(ERROR__NO_PAYLOAD);
  }

  deleteOne$(id: UniqueId): Observable<UniqueId> {
    return !this._isFailing ? observableOf(id) : throwError(ERROR__NO_PAYLOAD);
  }
}
