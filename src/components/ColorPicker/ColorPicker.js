import React from "react";
import s from "./ColorPicker.module.css";

const ColorPicker = ({ option }) => (
  <div className={s.ColorPicker}>
    <h2 className={s.ColorPicker__title}>Color Picker</h2>
    <div>
      {option.map(({ label, color }) => (
        <span
          key={label}
          className={s.ColorPicker__option}
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  </div>
);

export default ColorPicker;
