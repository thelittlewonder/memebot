const ddg = require("duckduckgo-images-api");
const bodyParser = require('body-parser')

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

let sendToWhatsapp = function (search, phone, count) {
  let toNumber = 'whatsapp:+91' + phone
  let numberOfMemes = 1;
  if (count !== null) {
    numberOfMemes = count
  }
  ddg.image_search({
    query: search + ' meme template',
    iterations: 1,
    moderate: false
  }).then(results => {
    for (let i = 0; i < numberOfMemes; i++) {
      client.messages
        .create({
          from: 'whatsapp:+14155238886',
          to: toNumber,
          mediaUrl: results[i].image
        })
        .then(message => console.log(message.status))
    }
  })
}

var express = require('express')
var app = express()
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
var port = process.env.PORT || 8080

app.get("/", (req, res, next) => {
  res.send("Jaaga hu bhai")
});

app.post('/incoming', (req, res) => {
  const twiml = new MessagingResponse();

  if (req.body.Body.toLowerCase() !== 'help') {
    let message = req.body.Body.toLowerCase()
    let toNumber = req.body.From.substring(12)
    let count = null //number of memes to be sent
    if (message.indexOf(',') > 0) {
      count = parseInt(message.split(',')[1]) //if number specified
    }
    sendToWhatsapp(message, toNumber, count)
  } else {
    var msg = twiml.message(`Hello Hello 👋

I am Memewala 😜 I can send you the memes, right within WhatsApp.`)
    res.writeHead(200, {
      'Content-Type': 'text/xml'
    });
    res.end(twiml.toString());
  }
});

app.listen(port)
console.log('Magic happens on port ' + port)