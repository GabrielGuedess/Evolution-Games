import data from '../database/database.json';

async function findAll() {
  return new Promise(resolve => resolve(data));
}

async function findBySlug(slug: string) {
  return new Promise(resolve =>
    resolve(data.games.find(game => game.slug === slug)),
  );
}

async function findWithLimit(limit: string, offset: string) {
  const limitIndex = Number.parseInt(limit, 10);
  const offsetIndex = Number.parseInt(offset, 10);

  return new Promise(resolve =>
    resolve(
      data.games.filter(
        (_, index) => index < limitIndex && index >= offsetIndex,
      ),
    ),
  );
}

async function findPage(page: string) {
  const pageIndex = Number.parseInt(page, 10) * 4;

  return new Promise(resolve =>
    resolve(
      data.games.filter(
        (_, index) => index < pageIndex && index >= pageIndex - 4,
      ),
    ),
  );
}

export default Object.freeze({
  findAll,
  findBySlug,
  findWithLimit,
  findPage,
});
