import React, {useState} from 'react';
import MenuItemRender from './MenuItemRender';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const MenuList = ({menuList}) => {
  const updatedList = menuList.slice(1, -2);

  // Create an array of state variables, one for each section
  const [expandedSections, setExpandedSections] = useState(
    new Array(updatedList.length).fill(false)
  );

  const toggleSection = (index) => {
    const newExpandedSections = [...expandedSections];
    newExpandedSections[index] = !newExpandedSections[index];
    setExpandedSections(newExpandedSections);
  };

  return (
    <>
      {updatedList.map((Item, index) => {
        let {title, itemCards} = Item.card.card;
        if (title !== undefined && itemCards !== undefined) {
          return (
            <div key={index} className="accordion-container">
              <div className="accordion">
                <h3
                  className="catageory-title"
                  onClick={() => toggleSection(index)}
                >
                  {`${title} (${itemCards.length})`}
                </h3>
                <label className="switch">
                  <input
                    type="checkbox"
                    onClick={() => toggleSection(index)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div
                className={`menu-item ${
                  expandedSections[index] ? 'expanded' : ''
                }`}
              >
                <MenuItemRender itemCards={itemCards} />
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default MenuList;
