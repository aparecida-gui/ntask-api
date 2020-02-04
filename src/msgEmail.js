import sgMail from "@sendgrid/mail";

const msgEmail = (endressUserEmail, newPassword) => {
  sgMail.setApiKey(process.env.SENDGRID_API);

  const msg = {
    to: endressUserEmail,
    from: process.env.MY_EMAIL,
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: `your password:  ${newPassword}`
  };

  return sgMail.send(msg);
};

export default msgEmail;
