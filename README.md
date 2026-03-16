## YADA Website

This project uses Next.js for both the frontend and the first backend layer.

### Implemented backend endpoints

- `POST /api/contact`
- `POST /api/newsletter`

Contact submissions and newsletter emails are stored in Supabase. Email notifications are optional and use Resend if configured.

## Getting Started

1. Copy `.env.example` to `.env.local`
2. Add your Supabase credentials
3. Optionally add your Resend credentials
4. Run the SQL in `supabase/schema.sql` inside Supabase
5. Start the app:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Required environment variables

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

## Optional environment variables

```bash
RESEND_API_KEY=
CONTACT_NOTIFICATION_EMAIL=contact@yada.ma
CONTACT_FROM_EMAIL=YADA Website <onboarding@resend.dev>
NEWSLETTER_NOTIFICATION_EMAIL=contact@yada.ma
NEWSLETTER_FROM_EMAIL=YADA Website <onboarding@resend.dev>
```

## Deploy on Vercel

Set the same environment variables in your Vercel project, then redeploy.

```bash
npx vercel --prod
```

## Notes

- `SUPABASE_SERVICE_ROLE_KEY` must stay server-side only
- `CONTACT_FROM_EMAIL` and `NEWSLETTER_FROM_EMAIL` should use a verified Resend domain in production
- `onboarding@resend.dev` works for initial testing
