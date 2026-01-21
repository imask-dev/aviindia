export default async function handler(req, res) {
  if (req.method !== "POST") return res.end();

  const data = req.body;

  await fetch(process.env.MAILCHIMP_WEBHOOK, {
    method: "POST",
    body: JSON.stringify(data),
  });

  res.end("ok");
}
