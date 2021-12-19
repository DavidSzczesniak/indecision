import React from 'react';

const Action = ({ disabled, handlePick }) => (
    <button className="big-button" disabled={disabled} onClick={handlePick}>
        What should I do?
    </button>
);

export default Action;
