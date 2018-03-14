// the alexa way

export const greetingStateHandler = {
  "Greet.Intent": function () {
    this.tell({ text: "I am Chris, web developer, based in the land of vampires Transilvania (in Cluj) [:spookey emoji]\n" })
    this.tell({ text: "Wanna simply get in Touch or Are You curios to find more?" });

    this.ask([{ text: "Tell me more", state: "greetingState", intent: "TellMeMore.Intent" },
      { text: "Get in Thouch", state: "getInTouchState", intent: "GetInTouch.Intent" }]);
  },
  "TellMeMore.Intent": function () {
    this.tell({ text: "Great, Well were should i start :thinkingface" });
    this.tell({
      text: "I am over enthusiastic programmer, lucky enough to\n" +
      "work a great team in Transylvania for National Geographic"
    });

    this.ask([{
      text: "What do you guys do more specifically for Nat" +
      "geo"
    }], { intent: "MoreDetail.Intent" });
  },
  "MoreDetail.Intent": function () {
    this.tell({
      text: "We are building all kinds off product using the technologies like three.js, react, uikit, actually\n" +
      "we just released a tapeline website were you can see NatGeo history (link de la timeline)\n"
    });
    this.ask([{
      text: " Hmm interesting, I am curios to see what did you do for them?",
      state: "getInTouchState",
      intent: "GetInTouch.Intent"
    }]);
  }
};

export const getInTouchState = {
  "GetInTouch.Intent": function () {
    this.tell({ text: "How about talking about this over a coffee or something" });

    this.ask([{ text: "Yep", intent: "YesIntent" }, { text: "Nah, I am good", state: "", intent: "QuitIntent" }],);
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
