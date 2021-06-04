export const imageURL = {
  baseURL: 'https://image.tmdb.org/t/p/',
  posterSizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780'],
  backdropSizes: ['w300', 'w780', 'w1280'],
};

export const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

export const posterSourceSetString = (relativePosterPath) => {
  return imageURL.posterSizes
    .map((ps) => {
      return `${imageURL.baseURL}${ps}${relativePosterPath} ${
        ps.match(/\d+/)[0]
      }w`;
    })
    .join(', ');
};

export const posterURL = (relativePosterPath) => {
  return `${imageURL.baseURL}${imageURL.posterSizes[2]}${relativePosterPath}`;
};
