// the alexa way
import { GREETING_STATE, GET_IN_TOUCH_STATE } from '../../store';


export const greetingStateHandler = {
  "Greet.Intent": async function () {

    await this.tell({ text: "Hey, <i class=\"em em-raised_hand_with_fingers_splayed\"></i> I am Chris, web developer, based in the land of vampires <i class=\"em em-male_vampire\"></i> Transylvania (in Cluj) <i class=\"em em-european_castle\"></i>\n" });
    await this.tell({ text: "Wanna simply get in touch or are You curios to find more?" });

    this.ask([{ text: "Tell me more", state: GREETING_STATE, intent: "TellMeMore.Intent", id: "1" },
      { text: "Get in Touch", state: GET_IN_TOUCH_STATE, intent: "GetInTouch.Intent", id: "2" }]);
  },
  "TellMeMore.Intent": async function () {
    await this.tell({ text: "Great, Well were should i start <i class=\"em em-thinking_face\"></i>" });
    await this.tell({
      text: "I am over enthusiastic programmer, lucky enough to\n" +
      "work a great team for National Geographic"
    });

    this.ask([{
      text: "What do you guys do more specifically for Nat" +
      "geo?",
      id: "3",
      intent: "MoreDetail.Intent",
    }]);
  },
  "MoreDetail.Intent": async function () {
    this.tell({
      text: "We are building all kinds off product using the technologies like three.js, react, uikit, actually\n" +
      "we just released a <a href='https://www.nationalgeographic.org/timeline/'>timeline</a> website were you can see NatGeo history\n"
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
    this.tell({ text: "How about talking about more a <i class=\"em em-coffee\"></i> or something" });

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
    await this.tell({ text: "Cool, ok I just need your email so we can keep in touch <i class=\"em em-iphone\"></i>" });

    this.ask([{
      text: "", displayProps: {
        placeholder: "your email"
      }, type: "text_input", id: "email", intent: "Email"
    }])
  },
  "Email": async function () {
    const { emailIsValid } = this.state;

    if (emailIsValid) {
      await this.tell({ text: "Great see you soon <i class=\"em em-handshake\"></i>" });
      this.ask([], { state: "", action: "Quit" });
    } else {
      await this.tell({ text: "This email is not valid <i class=\"em em-face_with_monocle\"></i>" });
      await this.tell({ text: "Let's try again" });
      this.ask([{ text: "", type: "text_input", id: "email", intent: "Email" }])
    }
  },
  "NoIntent": async function () {
    await this.tell({ text: "Well good talk <i class=\"em em-smiley\"></i>, cheers" });

    this.ask([], { state: "", intent: "QuitIntent" });
  },
  "QuitIntent": async function () {
    this.quitChat();
  }
};
