import {
  FETCH_DISPUTE,
  SUCCEED_DISPUTE,
  FAILED_DISPUTE,
  SUCCEED_DISPUTE_MORE,
  FETCH_DISPUTE_MORE,
  DisputeTypes,
  IDisputeListState,
} from "./types";

//action creators for disputes

export function fetchDispute(url: string): DisputeTypes {
  return {
    type: FETCH_DISPUTE,
    payload: url,
  };
}
export function fetchDisputeMore(url: string): DisputeTypes {
  return {
    type: FETCH_DISPUTE_MORE,
    payload: url,
  };
}

export function succeedDispute(disputes: IDisputeListState): DisputeTypes {
  return {
    type: SUCCEED_DISPUTE,
    payload: disputes,
  };
}

export function succeedDisputeMore(disputes: IDisputeListState): DisputeTypes {
  return {
    type: SUCCEED_DISPUTE_MORE,
    payload: disputes,
  };
}

export function failedDispute(error: IDisputeListState): DisputeTypes {
  return {
    type: FAILED_DISPUTE,
    payload: error,
  };
}
