const API_KEY = "1e7952d0917d6aab1f0293a063697610";
const API_LANGUAGE = "ko-KR";
const API_REGION = "kr";
const BASE_URL = "https://api.tving.com/v2";

// getMovies 로 받아온 data의 타입 중 result 항목이 너무 많아 몇개만 추려 따로 분류 작성
interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

// getMovies 로 받아온 data의 타입 작성
export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

//어차피 데이터를 받아올 url이 movie/now_playing이니 react-query에서 ['movies', 'nowPlaying'] 이라는 식별자에 담아줄거임.
export function getMovies() {
  return fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${API_LANGUAGE}&region=${API_REGION}`
  ).then((response) => response.json());
}

export function getMovieDetails() {
  return fetch(
    `${BASE_URL}/movie/{movie_id}?api_key=${API_KEY}&language=${API_LANGUAGE}`
  ).then((response) => response.json());
}

export function getSearchResult() {
  return fetch(
    `${BASE_URL}/search/multi?api_key=12345&language=${API_LANGUAGE}&region=${API_REGION}&page=1&include_adult=true&query=asdf`
  ).then((response) => response.json());
}

// 홈 배너
//${BASE_URL}/operator/highlights?mainYn=Y&positionKey=PC_RATEL_HOME_BNR&screenCode=CSSD0100&networkCode=CSND0900&osCode=CSOD0900&teleCode=CSCD0900&apiKey=1e7952d0917d6aab1f0293a063697610

// 티빙에서 꼭 봐야하는 콘텐츠
//${BASE_URL}/operator/highlights?mainYn=Y&positionKey=AND_RE_VODHOME_HOT_PM_LIST&screenCode=CSSD0100&networkCode=CSND0900&osCode=CSOD0900&teleCode=CSCD0900&apiKey=1e7952d0917d6aab1f0293a063697610

// 중간 띠배너
//${BASE_URL}/operator/highlights?mainYn=Y&positionKey=PC_HOME_SPORT_BNR&screenCode=CSSD0100&networkCode=CSND0900&osCode=CSOD0900&teleCode=CSCD0900&apiKey=1e7952d0917d6aab1f0293a063697610

//테마
//${BASE_URL}/operator/themes?pageNo=1&pageSize=11&contentOutputLimit=20&pocCode=POCD0400&themeType=T&cacheTime=5&exposeMainYn=Y&screenCode=CSSD0100&networkCode=CSND0900&osCode=CSOD0900&teleCode=CSCD0900&apiKey=1e7952d0917d6aab1f0293a063697610

//티빙 오리지널
//${BASE_URL}/media/band/originals?pageSize=20&order=viewhour&originalYn=Y&exclusiveYn=Y&adult=all&screenCode=CSSD0100&networkCode=CSND0900&osCode=CSOD0900&teleCode=CSCD0900&apiKey=1e7952d0917d6aab1f0293a063697610

//실시간 인기영화
//${BASE_URL}/media/movies?cacheType=main&pageNo=1&pageSize=20&order=viewDay&free=all&adult=all&personal=N&screenCode=CSSD0100&networkCode=CSND0900&osCode=CSOD0900&teleCode=CSCD0900&apiKey=1e7952d0917d6aab1f0293a063697610