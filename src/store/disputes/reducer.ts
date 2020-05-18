import {
  IDisputeListState,
  IUpdateDispute,
  SUCCEED_DISPUTE,
  SUCCEED_DISPUTE_MORE,
} from "./types";

const initialState: IDisputeListState = {
  next: null,
  previous: null,
  results: [],
};

export const disputeReducer = (
  state = initialState,
  action: IUpdateDispute
): IDisputeListState => {
  switch (action.type) {
    case SUCCEED_DISPUTE:
      return Object.assign({}, state, action.payload);

    case SUCCEED_DISPUTE_MORE:
      let results = [...state.results!, ...action.payload.results!];
      return Object.assign({}, state, action.payload, { results });

    default:
      return state;
  }
};
