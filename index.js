const nodemailer = require("nodemailer");

exports.handler = async (event) => {
    // TODO implement
   const data = event;
  
   const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'vpcreators1@gmail.com', //sender emailId
      pass: 'cqaq evyr fatt pmfh',
    },
  });
  let info = await transport
    .sendMail({
      from: `${data.FirstName} <${data.Email}>`,
      to: "praveen@antstack.io",                    //receiver emailId
      subject: `Enquiry from ${data.FirstName} ${data.LastName}!! `,
      html: `
      <p> Hello VP creators , you have received an enquiry from ${data.FirstName} ${data.LastName} saying <strong>"${data.Message}"</strong></p>
      <h3>Details</h3>
      <p style="margin:0"><span>Name<span> : <strong>${data.FirstName} ${data.LastName}<strong/></p>
      <p style="margin:0"><span>Phone Number<span> : <strong>${data.PhoneNumber}<strong/></p>
      <p style="margin:0"><span>E-Mail<span> <strong>${data.Email}<strong/></p>
      
      `
    })
    .then((res) => {
      console.log(res);
    });
  console.log('message sent', info);
  return info;
};


// Query Parameters 
// {
//   "FirstName" : "abc",
//   "LastName" : "def",
//   "PhoneNumber": "1234567890",
//   "Email" : "deepthi.t@antstack.io",
//   "Message" : "hello !"
// }
