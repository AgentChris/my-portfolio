import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from "proptypes";
import { connect } from 'react-redux';
import { chooseOptionAction } from "../../store/actions";

const propTypes = {
  options: PropTypes.array.isRequired,
  chooseOption: PropTypes.func.isRequired,
};

const type_input = "text_input";

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_text: "",
    };
  }

  handleInputText = (evt) => {
    const input_text = evt.target.value;
    this.setState(() => ({ input_text }));
  };

  handleKeyPress = (evt, id) => {
    const { chooseOption } = this.props;
    if (evt.key === 'Enter') {
      chooseOption(id, this.state.input_text);
      this.setState(() => ({ input_text: "" }));
    }
  };

  render() {
    const { options, chooseOption, isTyping } = this.props;
    const { input_text } = this.state;
    const optionClassName = classnames({
      "col text-center message hero p-2 max": true,
      "d-none": isTyping,
    });
    return (
      <div className="container">
        <div className="row justify-content-center">
          {options.map(({ text, type, id, displayProps }, index) => {
            return (
              <div key={index} className={optionClassName}>
                {type === type_input ?
                  <input
                    {...displayProps}
                    type="text" className="chat-input pr-3 pl-3"
                    onChange={this.handleInputText}
                    onKeyPress={(evt) => {
                      this.handleKeyPress(evt, id);
                    }} value={input_text}
                  />
                  :
                  <div onClick={() => {
                    chooseOption(id, text);
                  }}>{text}</div>
                }
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.chat.options || [],
  isTyping: state.chat.isTyping,
});

const mapDispatchToProps = {
  chooseOption: chooseOptionAction
};

ChatInput.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);