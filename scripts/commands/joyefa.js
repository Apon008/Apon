const fs = require("fs");
module.exports = {
  config:{
	name: "joyefa",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("😋")==0 || body.indexOf("😛")==0 || body.indexOf("😜")==0 || body.indexOf("🤪")==0) {
		var msg = {
				body: "সো্ঁনা্ঁ জি্ঁববা্ঁ দে্ঁখা্ঁও্ঁ কে্ঁন্ঁ?!!কে্ঁটে্ঁ দি্ঁমু্ঁ দ্ঁই্ঁরা্ঁ😎😦🐒",
				attachment: fs.createReadStream(__dirname + `/Joy/efa.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😦", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
