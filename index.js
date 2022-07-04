const nodemailer = require("nodemailer");

exports.handler = async (event) => {
    // TODO implement
   const data = event;
   let info ;
   const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'vpcreators1@gmail.com',
      pass: 'cqaq evyr fatt pmfh',
    },
  });


if(!data.email){
  info = await transport
    .sendMail({
      from: `${data.firstName} <${data.email?data.email: " "}>`,
      to: "vpcreators1@gmail.com",
      subject: `Enquiry from ${data.firstName}!! `,
    
      html: `
      <p> Hello VP creators , you have received an enquiry from ${data.firstName?data.firstName: " "} </p>
      <h3>Details</h3>
      <p style="margin:0"><span>Name<span> : <strong>${data.firstName?data.firstName:" "} ${data.lastName?data.lastName:" "}<strong/></p>
      <p style="margin:0"><span>Phone Number<span> : <strong>${data.phoneNumber?data.phoneNumber:" "}<strong/></p>
      <p style="margin:0"><span>Message<span>: <strong>${data.message?data.message: " "}<strong/></p>
      `
});
}
else{
info = await transport
    .sendMail({
      from: `${data.firstName} <${data.email?data.email:" "}>`,
      to: "vpcreators1@gmail.com",
      subject: `Enquiry from ${data.firstName}!! `,
      html: `
      <p> Hello VP creators , you have received an enquiry from ${data.firstName} </p>
      <h3>Details</h3>
      <p style="margin:0"><span>Name<span> : <strong>${data.firstName?data.firstName:"  "} ${data.lastName?data.lastName:" "}<strong/></p>
      <p style="margin:0"><span>Phone Number<span> : <strong>${data.phoneNumber?data.phoneNumber:" "}<strong/></p>
      <p style="margin:0"><span>E-Mail<span> :<strong>${data.email?data.email:" "}<strong/></p>
      <p style="margin:0"><span>Message<span>: <strong>${data.message?data.message: " "}<strong/></p>
      `
    });
}
    console.log('message sent', info);
  return info ;
};


// Query Parameters 
// {
//   "FirstName" : "abc",
//   "LastName" : "def",
//   "PhoneNumber": "1234567890",
//   "Email" : "deepthi.t@antstack.io",
//   "Message" : "hello !"
// }
