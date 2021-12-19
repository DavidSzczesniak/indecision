import React from 'react';

const Option = ({ text, handleRemoveOption, count }) => (
    <div className="option">
        <p className="option__text">
            {count}. {text}
        </p>
        <button className="button button--text" onClick={() => handleRemoveOption(text)}>
            Remove
        </button>
    </div>
);

export default Option;
