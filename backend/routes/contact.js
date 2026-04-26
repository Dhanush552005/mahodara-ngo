const express = require("express");
const router = express.Router();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await resend.emails.send({
      from: process.env.OWNER_EMAIL,
      to: process.env.OWNER_EMAIL,
      reply_to: email,
      subject: "New NGO Contact Form Enquiry",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color:#004B8D;">New Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Message:</strong></p>
          <div style="background:#f4f4f4; padding:15px; border-radius:8px;">
            ${message}
          </div>

          <br/>

          <p style="font-size:14px; color:gray;">
            Sent from NGO website contact page.
          </p>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;