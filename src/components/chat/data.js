const GREETING_STATE = 'GREETING_STATE';
const GET_IN_TOUCH_STATE = 'GET_IN_TOUCH_STATE';

const reducer = (state = { messages: [], chatState: GREETING_STATE }, action) => {
  switch (action.type) {
    case "ADDING_MESSAGE":
      return { ...state, messages: [...state.messages, { text: action.text, hero: false }] };
    case "ADDING_OPTION":
      return { ...state, options: action.options };
    case "ADDING_MESSAGE_HERO":
      return { ...state, messages: [...state.messages, { text: action.text, hero: true }] };
    case "ANSWER_OPTION_3":
      return { ...state, emailContent: action.text };
    case "ANSWER_OPTION_4":
      return { ...state, email: action.text };
    case "CHANGE_CHAT_STATE":
      const chatState = action.chatState || state.chatState;
      return { ...state, chatState, intent: action.intent };
    default:
      return state;
  }
};

const validate = (email) => {
  return true;
};

const quitChat = () => {
  // close all options to choose, and input chat
};

const startChat = () => {
  emit({ state: GREETING_STATE, intent: "Greet.Intent" });
};

// the alexa way

const tell = (message) => {
  // adding meesages to redux state
  console.log(message);
};

const ask = (options) => {
  // adding options to redux state
};

const chooseOption = (optionId) => {
  // move to another state
  const option = getOptionId(optionId);

  if (option.type === "text_input") {
    // dispatch action like: dispatch(type:"ANSWER_OPTION_{optionId}")
    // make a sperate reducers that handlers answer option
  }

  emit({ state: option.state, intent: option.Intent });
};

const emit = (newState, intent) => {
  // redux cheage current state, call intent callback
  if (!newState) {
    // just call intent callback
  }
};


const greetingStateHandler = {
  "Greet.Intent": () => {
    tell({ text: "I am Chris, web developer, based in the land of vampires Transilvania (in Cluj) [:spookey emoji]\n" })
    tell({ text: "Wanna simply get in Touch or Are You curios to find more?" });

    ask([{ text: "Tell me more", state: "greetingState", intent: "TellMeMore.Intent" },
      { text: "Get in Thouch", state: "getInTouchState", intent: "GetInTouch.Intent" }]);
  },
  "TellMeMore.Intent": () => {
    tell({ text: "Great, Well were should i start :thinkingface" });
    tell({
      text: "I am over enthusiastic programmer, lucky enough to\n" +
      "work a great team in Transylvania for National Geographic"
    });

    ask([{
      text: "What do you guys do more specifically for Nat" +
      "geo"
    }], { intent: "MoreDetail.Intent" });
  },
  "MoreDetail.Intent": () => {
    tell({
      text: "We are building all kinds off product using the technologies like three.js, react, uikit, actually\n" +
      "we just released a tapeline website were you can see NatGeo history (link de la timeline)\n"
    });
    ask([{
      text: " Hmm interesting, I am curios to see what did you do for them?",
      state: "getInTouchState",
      intent: "GetInTouch.Intent"
    }]);
  }
};

const getInTouchState = {
  "GetInTouch.Intent": () => {
    tell({ text: "How about talking about this over a coffee or something" });

    ask([{ text: "Yep", intent: "YesIntent" }, { text: "Nah, I am good", state: "", intent: "QuitIntent" }],);
  },
  "YesIntent": () => {
    tell({ text: "Pls tell describe in some short sentences what do you want to talk about?" });

    ask([{ text: "", type: "text_input", id: "email_description", intent: "EmailDescriptionIntent" }]);
  },
  "EmailDescriptionIntent": () => {
    tell({ text: "Cool, ok I just need your email so we can keep in touch" });

    ask([{ text: "", type: "text_input", id: "email", intent: "Email" }])
  },
  "Email": () => {
    const answer = getState({ id: "email" });
    const isValid = validate(answer);

    if (isValid) {
      tell({ text: "Great see you soon" });
      ask([], { state: "", action: "Quit" });
    } else {
      tell({ text: "This email is not valid" });
      tell({ text: "Let's try again" });
      ask([{ text: "", type: "text_input", id: "email", intent: "Email" }])
    }
  },
  "NoIntent": () => {
    tell({ text: "Well good talk :), talk with you soon" });

    ask([], { state: "", intent: "QuitIntent" });
  },
  "QuitIntent": () => {
    quitChat();
  }
};


