import React, { FormEventHandler } from "react";
import SearchBox from "../General/SearchBox";
interface IProp {
  title: string;
  inputText: string;
  changeText: FormEventHandler<HTMLInputElement>;
  searchClick: any;
  keyDown: any
}
function DisputeHeader(props: IProp) {
  return (
    <div className="dispute-header">
      <span className="dispute-header-title-container">
        <p className="dispute-header-title">{props.title}</p>
      </span>
      <SearchBox
        changeText={props.changeText}
        keyDown={props.keyDown}
        searchClick={props.searchClick}
        inputText={props.inputText}
      />
    </div>
  );
}

export default DisputeHeader;
