export default async function handler(req, res) {
  const allowedOrigins = [
    "https://aviindia-git-features-imask-dev.vercel.app",
    "https://www.aiahm.in",
    "https://aiahm.in"
  ];

  const origin = req.headers.origin || "";
  const referer = req.headers.referer || "";

  const isAllowed =
    allowedOrigins.some(o => origin.startsWith(o)) ||
    allowedOrigins.some(o => referer.startsWith(o));

  if (isAllowed) {
    res.setHeader("Access-Control-Allow-Origin", origin || referer);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).end();

  const data = req.body;

  if (!data?.name || !data?.phone) {
    return res.status(400).json({ success: false });
  }

  await fetch(process.env.SHEET_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  await fetch(process.env.MAILCHIMP_WEBHOOK, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json({ success: true });
}
