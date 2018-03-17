import React, { Component } from 'react';
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
    const { options, chooseOption } = this.props;
    const { input_text } = this.state;
    return (
      <div>
        <ul>
          {options.map(({ text, type, id }, index) => {
            return (
              <div>
                {type === type_input ?
                  <div>
                    <input type="text" onChange={this.handleInputText} onKeyPress={(evt) => {
                      this.handleKeyPress(evt, id);
                    }} value={input_text} />
                  </div> :
                  <div onClick={() => {
                    chooseOption(id, text);
                  }}>{text}</div>
                }
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.chat.options || [],
});

const mapDispatchToProps = {
  chooseOption: chooseOptionAction
};

ChatInput.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);