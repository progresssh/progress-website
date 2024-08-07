export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (req.query.target === "journal") {
    try {
      await res.revalidate("/");
      return res.json({ revalidated: true });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Error revalidating");
    }
  } else if (req.query.target === "oasis") {
    try {
      await res.revalidate("/oasis");

      return res.json({ revalidated: true });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Error revalidating");
    }
  } else if (req.query.target === "star") {
    try {
      await res.revalidate("/star");
      return res.json({ revalidated: true });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Error revalidating");
    }
  }
}
