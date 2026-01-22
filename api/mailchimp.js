export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).end();

  const data = req.body;

  console.log("Mailchimp data:", data);

  return res.status(200).json({ received: true });
}
