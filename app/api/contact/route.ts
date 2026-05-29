import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const { name, email, bike, message } = body;

    const data = await resend.emails.send({
      from: "viši velo <onboarding@resend.dev>",

      to: ["gapback@gmail.com"],

      subject: `New Service Request from ${name}`,

      html: `
        <h2>New Service Request</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Bike:</strong> ${bike}</p>

        <p><strong>Issue:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json(data);

  } catch (error) {

    console.error(error);

    return Response.json({ error });

  }
}