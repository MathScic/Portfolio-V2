import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
    }

    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Envoi de l'email
    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`, // Nom de la personne qui contacte
      to: ["scicluna.mathieu@hotmail.fr"], // ⚠️ REMPLACEZ par votre vrai email
      replyTo: email, // Email de la personne qui contacte
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message de :</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ message: "Email envoyé avec succès", id: data.id }, { status: 200 });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
  }
}
