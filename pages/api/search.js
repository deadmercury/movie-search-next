const errorThrower = (message) => new Error(message);

export default async function search(req, res) {
  try {
    let { name, year, page } = req.query;
    if (!name) throw errorThrower(`name not specified`);
    if (!page) page = 1;
    const query = new URL(`/3/search/movie`, `https://api.themoviedb.org`);
    query.searchParams.append('api_key', process.env.KEY);
    query.searchParams.append('query', name);
    if (year) query.searchParams.append('year', year);
    query.searchParams.append('page', page);
    const data = await (await fetch(query.href)).json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      reason: error.toString(),
    });
  }
}
