import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Event type mapping to human-readable labels
const eventTypeLabels: Record<string, string> = {
  vacation: "Vacation",
  business: "Business",
  romantic: "Romantic Getaway",
  other: "Other",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, eventType, numberOfGuests, message } = body;

    // Validate required fields
    if (!email || !phone || !eventType) {
      return NextResponse.json(
        { error: "Missing required fields: email, phone, and eventType are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Format email content
    const eventTypeLabel = eventTypeLabels[eventType] || eventType;
    
    // HTML version
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; }
            .value { color: #4b5563; margin-top: 5px; }
            .optional { color: #6b7280; font-style: italic; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Booking Enquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Event Type:</div>
                <div class="value">${eventTypeLabel}</div>
              </div>
              ${numberOfGuests ? `
              <div class="field">
                <div class="label">Number of Guests:</div>
                <div class="value">${numberOfGuests}</div>
              </div>
              ` : ''}
              ${message ? `
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text version
    const textContent = `
Booking Enquiry

Email: ${email}
Phone: ${phone}
Event Type: ${eventTypeLabel}
${numberOfGuests ? `Number of Guests: ${numberOfGuests}\n` : ''}
${message ? `Message:\n${message}\n` : ''}
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Casa das Mandalas <roberto@robdll.com>",
      to: "dilillo.roberto@gmail.com",
      replyTo: email,
      subject: "Booking Enquiry",
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

