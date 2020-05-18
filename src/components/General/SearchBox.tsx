import React, { FormEventHandler } from "react";
import IconSearch from "../../assets/icons/IconSearch.png";
interface IProp {
  inputText: string;
  changeText: FormEventHandler<HTMLInputElement>;
  searchClick: any;
  keyDown: any;
}
function SearchBox(props: IProp) {
  return (
    <span className="dispute-search-input-container">
      <input
        id="SearchName"
        className="dispute-search-input"
        type="text"
        onKeyDown={props.keyDown}
        placeholder={props.inputText}
        onChange={props.changeText}
        minLength={1}
      />
      <img
        onClick={props.searchClick}
        src={IconSearch}
        alt=""
        className="dispute-search-logo"
      />
    </span>
  );
}

export default SearchBox;
