import React from "react";
import PropTypes from "prop-types";
import s from "./Profile.module.css";

export default function Profile(props) {
  const { username, avatar, tag, location, stats = {} } = props;
  return (
    <div className={s.Profile}>
      <div className={s.Description}>
        <img src={avatar} alt="User avatar" className={s.Avatar} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.itemStats}>
          <div className={s.statistics}>
            <span className={s.label}>Followers</span>
            <span className="quantity">{stats.followers}</span>
          </div>
        </li>
        <li className={s.itemStats}>
          <div className={s.statistics}>
            <span className={s.label}>Views</span>
            <span className="quantity">{stats.views}</span>
          </div>
        </li>
        <li className={s.itemStats}>
          <div className={s.statistics}>
            <span className={s.label}>Likes</span>
            <span className="quantity">{stats.likes}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};
