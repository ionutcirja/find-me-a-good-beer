import { fork, all } from 'redux-saga/effects';
import { watchSearchRequest } from './search';

export default function* () {
  yield all([
    fork(watchSearchRequest),
  ]);
}
