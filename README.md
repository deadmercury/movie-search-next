# Search Movies

NextJS app to search movies using [TMDB](https://www.themoviedb.org/) API. Deployed on Vercel [here](https://movie-search-next.vercel.app/).

## Environment Variables

- `KEY` [TMDB API](https://www.themoviedb.org/documentation/api) key.

## Learnings

- Used NextJS [API Routes](https://nextjs.org/docs/api-routes/) to create a API to hide TMDB api key and fetch data.

- Used [useSWRInfinite](https://swr.vercel.app/docs/pagination#useswrinfinite) to fetch paginated data from the TMDB api.

- Dark/Light theme switcher with [React Context](https://reactjs.org/docs/context.html).

- Used [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) to change theme based preferred user theme.

## References

- Design on [Figma](https://www.figma.com/file/bFTvg7Yjl5fRaeCsAYEqgI/Movie-Search?node-id=0%3A1).

- Icons from [boxicons](https://github.com/atisawd/boxicons).

- [Kleki](https://kleki.com/).

- How to use react context effectively by [Kent C Dodds](https://kentcdodds.com/blog/how-to-use-react-context-effectively).

- Fetcher gets called much more than I expect in [SWR Issues](https://github.com/vercel/swr/issues/167#issuecomment-560478786).

- Cannot update a component (App) while rendering a different component on [Stack Overflow](https://stackoverflow.com/questions/62236000/cannot-update-a-component-app-while-rendering-a-different-component).

- [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/).
