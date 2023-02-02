const API_KEY = "1e7952d0917d6aab1f0293a063697610";
const SCREEN_CODE = "CSSD0100";
const NETWORK_CODE = "CSND0900";
const OS_CODE = "CSOD0900";
const TELE_CODE = "CSCD0900";
const POC_CODE = "POCD0400";
const BASE_URL = "https://api.tving.com/v2";

// 홈 배너
export async function getBanner() {
  const response = await fetch(
    `${BASE_URL}/operator/highlights?mainYn=Y&positionKey=PC_RATEL_HOME_BNR&apiKey=${API_KEY}`
  );
  return await response.json();
}

// 티빙에서 꼭 봐야하는 콘텐츠
export async function getContent() {
  const response = await fetch(
    `${BASE_URL}/operator/highlights?mainYn=Y&positionKey=AND_RE_VODHOME_HOT_PM_LIST&apiKey=${API_KEY}&screenCode=${SCREEN_CODE}&osCode=${OS_CODE}`
  );
  return await response.json();
}

//테마 (OpenAPI인지 확인도 안된 상태에서 개인 연습용 프로젝트에 요청 계속 하는건 아닌거 같아서 테마는 2개로 제한)
export async function getThemes() {
  const response = await fetch(
    `${BASE_URL}/operator/themes?pageNo=1&pageSize=2&contentOutputLimit=20&pocCode=${POC_CODE}&themeType=T&exposeMainYn=Y&teleCode=${TELE_CODE}&apiKey=${API_KEY}`
  );
  return await response.json();
}

//티빙 오리지널
export async function getOriginalContent() {
  const response = await fetch(
    `${BASE_URL}/media/band/originals?pageSize=20&order=viewhour&originalYn=Y&exclusiveYn=Y&adult=all&screenCode=${SCREEN_CODE}&osCode=${OS_CODE}&apiKey=${API_KEY}`
  );
  return await response.json();
}