export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    const response = await fetch(process.env.SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const text = await response.text();

    if (!response.ok) {
      console.error("Sheet error:", text);
      return res.status(500).json({ error: "Sheet failed" });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("API crash:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
