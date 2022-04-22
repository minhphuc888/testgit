
 function getChangeId(channel) {
  var store = {};
  store["test"] = "6dif7xwwdjf33fg6yeckom6esa";
  return store[channel];
}

function sentMessage() {

  var channel = "test"
  var message = "test" + new Date();

  var body = {
    "file_ids":
    [],
    "message": message,
    "channel_id": getChangeId(channel),
    "pending_post_id": "g3yz51k987bst8zwzo7bt7x8zh:" + new Date().getTime(),
    "user_id": "g3yz51k987bst8zwzo7bt7x8zh",
    "create_at": 0,
    "metadata":
    {},
    "props":
    {
        "disable_group_highlight": true
    },
    "update_at": 1642869345239,
    "reply_count": 0
};

  fetch("https://team.vietbando.net/api/v4/posts", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en",
      "content-type": "text/plain;charset=UTF-8",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-csrf-token": "8ifaqx86bjbsxy5aopfdthn69e",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrerPolicy": "no-referrer",
    "body":JSON.stringify(body),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  console.log("Sent message: " + message, new Date());
}


function messageDelay(message, day, month) {
  var dealine = new Date(2022,month - 1,day,0 , 20);
  var countTime = dealine.getTime() - (new Date()).getTime();
  console.log("Set sent message time: " + dealine);
   console.log("Count time: " + countTime/(1000*60) + " phút")
   setTimeout(sentMessage , countTime);
}

// var channel = "test"
// var message = "test" + new Date();
messageDelay("test" + new Date() , 23, 1)

//  sentMessage(channel, message);