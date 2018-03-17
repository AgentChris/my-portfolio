// the alexa way
import { GREETING_STATE, GET_IN_TOUCH_STATE } from '../../store';

export const greetingStateHandler = {
  "Greet.Intent": function () {
    this.tell({ text: "I am Chris, web developer, based in the land of vampires Transilvania (in Cluj) [:spookey emoji]\n" })
    this.tell({ text: "Wanna simply get in Touch or Are You curios to find more?" });

    this.ask([{ text: "Tell me more", state: GREETING_STATE, intent: "TellMeMore.Intent", id: "1" },
      { text: "Get in Thouch", state: GET_IN_TOUCH_STATE, intent: "GetInTouch.Intent", id: "2" }]);
  },
  "TellMeMore.Intent": function () {
    this.tell({ text: "Great, Well were should i start :thinkingface" });
    this.tell({
      text: "I am over enthusiastic programmer, lucky enough to\n" +
      "work a great team in Transylvania for National Geographic"
    });

    this.ask([{
      text: "What do you guys do more specifically for Nat" +
      "geo",
      id: "3",
      intent: "MoreDetail.Intent",
    }]);
  },
  "MoreDetail.Intent": function () {
    this.tell({
      text: "We are building all kinds off product using the technologies like three.js, react, uikit, actually\n" +
      "we just released a tapeline website were you can see NatGeo history (link de la timeline)\n"
    });
    this.ask([{
      text: " Hmm interesting, I am curios to see what did you do for them?",
      state: GET_IN_TOUCH_STATE,
      intent: "GetInTouch.Intent",
      id: "4"
    }]);
  }
};

export const getInTouchState = {
  "GetInTouch.Intent": function () {
    this.tell({ text: "How about talking about this over a coffee or something" });

    this.ask([{ text: "Yep", intent: "YesIntent", id: "5" }, {
      text: "Nah, I am good",
      intent: "NoIntent",
      id: "6"
    }],);
  },
  "YesIntent": function () {
    this.tell({ text: "Pls tell describe in some short sentences what do you want to talk about?" });

    this.ask([{ text: "", type: "text_input", id: "email_description", intent: "EmailDescriptionIntent" }]);
  },
  "EmailDescriptionIntent": function () {
    this.tell({ text: "Cool, ok I just need your email so we can keep in touch" });

    this.ask([{ text: "", type: "text_input", id: "email", intent: "Email" }])
  },
  "Email": function () {
    const { emailIsValid } = this.state;

    if (emailIsValid) {
      this.tell({ text: "Great see you soon" });
      this.ask([], { state: "", action: "Quit" });
    } else {
      this.tell({ text: "This email is not valid" });
      this.tell({ text: "Let's try again" });
      this.ask([{ text: "", type: "text_input", id: "email", intent: "Email" }])
    }
  },
  "NoIntent": function () {
    this.tell({ text: "Well good talk :), talk with you soon" });

    this.ask([], { state: "", intent: "QuitIntent" });
  },
  "QuitIntent": function () {
    this.quitChat();
  }
};
