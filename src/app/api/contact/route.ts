import { NextResponse } from "next/server";

import {
  parseContactPayload,
  validateContactPayload,
} from "@/lib/forms";
import { sendContactNotification } from "@/lib/server/resend";
import { insertSupabaseRow } from "@/lib/server/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseContactPayload(body);

    if (payload.company) {
      return NextResponse.json({
        ok: true,
        message: "Votre message a bien été envoyé.",
      });
    }

    const validationError = validateContactPayload(payload);

    if (validationError) {
      return NextResponse.json(
        { ok: false, message: validationError },
        { status: 400 }
      );
    }

    await insertSupabaseRow("contact_submissions", {
      full_name: payload.fullName,
      email: payload.email,
      subject: payload.subject,
      phone: payload.phone || null,
      message: payload.message,
      source: "website-contact-form",
    });

    try {
      await sendContactNotification(payload);
    } catch (error) {
      console.warn("Contact notification email failed", error);
    }

    return NextResponse.json({
      ok: true,
      message: "Votre message a bien été envoyé.",
    });
  } catch (error) {
    console.error("POST /api/contact failed", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Le formulaire n'est pas configuré côté serveur.",
      },
      { status: 500 }
    );
  }
}
