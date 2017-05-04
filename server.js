const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'xaevir33@gmail.com', // Your email id
    pass: 'ironman33' // Your password
  }
});

const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send('Hello World!') })

app.post('/api/contact', (req, res) => {

  var html  = '<p>name: '+req.body.name+'</p>'
      html += '<p>email: '+req.body.email+'</p>'
      html += '<p>pallot number: '+req.body.pallotNumber+'</p>'
      html += '<p>zip code: '+req.body.zipCode+'</p>'

  var mailOptions = {
      from: 'xaevir33@gmail.com', // sender address
      to: 'bobby.chambers33@gmail.com', // Comma separated list of recipients
      subject: 'Stumblin Quote Form', // Subject line
      html: '' // HTML body
  }

  mailOptions.html = html;
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    };
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
