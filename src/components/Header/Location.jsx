import React, {useState} from 'react';

function Location({setAppLocation, appLocation}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleMenu = (event) => {
    setAppLocation(event.target.textContent);
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className="locBtn">
        {appLocation}
      </button>
      {open ? (
        <ul className="menu-dropdown">
          <li className="menu-dropdown-item">
            <button
              onClick={(event) => {
                handleMenu(event);
              }}
            >
              Bengaluru
            </button>
          </li>
          <li className="menu-dropdown-item">
            <button
              onClick={(event) => {
                handleMenu(event);
              }}
            >
              Mumbai
            </button>
          </li>
          <li className="menu-dropdown-item">
            <button
              onClick={(event) => {
                handleMenu(event);
              }}
            >
              Chennai
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default Location;
