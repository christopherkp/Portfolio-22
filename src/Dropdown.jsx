import React, { useState } from "react";
import { handleClick } from "./Helpers";
import { Navigation } from "./NavigationData";

function Dropdown() {
  const [state, setState] = useState(false);

  return (
    <div id="dropdown">
      <img
        src="dropmenu.png"
        id="imgdropmenu"
        alt="Dropdown menu"
        onClick={() => {
          setState(!state);
        }}
      />
      {state ? (
        <ul id="dropdownlist">
          {Navigation.map((Navigation) => {
            return (
              <a
                href={Navigation.url}
                key={Navigation.id}
                onClick={handleClick}
              >
                {Navigation.text}
              </a>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default Dropdown;
