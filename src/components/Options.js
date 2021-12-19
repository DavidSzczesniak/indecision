import React from 'react';
import Option from './Option';

const Options = ({ options, handleRemoveOptions, handleRemoveOption }) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--text" onClick={handleRemoveOptions}>
                Remove All
            </button>
        </div>
        {options.length === 0 && (
            <p className="widget__message">Please add an option to get started!</p>
        )}
        {options.length > 0 &&
            options.map((option, index) => (
                <Option
                    key={option}
                    count={index + 1}
                    text={option}
                    handleRemoveOption={handleRemoveOption}
                />
            ))}
    </div>
);

export default Options;
