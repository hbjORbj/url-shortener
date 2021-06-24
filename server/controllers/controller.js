import shortid from "shortid";
import Url from "../models/Url";
import sanitize from "mongo-sanitize";

export const shortenUrl = async (req, res) => {
  let { longUrl } = req.body;
  longUrl = sanitize(longUrl).trim();
  try {
    const url = await Url.findOne({ longUrl }, { shortUrl: 1 });
    return res.json({ shortUrl: url.shortUrl });
  } catch (err) {
    console.log(err);
  }

  const code = shortid.generate();
  const shortUrl = `${process.env.CLIENT_URL}/${code}`;
  const newUrl = new Url({ longUrl, shortUrl, code });
  await newUrl.save();
  return res.json({ shortUrl: shortUrl });
};

export const checkShortUrl = async (req, res) => {
  let { code } = req.body;
  code = sanitize(code);
  try {
    const url = await Url.findOne({ code }, { longUrl: 1 });
    return res.json({ longUrl: url.longUrl });
  } catch (err) {
    return res.status(401).json({ error: "Given short url does not exist." });
  }
};
