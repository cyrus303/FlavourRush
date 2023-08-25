import {useState} from 'react';
import MenuItemRender from './MenuItemRender';

const TitleItem = ({
  title,
  itemCards,
  showItems,
  handleIndex,
  index,
}) => {
  if (title !== undefined && itemCards !== undefined) {
    const handleCheckboxChange = (event) => {
      event.stopPropagation(); // Stop the event from propagating to the parent
      handleIndex(null);
      console.log(event);
    };

    return (
      <div className="accordion-container">
        <div
          className="accordion"
          onClick={() => {
            handleIndex(index);
          }}
        >
          <h3 className="catageory-title">
            {`${title} (${itemCards.length})`}
          </h3>
          <label className="switch">
            {showItems ? (
              <input
                type="checkbox"
                checked
                onChange={handleCheckboxChange}
              />
            ) : (
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
              />
            )}

            <span className="slider"></span>
          </label>
        </div>
        <div>
          {showItems && <MenuItemRender itemCards={itemCards} />}
        </div>
      </div>
    );
  }
};

export default TitleItem;
