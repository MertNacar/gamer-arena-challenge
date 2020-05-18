import React, { useState, useEffect, FormEvent, KeyboardEvent } from "react";
import DisputeList from "../components/Disputes/DisputeList";
import DisputeHeader from "../components/Disputes/DisputeHeader";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IReduxState, IDispatchProps } from "../store/configureStore";
import { DisputeTypes, IDisputeListState } from "../store/disputes/types";
import { fetchDispute, fetchDisputeMore } from "../store/disputes/action";

interface IProp {
  dispute: IDisputeListState;
  fetchDispute: (url: string) => DisputeTypes;
  fetchDisputeMore: (url: string) => DisputeTypes;
}

function Disputes(props: IProp) {
  const [searchValue, setSearchValue] = useState("");
  const [btnVisible, setBtnVisible] = useState(true);

  useEffect(() => {
    if (props.dispute.next === null && props.dispute.previous === null) {
      getDisputes();
    }
    setVisiblity();
    // eslint-disable-next-line
  }, [props.dispute.next]);

  function changeText(e: FormEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  function getDisputes() {
    props.fetchDispute("https://api.staging.gamerarena.com/disputes/");
  }

  function getSearchedDispute() {
    props.fetchDispute(
      `https://api.staging.gamerarena.com/disputes/?searchUsername=${searchValue}`
    );
  }

  function inputKeyDown(e: KeyboardEvent) {
    console.log('e', e)
    if (e.key === "Enter") {
      getSearchedDispute();
    }
  }

  function setVisiblity() {
    setBtnVisible(props.dispute.next != null);
  }

  function LoadMoreDispute() {
    props.fetchDisputeMore(props.dispute.next!);
  }

  return (
    <div className="dispute">
      <DisputeHeader
        inputText="Kullanıcı ara"
        title="İtirazlar"
        changeText={(e) => changeText(e)}
        searchClick={() => getSearchedDispute()}
        keyDown={(e: KeyboardEvent) => inputKeyDown(e)}
      />
      <DisputeList
        data={props.dispute.results}
        btnVisible={btnVisible}
        LoadMoreDispute={() => LoadMoreDispute()}
      />
    </div>
  );
}

function mapStateToProps(state: IReduxState): IReduxState {
  return {
    dispute: state.dispute,
  };
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchProps {
  return {
    fetchDispute: (url: string): DisputeTypes => dispatch(fetchDispute(url)),
    fetchDisputeMore: (url: string): DisputeTypes =>
      dispatch(fetchDisputeMore(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Disputes);
