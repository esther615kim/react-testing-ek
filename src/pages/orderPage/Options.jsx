import React from "react";

function Options({ name, updateItemCount }) {
  // 카운트 함수 props로 가져와서
  return (
    <form className="option-form">
      <div>
        <input
          type="checkbox"
          id={`${name} option`}
          onChange={(event) => {
            updateItemCount(name, event.target.checked ? 1 : 0); // name =>옵션 서비스명, 체크되면 1 안됬으면 0업뎃
          }}
        />{" "}
        <label htmlFor={`${name} option`}>{name}</label>
      </div>
    </form>
  );
}

export default Options;
