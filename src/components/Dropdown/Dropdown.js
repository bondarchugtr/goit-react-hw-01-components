import React, { Component } from "react";
import s from "./Dropdown.module.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className={s.Dropdown}>
        <button
          type="button"
          className={s.Dropdown__toggle}
          onClick={this.toggle}
        >
          {this.state.visible ? "Скрыть" : "Показать"}
        </button>

        {this.state.visible && (
          <div className={s.Dropdown__menu}>Выпадающей список</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
