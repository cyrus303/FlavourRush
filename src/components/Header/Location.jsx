import React, {useState} from 'react';

function Location({setAppLocation, appLocation}) {
  const [open, setOpen] = React.useState(false);
  const [locationValue, setLocationValue] = useState(appLocation);
  // console.log(props);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setLocationValue(event.target.textContent);
    setAppLocation(event.target.textContent);
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>{locationValue}</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button
              onClick={(event) => {
                handleMenu(event);
              }}
            >
              Bengaluru
            </button>
          </li>
          <li className="menu-item">
            <button
              onClick={(event) => {
                handleMenu(event);
              }}
            >
              Mumbai
            </button>
          </li>
          <li className="menu-item">
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
