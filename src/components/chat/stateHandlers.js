// the alexa way
import { GREETING_STATE, GET_IN_TOUCH_STATE } from '../../store';

export const greetingStateHandler = {
  "Greet.Intent": async function () {

    await this.tell({ text: "I am Chris, web developer, based in the land of vampires Transilvania (in Cluj) [:spookey emoji]\n" });
    await this.tell({ text: "Wanna simply get in Touch or Are You curios to find more?" });

    this.ask([{ text: "Tell me more", state: GREETING_STATE, intent: "TellMeMore.Intent", id: "1" },
      { text: "Get in Thouch", state: GET_IN_TOUCH_STATE, intent: "GetInTouch.Intent", id: "2" }]);
  },
  "TellMeMore.Intent": async function () {
    await this.tell({ text: "Great, Well were should i start :thinkingface" });
    await this.tell({
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
  "MoreDetail.Intent": async function () {
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
  "GetInTouch.Intent": async function () {
    this.tell({ text: "How about talking about this over a coffee or something" });

    this.ask([{ text: "Yep", intent: "YesIntent", id: "5" }, {
      text: "Nah, I am good",
      intent: "NoIntent",
      id: "6"
    }],);
  },
  "YesIntent": async function () {
    await this.tell({ text: "Pls tell describe in some short sentences what do you want to talk about?" });

    this.ask([{
      text: "", displayProps: {
        placeholder: "Write some words"
      }, type: "text_input", id: "email_description", intent: "EmailDescriptionIntent"
    }]);
  },
  "EmailDescriptionIntent": async function () {
    await this.tell({ text: "Cool, ok I just need your email so we can keep in touch" });

    this.ask([{
      text: "", displayProps: {
        placeholder: "your email"
      }, type: "text_input", id: "email", intent: "Email"
    }])
  },
  "Email": async function () {
    const { emailIsValid } = this.state;

    if (emailIsValid) {
      await this.tell({ text: "Great see you soon" });
      this.ask([], { state: "", action: "Quit" });
    } else {
      await this.tell({ text: "This email is not valid" });
      await this.tell({ text: "Let's try again" });
      this.ask([{ text: "", type: "text_input", id: "email", intent: "Email" }])
    }
  },
  "NoIntent": async function () {
    await this.tell({ text: "Well good talk :), talk with you soon" });

    this.ask([], { state: "", intent: "QuitIntent" });
  },
  "QuitIntent": async function () {
    this.quitChat();
  }
};
