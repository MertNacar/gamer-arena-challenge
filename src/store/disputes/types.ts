export interface IMatch {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  endedAt: Date;
  duel: number;
  users: Array<string>;
}

export interface IDisputeState {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  creator: string;
  type: string;
  status: string;
  statusData: string;
  match: IMatch;
}

export interface IDisputeListState {
  next: string | null;
  previous: string | null;
  results: Array<IDisputeState> | null;
}

export interface IUpdateDispute {
  type: string;
  payload: IDisputeListState;
}

export interface IFetchDispute {
  type: string;
  payload: string;
}

export const FETCH_DISPUTE = "FETCH_DISPUTE";
export const FETCH_DISPUTE_MORE = "FETCH_DISPUTE_MORE";
export const SUCCEED_DISPUTE = "SUCCEED_DISPUTE";
export const SUCCEED_DISPUTE_MORE = "SUCCEED_DISPUTE_MORE";
export const FAILED_DISPUTE = "FAILED_DISPUTE";

export type DisputeTypes = IUpdateDispute | IFetchDispute;
