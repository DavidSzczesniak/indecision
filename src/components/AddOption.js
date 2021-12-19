import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined,
    };
    render() {
        const handleAddOption = (e) => {
            e.preventDefault();
            const inputValue = e.target.elements.option.value.trim();
            const error = this.props.handleAddOption(inputValue);

            this.setState(() => ({ error }));

            if (!error) {
                e.target.elements.option.value = '';
            }
        };
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button" type="submit">
                        Add Option
                    </button>
                </form>
            </div>
        );
    }
}
