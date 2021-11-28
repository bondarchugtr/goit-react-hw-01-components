import React from "react";
import Frieds from "../Friends/Friends";
import PropTypes from "prop-types";
import s from "./Frieds.module.css";

function FriedList({ items }) {
  return (
    <>
      <h2 className="title">Frieds status</h2>
      <ul className="friend-list">
        {items.map((friend) => (
          <li key={friend.id} className={s.item}>
            <span
              className={s.status}
              style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
            >
              {friend.isOnline}
            </span>
            <img
              className={s.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FriedList;
