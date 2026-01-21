export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const data = req.body;

  if (!data.name || !data.phone) {
    return res.status(400).json({ error: "Invalid" });
  }

  // Send to Google Sheet
  await fetch(process.env.SHEET_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  // Send Email
  await fetch(process.env.EMAIL_API, {
    method: "POST",
    body: JSON.stringify(data),
  });

  // Send WhatsApp
  await fetch(process.env.WHATSAPP_API, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json({ success: true });
}


await fetch(process.env.MAILCHIMP_WEBHOOK, {
  method: "POST",
  body: JSON.stringify(data),
});
