require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 8006;

app.use(express.json());
app.use(cors());

const path = require('path');

const sendEmail = async (first, last, email, number, company, web, sendmessage) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info@hubsyntax.com',
        pass: 'pfmq xgrn kxey ymbu',
      },
    });

    const adminHtmlContent = `
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">
  <style>
    .container {
      font-family: Montserrat;
      border: 1px solid #e3e3e3;
      height: 600px;
      width: 100%;
      max-width: 600px;
      margin: 50px auto; 
      padding: 20px;
      background-color: #f6f8fc;
      border-radius: 10px;
      font-weight: 600;
    }
  
    p {
      font-size: 18px;
      text-align: left;

    }

  </style>
</head>
<body>
  <div class="container">
    <p> First Name: ${first}</p>
     <p>last Name: ${last}</p>
     <p>Company Name: ${company}</p>
     <p>Number Name: ${number}</p>
      <p>Website Name: ${web}</p>
     <p> Message: ${sendmessage}</p>
    
  </div>
</body>
</html>
`;

    const userHtmlContent = `
<html>
<head>
 <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      line-height: 28px;
      color: black!important;
      text-decoration: none !important;
      background-color: white;
      font-family: Montserrat;
    }
    .container {
      font-family: Montserrat;
      text-align: center;
      border: 1px solid black;
      height: auto;
      width: 100%;
      max-width: 800px;
      margin: 50px auto;
    }
    h1 {
      margin: 0;
      font-family: Montserrat;
    }
    p {
     font-size: 18px;
    text-align: left;
    font-family: Montserrat;
    font-weight: 600;
    }
    
    .need {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .way {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .footer {
      text-align: center;
    }
    .footer-image img {
      width: 100%;
    }
    .footer-images-all {
      display: inline-flex;
      gap: 40px;
    }
    .footer-image {
      margin-right: 15px;
    }
    .best {
      margin-bottom: 40px;
    }
    .email-cneter {
      text-align: center;
      margin: 0 auto;
      margin-top: 23px;
    }
    .email {
      display: flex;
      line-height: 29px;
    }
    .email-test {
      color: black !important;
      text-decoration: none !important;
    }  
    .text-color {
       color: #f16273 !important;
    }
    .elements {
      padding: 20px 20px 50px 50px;
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="cid:user-image" style="width: 100%;" alt="Service Image" />
    <div class="elements">
      <div class="need">
        <p>At <span class="text-color">EcombitHub,</span> we’re passionate about empowering e-commerce entrepreneurs like you to achieve success. Whether
          you’re just starting out or looking to scale your online store, we’ve got you covered with a range of services
          designed to meet your unique needs.</p>
      </div>
      <div class="way">
        <p>We’re here to support you every step of the way. Whether you need technical assistance or business advice, our
          team is just an email away.</p>
      </div>
      <div class="need">
        <p>Stay tuned for our upcoming tips, exclusive offers, and the latest industry insights to help you thrive in the
          competitive world of e-commerce.</p>
      </div>
      <div class="need">
        <p>Thank you for choosing <span class="text-color">EcombitHub,</span> as your trusted partner in your e-commerce journey. Let’s create something
          amazing together!</p>
      </div>
      <div class="best">
        <p>Best regards,</p>
        <p>The <span class="text-color">EcombitHub,</span> Team</p>
      </div>
      <div class="footer">
        <div class="footer-images-all">
          <div class="footer-image">
          <a href="https://www.facebook.com/HubSyntax/"> <img src="cid:facbook" style="width: 100%;" alt="Service Image" /></a>
          </div>
          <div class="footer-image">
           <a href="https://www.instagram.com/hubsyntax/"><img src="cid:insta" style="width: 100%;" alt="Service Image" /></a>
          </div>
          <div class="footer-image">
           <a href="https://x.com/Hubsyntaxdev"> <img src="cid:x" style="width: 100%;" alt="Service Image" /></a>
          </div>
          <div class="footer-image">
            <a href="https://in.linkedin.com/company/hubsyntax"> <img src="cid:linkdin" style="width: 100%;" alt="Service Image" /></a>
          </div>
        </div>
      </div>
      <div class="email">
        <div class="email-cneter">
          <p class="email-test">Email: info@hubsyntax.com</p>
          <p>Phone: +91-8679227771</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

    const adminMailOptions = {
      from: 'info@hubsyntax.com',
      to: 'info@hubsyntax.com',
      subject: 'Email Send',
      html: adminHtmlContent,

    };

    const userMailOptions = {
      from: 'info@hubsyntax.com',
      to: email,
      subject: 'Email Send User',
      html: userHtmlContent,
      attachments: [
        {
          filename: 'gmail.png',
          path: path.resolve(__dirname, 'gmail.png'),
          cid: 'user-image',
        },
        {
          filename: 'insta.png',
          path: path.resolve(__dirname, 'insta.png'),
          cid: 'insta',
        },
        {
          filename: 'facbook.png',
          path: path.resolve(__dirname, 'facbook.png'),
          cid: 'facbook',
        },
        {
          filename: 'x.png',
          path: path.resolve(__dirname, 'x.png'),
          cid: 'x',
        },
        {
          filename: 'linkdin.png',
          path: path.resolve(__dirname, 'linkdin.png'),
          cid: 'linkdin',
        },
      ],
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


app.post('/register', async (req, res) => {
  const { first, last, email, number, company, web, sendmessage } = req.body;
  await sendEmail(first, last, email, number, company, web, sendmessage);
  res.status(200).json({ message: 'Email sent successfully' });
});


app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

















// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// const port = 5000;

// app.use(express.json());
// app.use(cors());

// const pool = mysql.createPool({
//   user: "u880655869_subscriber",
//   host: "212.1.209.1",
//   password: "Customer@12!",
//   database: "u880655869_customer_sub"
// });

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error in connection:", err);
//   } else {
//     console.log("Connected to the database!");
//     connection.release();
//   }
// });

// app.post('/api/items', (req, res) => {
//   const { first, last, email, number, company, web } = req.body;

//   const query = `
//     INSERT INTO customer_details (first_name, last_name, email, phone_number, company_name, website_url)
//     VALUES (?, ?, ?, ?, ?, ?)`;

//   pool.query(query, [first, last, email, number, company, web], (error, results) => {
//     if (error) {
//       console.error('Error inserting data:', error);
//       return res.status(500).json({ error: 'An error occurred while inserting data' });
//     }
//     res.status(201).json({ id: results.insertId });
//   });
// });

// app.post('/api/contact', (req, res) => {
//   const { first, last, email, number, company, web, sendmessage = '' } = req.body;

//   const query = `
//     INSERT INTO customer_contact (first_name, last_name, email, phone_number, company_name, website_url, message)
//     VALUES (?, ?, ?, ?, ?, ?, ?)`;

//   pool.query(query, [first, last, email, number, company, web, sendmessage], (error, results) => {
//     if (error) {
//       console.error('Error inserting data:', error);
//       return res.status(500).json({ error: 'An error occurred while inserting data' });
//     }
//     res.status(201).json({ id: results.insertId });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
