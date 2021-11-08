import React, { useState } from "react";

function SummaryPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <form action="submit">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          id="confirm-checkbox"
        />
        <label htmlFor="confirm-checkbox">Have you checked your order?</label>
        <br />
        <button disabled={!checked} type="submit">
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default SummaryPage;
