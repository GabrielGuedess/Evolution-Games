import { VercelRequest, VercelResponse } from '@vercel/node';
import game from 'api/models/game';

export default async function gameHandler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const { page } = req.query;

  if (!page) {
    const games = await game.findAll();

    res.json(games);
    return;
  }

  const gamesPage = await game.findPage(page as string);

  res.json(gamesPage);
}
