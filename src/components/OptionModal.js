import React from 'react';
import ReactModal from 'react-modal';

const OptionModal = ({ selectedOption, close }) => (
    <ReactModal
        className="modal"
        isOpen={!!selectedOption}
        contentLabel="Selected Option"
        onRequestClose={close}
        closeTimeoutMS={200}>
        <h3 className="modal__title">Selected Option</h3>
        {selectedOption && <p className="modal__body">{selectedOption}</p>}
        <button className="button" type="button" onClick={close}>
            OK
        </button>
    </ReactModal>
);

export default OptionModal;
