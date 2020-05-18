import React, { FormEventHandler } from "react";
import { IDisputeState } from "../../store/disputes/types";
import DisputeCard from "../Disputes/DisputeCard";

interface IProp {
  data: Array<IDisputeState> | null;
  btnVisible: boolean;
  LoadMoreDispute: FormEventHandler<HTMLButtonElement>;
}

export default function DisputeList(props: IProp) {
  let disputeList = props.data!.map((item: IDisputeState, index: number) => {
    return (
      <div className="dispute-card" key={index}>
        <DisputeCard {...item} />
      </div>
    );
  });
  return (
    <div className="dispute-list">
      {disputeList}
      <div className="load-more">
        <button
          style={{ display: props.btnVisible ? "block" : "none" }}
          className="load-more-dispute"
          onClick={props.LoadMoreDispute}
        >
          Daha fazla yükle
        </button>
      </div>
    </div>
  );
}
