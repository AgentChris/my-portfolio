import React from 'react';
import PropTypes from "proptypes";
import { connect } from 'react-redux';
import { chooseOptionAction } from "../../store/actions";

const propTypes = {
  options: PropTypes.array.isRequired,
  chooseOption: PropTypes.func.isRequired,
};

const type_input = "type_input";

const ChatInput = ({ options, chooseOption }) => (
  <div>
    <ul>
      {options.map(({ text, type, id }, index) => (
        <div>
          {type === type_input ?
            <div>
              <input type="text" onChange={(evt) => {
                const input_text = evt.target;
                chooseOption(id, input_text);
              }} />
            </div> :
            <div onClick={() => {
              chooseOption(id, text);
            }}>{text}</div>
          }
        </div>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  options: state.chat.options || [],
});

const mapDispatchToProps = {
  chooseOption: chooseOptionAction
};

ChatInput.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);