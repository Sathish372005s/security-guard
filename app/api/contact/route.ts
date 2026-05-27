import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // Validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields. Please complete all form inputs." },
        { status: 400 }
      );
    }

    // Retrieve SMTP configurations
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL;

    // Beautiful HTML Email Template Layout
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Security Service Inquiry</title>
          <style>
            body {
              font-family: 'Segoe UI', Arial, sans-serif;
              background-color: #07090e;
              color: #e4e4e7;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #151F28;
              border: 1px solid #C9A24A;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(0,0,0,0.5);
            }
            .header {
              background-color: #0c1117;
              border-bottom: 2px solid #C9A24A;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              color: #ffffff;
              font-size: 24px;
              margin: 0;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            .header p {
              color: #C9A24A;
              font-size: 11px;
              margin: 5px 0 0 0;
              text-transform: uppercase;
              letter-spacing: 3px;
              font-weight: bold;
            }
            .content {
              padding: 30px;
            }
            .grid-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 25px;
            }
            .grid-table td {
              padding: 12px 8px;
              border-bottom: 1px solid rgba(201, 162, 74, 0.15);
              font-size: 14px;
            }
            .label {
              color: #C9A24A;
              font-weight: bold;
              width: 35%;
              text-transform: uppercase;
              font-size: 11px;
              letter-spacing: 1px;
            }
            .value {
              color: #ffffff;
            }
            .message-box {
              background-color: #0a0e13;
              border: 1px solid rgba(201, 162, 74, 0.1);
              padding: 20px;
              border-radius: 4px;
              font-size: 14px;
              line-height: 1.6;
              color: #d4d4d8;
              white-space: pre-wrap;
            }
            .footer {
              background-color: #0c1117;
              border-top: 1px solid rgba(201, 162, 74, 0.15);
              padding: 20px;
              text-align: center;
              font-size: 11px;
              color: #71717a;
            }
            .footer a {
              color: #C9A24A;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>CORE SHIELD SERVICES</h1>
              <p>New Security Service Inquiry</p>
            </div>
            
            <div class="content">
              <table class="grid-table">
                <tr>
                  <td class="label">Client Name</td>
                  <td class="value"><strong>${name}</strong></td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value"><a href="mailto:${email}" style="color: #DFBA6B;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone Number</td>
                  <td class="value"><a href="tel:${phone}" style="color: #DFBA6B;">${phone}</a></td>
                </tr>
                <tr>
                  <td class="label">Service Category</td>
                  <td class="value"><span style="background-color: rgba(201, 162, 74, 0.15); border: 1px solid #C9A24A; padding: 3px 8px; border-radius: 3px; color: #DFBA6B; font-weight: bold; font-size: 12px;">${service}</span></td>
                </tr>
              </table>

              <div class="label" style="margin-bottom: 10px;">Message & Event Details:</div>
              <div class="message-box">${message}</div>
            </div>

            <div class="footer">
              <p>© ${new Date().getFullYear()} CORE SHIELD SERVICES. All Rights Reserved.</p>
              <p>24/7 Operations Room Command Dispatch Desk | Noida, Sector 5</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Check if environmental SMTP configuration is fully defined
    if (!emailUser || !emailPass || !receiverEmail) {
      console.warn("WARNING: SMTP credentials not fully configured in environment variables.");
      console.log("=== MOCK EMAIL LOG ===");
      console.log(`To: ${receiverEmail || "coreshieldservice@gmail.com"}`);
      console.log(`Subject: New Security Service Inquiry - ${service}`);
      console.log(`Content:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`);
      console.log("======================");

      return NextResponse.json({
        success: true,
        message: "Inquiry registered successfully (Mock Sandbox Mode active)."
      });
    }

    // Configure SMTP Transporter using standard parameters
    const transporter = nodemailer.createTransport({
      service: "gmail", // Standard default wrapper or standard SMTP configuration
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Mail configurations
    const mailOptions = {
      from: `"CORE SHIELD Dispatch" <${emailUser}>`,
      to: receiverEmail,
      subject: `New Security Service Inquiry - ${service}`,
      html: htmlContent,
      replyTo: email
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Security Inquiry email dispatched successfully."
    });

  } catch (error: any) {
    console.error("API contact submission failure:", error);
    return NextResponse.json(
      { error: "Failed to dispatch inquiry. Please check SMTP credentials or try again." },
      { status: 500 }
    );
  }
}
