import React, { Component } from "react";
import { css } from "emotion";

const inputWrapper = css`
  width: 250px;
  height: 40px;
  position: relative;
`;

const iconIn = css`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  margin-top: -13px;
  font-size: 25px;
`;

const input = css`
  width: 100%;
  height: 100%;
  background: #eaeaea;
  border-radius: 5px;
  outline: 0;
  border: 2px solid transparent;
  padding: 2px 10px;
  box-sizing: border-box;
  &:focus {
    background: white;
    border-color: #7aaeff;
    ${"" /* border-color: #83e0d7; */};
    box-shadow: 0 0 0 0.1rem rgba(122, 174, 255, 0.15);
  }
`;

class Input extends Component {
  render() {
    const { className, icon, ...other } = this.props;

    let icons = [];

    if (icon && icon.right) {
      icons.push(
        <div key="right-icon" className={iconIn} style={{ right: 5 }}>
          <icon.right color="grey" size="25px" />
          {/* x */}
        </div>
      );
    }

    return (
      <div className={inputWrapper}>
        <input className={input} {...other} />
        {icons}
      </div>
    );
  }
}

export default Input;