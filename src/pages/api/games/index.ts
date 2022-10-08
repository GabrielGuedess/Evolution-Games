import { VercelRequest, VercelResponse } from '@vercel/node';
import game from 'api/models/game';

export default async function gameHandler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const games = await game.findAll();
  res.json(games);
}
