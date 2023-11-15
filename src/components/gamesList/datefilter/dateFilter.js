import React, { useState } from "react";

export const DateFilter = ({filter}) => {
  const [displayText, setDisplayText] = useState('Спочатку старі');

    const changeText = (e) => {
        console.log(e.target.textContent);
        setDisplayText(currentText => (currentText === 'Спочатку старі' ? 'Спочатку нові' : 'Спочатку старі'));
        if (e.target.textContent === 'Спочатку нові') {
            filter(true)
        }
        else {
            filter(false)
            }
  };

    return (
        <div className="filterRightSide">
            <div className="filterRightSideSoft">
                <div className="select">
                    <h4 className="date_title">Сортувати: </h4>
                </div>
                <p id='data_text' onClick={changeText} className="date_text">{displayText}</p>
            </div>
        </div>
    )
};