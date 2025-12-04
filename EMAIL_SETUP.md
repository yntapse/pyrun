# Email Configuration for Railway

## Gmail SMTP Setup (Recommended)

### Step 1: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click "Security" in the left menu
3. Enable "2-Step Verification" (if not already enabled)
4. Search for "App passwords" or go to: https://myaccount.google.com/apppasswords
5. Select "Mail" and "Other (Custom name)" → Name it "PyrunAi Website"
6. Click "Generate"
7. Copy the 16-character password (e.g., "abcd efgh ijkl mnop")

### Step 2: Add Environment Variables in Railway

Go to your Railway project → Settings → Variables → Add these:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@pyrunai.com
SMTP_PASS=your-16-char-app-password-here
CONTACT_DESTINATION_EMAIL=info@pyrunai.com
```

### Step 3: Redeploy

Railway will automatically redeploy with the new environment variables.

---

## Alternative: SendGrid (Free tier: 100 emails/day)

1. Sign up: https://sendgrid.com/
2. Get API key from Settings → API Keys
3. Use these Railway variables:

```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
CONTACT_DESTINATION_EMAIL=info@pyrunai.com
```

---

## Testing

After setup, test the form:
1. Fill out the contact form on your website
2. Check Railway logs: `railway logs`
3. Check your inbox at info@pyrunai.com
4. User should receive confirmation email
