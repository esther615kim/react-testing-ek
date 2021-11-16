import React from 'react'

function Options({ name, updateItemCount }) {
  return (
    <form className="option-form">
      <div>
      <input
        type="checkbox"
        id={`${name} option`}
        onChange={(event) => {
          updateItemCount(name, event.target.checked ? 1 : 0);
        }}
      />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
      </div>
    </form>
  );
}

export default Options;
