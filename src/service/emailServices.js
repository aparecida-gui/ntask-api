import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY =
  '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';

export const emailSendGrid = async(sendTo, myEmail) => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      from: myEmail,
      personalizations: [
        {
          to: [
            {
              email: sendTo
            }
          ],
          substitutions: {
            '%fname%': 'recipient',
            '%CustomerID%': 'CUSTOMER ID GOES HERE'
          },
          subject: 'YOUR SUBJECT LINE GOES HERE'
        }
      ],
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>Test of email in Node.js</strong>'
    };
    
    return await sgMail.send(msg);
  } catch (error) {
    return error;
  }
};
