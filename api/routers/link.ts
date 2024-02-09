import {Router} from 'express';
import {Link} from "../types";
import Links from '../models/Links';
import {nanoid} from "nanoid";

const linksRouter = Router();

linksRouter.post('/',  async (req, res, next) => {
  try {

    const shortUrl = nanoid(7);

    const linksData: Link = {
      link: req.body.link,
      shortUrl: shortUrl,
    };

    const link = new Links(linksData);
    await link.save();
    res.send(link);
  } catch (e) {
    next(e);
  }
});

linksRouter.get('/:shortUrl', async (req, res, next) => {
  try {
    const link = await Links.findOne({ shortUrl: req.params.shortUrl });

    if (!link) {
      return res.status(404).json({ error: 'Link not found' });
    }
    res.status(301).redirect(link.link);
  } catch (e) {
    next(e);
  }
});

export default linksRouter;