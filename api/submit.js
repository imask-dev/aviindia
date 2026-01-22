export default async function handler(req, res) {
  const allowed = [
    "https://aiahm.in",
    "https://www.aiahm.in",
    "https://aviindia-git-features-imask-dev.vercel.app"
  ];

  const origin = req.headers.origin || "";
  const referer = req.headers.referer || "";

  const matched = allowed.find(o =>
    origin.includes(o.replace("https://", "")) ||
    referer.includes(o.replace("https://", ""))
  );

  if (matched) {
    res.setHeader("Access-Control-Allow-Origin", matched);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).end();

  try {
    const data = req.body;

    if (!data?.name || !data?.phone) {
      return res.status(400).json({ success: false });
    }

    await fetch(process.env.SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("API ERROR:", err);
    return res.status(500).json({ success: false });
  }
}




