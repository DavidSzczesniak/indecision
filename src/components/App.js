import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import OptionModal from './OptionModal';
import Options from './Options';

export default class App extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
    };
    componentDidMount() {
        try {
            const json = JSON.parse(localStorage.getItem('options'));
            json && this.setState(() => ({ options: json }));
        } catch (e) {
            // Falls back to empty array without crashing the app
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        const { options, selectedOption } = this.state;

        const handlePick = () => {
            const randomOption = Math.floor(Math.random() * options.length);
            this.setState(() => ({ selectedOption: options[randomOption] }));
        };

        const handleClearSelectedOption = () => {
            this.setState(() => ({ selectedOption: undefined }));
        };

        const handleAddOption = (newOption) => {
            if (!newOption) {
                return 'Please enter a valid value to add item';
            }

            if (options.indexOf(newOption) > -1) {
                return 'This option already exists';
            }

            this.setState((prevState) => ({ options: prevState.options.concat(newOption) }));
        };

        const handleRemoveOptions = () => {
            this.setState(() => ({ options: [] }));
        };

        const handleRemoveOption = (optionToRemove) => {
            this.setState((prevState) => ({
                options: prevState.options.filter((option) => option !== optionToRemove),
            }));
        };

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action disabled={options.length === 0} handlePick={handlePick} />
                    <div className="widget">
                        <Options
                            options={options}
                            handleRemoveOptions={handleRemoveOptions}
                            handleRemoveOption={handleRemoveOption}
                        />
                        <AddOption handleAddOption={handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={selectedOption} close={handleClearSelectedOption} />
            </div>
        );
    }
}
