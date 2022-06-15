const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    // for postman host
   host:'smtp.gmail.com',
   port:587,
   secure:false,
   requireTLS:true,
   auth: {
    user: "vedika.tiwari1167@gmail.com",
    pass: "yhjxszijfnksphun",
}
});
    let message = {
    from: "vedika.tiwari@email.com",
    to: "vedika.tiwari1167@gmail.com",
    subject: "checking ",
    text:"hello how are you"
}
  
transporter.sendMail(message, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("information -your mail has been sent");
  }
})