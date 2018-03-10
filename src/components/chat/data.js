const conversation_tree = {
  scenario_name: "init_brand_new_conversation",
  nextConversation: {},
  messages: first_scenario,
};

const first_scenario = [{
  text: "Hey there [:wavesign]", hero: false,
}, {
  text: "I am Chris, web developer, based in the land of vampires Transilvania (in Cluj) [:spookey emoji]", hero: false
},];


const takeDecision = () => {

};

const get_meesages = (scenario) => {
  const currentNode = conversation_tree[scenario];
  return { messages: currentNode.messages, currentConversation: currentNode.nextConversation };
};

class ChatBoot {
  private static currentConversation = "init_brand_new_conversation";
  start = () => {
    return get_meesages(this.currentConversation);
  }
}

const chatBoot = new ChatBoot();
chatBoot.start();