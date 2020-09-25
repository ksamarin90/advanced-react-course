const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});

const makeANiceEmail = text => `
  <div className="email">
    <h2>Hello!</h2>
    <p>${text}</p>
  </div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;