import data from '../database/database.json';

async function findAll() {
  return new Promise(resolve => resolve(data));
}

async function findBySlug(slug: string) {
  return new Promise(resolve =>
    resolve(data.games.find(game => game.slug === slug)),
  );
}

export default Object.freeze({
  findAll,
  findBySlug,
});
