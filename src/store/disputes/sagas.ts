import { takeLatest, call, put } from "redux-saga/effects";
import { succeedDispute, failedDispute, succeedDisputeMore } from "./action";
import { FETCH_DISPUTE, FETCH_DISPUTE_MORE, DisputeTypes } from "./types";

import * as Http from "../../utils/httpHelper";

export function* fetchDispute(action: DisputeTypes) {
  try {
    const res = yield call(Http.get, action.payload);
    if (res.err) throw new Error();
    else {
      yield put(succeedDispute(res.data));
    }
  } catch (err) {
    yield put(failedDispute(err));
  }
}

export function* fetchDisputeMore(action: DisputeTypes) {
  try {
    const res = yield call(Http.get, action.payload);
    if (res.err) throw new Error();
    else {
      yield put(succeedDisputeMore(res.data));
    }
  } catch (err) {
    yield put(failedDispute(err));
  }
}

function* watchDispute() {
  yield takeLatest(FETCH_DISPUTE, fetchDispute);
  yield takeLatest(FETCH_DISPUTE_MORE, fetchDisputeMore);
}

export default function* rootSaga() {
  yield watchDispute();
}
