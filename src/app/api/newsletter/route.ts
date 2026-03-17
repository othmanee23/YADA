import { NextResponse } from "next/server";

import {
  parseNewsletterPayload,
  validateNewsletterPayload,
} from "@/lib/forms";
import { sendNewsletterNotification } from "@/lib/server/resend";
import { upsertSupabaseRow } from "@/lib/server/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseNewsletterPayload(body);

    if (payload.website) {
      return NextResponse.json({
        ok: true,
        message: "Merci, votre email a bien été enregistré.",
      });
    }

    const validationError = validateNewsletterPayload(payload);

    if (validationError) {
      return NextResponse.json(
        { ok: false, message: validationError },
        { status: 400 }
      );
    }

    await upsertSupabaseRow(
      "newsletter_subscribers",
      {
        email: payload.email,
        source: "website-footer",
      },
      "email"
    );

    try {
      await sendNewsletterNotification(payload);
    } catch (error) {
      console.warn("Newsletter notification email failed", error);
    }

    return NextResponse.json({
      ok: true,
      message: "Merci, votre email a bien été enregistré.",
    });
  } catch (error) {
    console.error("POST /api/newsletter failed", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "La newsletter n'est pas configurée côté serveur.",
      },
      { status: 500 }
    );
  }
}
