import React from 'react';
import './DateDropdown.css';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline, IoIosArrowDown} from "react-icons/io";

const DateDropdown = () => {
  return (
    <div className='top'>
    <div className="date-dropdown">
      <div className="date-author">
        <span > <IoCheckmarkCircleOutline size={20} style={{verticalAlign: "-0.25em"}}/> Last Updated - February 22, 2024
        <IoIosInformationCircleOutline size={20} style={{verticalAlign: "-0.25em", paddingLeft:"1.5rem"}}/> Advertising Disclosure</span>
      </div>
      <div className="dropdown">
        <button className="dropdown-btn">
          <span>Top Relevant <IoIosArrowDown size={20} style={{verticalAlign: "-0.25em"}}/> </span>
          <i className="fas fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {}
        </div>
      </div>
      </div>
      <div className="buttons">
        <button className="button">Tools</button>
        <button className="button">AWS Builder</button>
        <button className="button">Start Build</button>
        <button className="button">Build Supplies</button>
        <button className="button">Tooling</button>
        <button className="button">BlueHosting</button>
      </div>
    </div>
  );
}

export default DateDropdown;