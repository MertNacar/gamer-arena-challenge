import React from "react";
import GameLogo from "../../assets/logos/GameLogo.png";
import Swords from "../../assets/icons/Swords.png";
import Oval from "../../assets/icons/Oval.png";
import IconCreate from "../../assets/icons/IconCreate.png";
import IconDate from "../../assets/icons/IconDate.png";
import IconStatus from "../../assets/icons/IconStatus.png";
import moment from "moment";
import { IDisputeState } from "../../store/disputes/types";

function DisputesCard(props: IDisputeState) {
  let formattedDate = moment(props.createdAt).format("DD.MM.YYYY");
  let statusColor =
    props.status === "declined"
      ? "#EB2C44" //red
      : props.status === "pending"
      ? "#EEB502" //yellow
      : "#00C202"; //green

  return (
    <>
      <span className="info">
        <img id="GameLogo" src={GameLogo} alt="" />

        <span className="description">
          <div className="usernames">
            <span className="user1">{props.match.users[0]}</span>
            <img id="Swords" src={Swords} alt="" />
            <span className="user2">{props.match.users[1]}</span>
          </div>

          <div className="duels">
            <span className="duel">Düello#{props.match.duel}</span>
            <img id="Oval" src={Oval} alt="" />
            <span className="result">{props.type}</span>
          </div>
        </span>
      </span>

      <span className="line line1"></span>

      <span className="creator">
        <div className="creator-content">
          <img id="IconCreate" src={IconCreate} alt="" />
          <span className="creator-title">Oluşturan</span>
        </div>
        <div className="creator-name">{props.creator}</div>
      </span>

      <span className="line line2"></span>

      <span className="date">
        <div className="date-content">
          <img id="IconDate" src={IconDate} alt="" />
          <span className="date-title">Tarih</span>
        </div>
        <div className="date-name">{formattedDate}</div>
      </span>

      <span className="line line3"></span>

      <span className="status">
        <div className="status-content">
          <img id="IconStatus" src={IconStatus} alt="" />
          <span className="status-title">Durum</span>
        </div>
        <div className="status-name" style={{ color: statusColor }}>
          {props.statusData}
        </div>
      </span>
    </>
  );
}

export default DisputesCard;
