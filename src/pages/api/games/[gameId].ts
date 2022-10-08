import { VercelRequest, VercelResponse } from '@vercel/node';
import game from 'api/models/game';

export default async function gameHandler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const { gameId } = req.query;

  const storedGame = await game.findBySlug(gameId as string);

  if (!storedGame) {
    return res.status(404).json({ error: 'Game not found' });
  }

  return res.json(storedGame);
}
