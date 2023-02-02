export interface IGetContent {
  header?: Header;
  body?: Body;
}

export interface Body {
  info: Info;
  result: Result[];
}

export interface Info {
  title: Title;
}

export type Title = "티빙에서 꼭 봐야하는 콘텐츠";

export interface Result {
  content_code: string;
  content_type: ContentType;
  banner_type: null;
  content: Content;
  display_position: number;
  mapping_contents_name: string;
  mapping_image_type: null | string;
  mapping_image_url: null;
  tag_mapping_image_type: null | string;
  tag_mapping_image_url: null;
  add_clip: null;
  shopping_info: null;
  position_title: Title;
  display_start_date: string;
  display_end_date: string;
}

export interface Content {
  vod_code: string;
  vod_name: VODName;
  vod_type: VODType;
  grade_code: GradeCode;
  adult_yn: AdultYn;
  insert_date: number;
  view_count: Count;
  like_count: number;
  channel: Channel;
  program: Program;
  episode: Episode;
  movie: null;
  store: null;
  sale_count: Count;
  last_frequency_yn: AdultYn;
  program_view_count: Count;
  asp_info: ASPInfo[];
  support_info: SupportInfo[];
  service_open_date: number;
  service_end_date: number;
  free_last_frequency_yn: AdultYn;
  stream: Image[] | null;
  billing_package_id: string[];
  program_sale_count: Count;
  stream_support_info: StreamSupportInfo | null;
  sale_package_yn: AdultYn;
  sale_status: number;
  enm_code: null;
  billing_package_id_type: BillingPackageIDType;
}

export type AdultYn = "N" | "Y";

export interface ASPInfo {
  code: Code;
  price: Price;
  mapping_code: string;
}

export type Code = "ASPC000081" | "ASPC000082" | "ASPC000084" | "ASPC001000";

export interface Price {
  krw: number;
  usd: number;
  appstore: number;
  playstore: number;
  rental: number;
  collect: number;
}

export interface BillingPackageIDType {
  charge_fixed_ids: ChargeFixedIDS;
  charge_fixed_yn: AdultYn;
}

export type ChargeFixedIDS = "2610061,2610161,2610062,2839994,2915284";

export interface Channel {
  code: string;
  name: VODName;
  category_code: string;
  category_name: VODName;
  description: VODName;
  quality: Quality;
  hd_yn: AdultYn;
  price: Price;
  free_yn: AdultYn;
  adult_yn: AdultYn;
  item_sale_yn: AdultYn;
  guest_watch_yn: AdultYn;
  oversea_watch_yn: AdultYn;
  image: Image[];
  no: number;
  sort_no: number;
  stick_channel_no: number;
  mcp_code: string;
  scp_code: string;
  time_shift_time: number;
  type: Type;
  broadcast_type: BroadcastType;
  service_yn: AdultYn;
  fan_yn: AdultYn;
  parent_code: string;
  enm_code: string;
  ch_home_url: string;
  ch_home_m_url: string;
  adpre: string;
  admid: string;
  drm_multi_yn: null;
  contenttype: string;
  dai_asset_id: null | string;
}

export type BroadcastType = "CPSE0300" | "CPSE0200" | "CPSE0100";

export interface VODName {
  prefix_ko: null | string;
  ko: string;
  en: null | string;
}

export interface Image {
  url: string;
  url2: null;
  code: string;
}

export type Quality = "CVPR0200";

export type Type = "CPCS0100";

export interface Episode {
  actor: string[];
  broadcast_date: number;
  broadcast_day: BroadcastDay;
  category1_code: Category1Code;
  category1_name: VODName;
  category2_code: string;
  category2_name: VODName;
  code: string;
  display_category1: null;
  display_category2: null;
  download: Download;
  download_yn: AdultYn;
  duration: number;
  free_yn: AdultYn;
  frequency: number;
  grade_code: GradeCode;
  adult_yn: AdultYn;
  guest_watch_yn: AdultYn;
  image: Image[];
  keywords1: string[];
  keywords2: string[];
  mcp_code: string;
  name: VODName;
  price: Price;
  program_code: string;
  hd_yn: AdultYn;
  quality: Quality;
  scp_code: string;
  synopsis: VODName;
  broadcast_datetime: number;
  same_code: string;
  drm_yn: AdultYn;
  drm_sale_type: string;
  enm_code: string;
  pip_media_url: string;
  mezzokey: string;
  etc: Etc;
  mdrm_multi_yn: AdultYn;
  mdrm_fair_yn: AdultYn;
  mdrm_fair_filesize: string;
  mdrm_play_yn: AdultYn;
  mdrm_play_filesize: string;
  mdrm_wide_yn: AdultYn;
  mdrm_wide_filesize: null;
  mdrm_package_key: string;
  pip_cliptype: PipCliptype;
  stream_meta_info: StreamMetaInfo;
  skip_sec: string;
  abr_flag: AdultYn;
  vtt_path: string;
  vtt_img: string;
  new_broadcast_yn: AdultYn;
  paramount_yn: AdultYn;
  uhd_4k_yn: AdultYn;
}

export type BroadcastDay =
  | "PGWD0500"
  | "PGWD0400"
  | "PGWD0700"
  | "PGWD0300"
  | "PGWD0200"
  | "PGWD0600";

export type Category1Code = "PCD" | "PCA" | "PCC";

export interface Download {
  price: Price;
  mcp_code: null;
  scp_code: null;
}

export interface Etc {
  teamcode: string;
  hometeam: string;
  awayteam: string;
  teamcode_name: string;
  hometeam_name: string;
  awayteam_name: string;
  pickle_yn: string;
}

export type GradeCode =
  | "CPTG0400"
  | "CPTG0100"
  | "CPTG0300"
  | "CPTG0500"
  | "CPTG0200";

export type PipCliptype = "C001";

export type StreamMetaInfo =
  | "stream25,stream30,stream40,stream50"
  | "stream25,stream30,stream40,stream50,stream70"
  | "stream50,stream40,stream30,stream25";

export interface Program {
  id: null;
  code: string;
  name: VODName;
  category1_code: string;
  category1_name: VODName;
  category2_code: string;
  category2_name: VODName;
  product_year: number;
  product_country: ProductCountry;
  production: Production;
  director: string[];
  actor: string[];
  synopsis: VODName;
  story: VODName;
  image: Image[];
  channel_code: string;
  display_category1: string[];
  display_category2: string[];
  grade_code: GradeCode;
  adult_yn: AdultYn;
  series_code: SeriesCode;
  keywords1: null;
  keywords2: null;
  fan_yn: AdultYn;
  enm_code: string;
  pgm_home_url: string;
  pgm_home_m_url: string;
  script: Script;
  broad_state: BroadState;
  broad_dt: string;
  broad_end_dt: string;
  broad_week: string;
  broad_hour: string;
  broad_minu: string;
  sub_info_list: SubInfoList[];
  smr_program_code: string;
  quickup_yn: AdultYn;
  season_pgm_code: string;
  season_pgm_no: string;
  season_etc_vod_yn: AdultYn;
  tving_original_yn: AdultYn;
  tving_exclusive_yn: AdultYn;
  stream_meta_info: StreamMetaInfo;
  episode_sort: number;
}

export type BroadState = "CPBS0200" | "CPBS0300" | "";

export type ProductCountry = "CACT1001";

export type Production = "CJ";

export type Script =
  | ""
  | "정보훈"
  | "박희연"
  | "한상운"
  | "이우정"
  | "김정선"
  | "박연선";

export type SeriesCode = "" | "S00200";

export interface SubInfoList {
  link_name: string;
  pc_url: string;
  m_url: string;
}

export interface Count {
  hour: number;
  day: number;
  week: number;
  total: number;
  noParseHour: number;
  noParseDay: number;
  noParseWeek: number;
}

export type StreamSupportInfo =
  | "stream40,stream30,stream50"
  | "stream40,stream30,stream50,stream70";

export type SupportInfo =
  | "CSSD0100,CSND0900,CSOD0900,CSCD0900"
  | "CSSD0200,CSND0100,CSOD0100,CSCD0100"
  | "CSSD0200,CSND0200,CSOD0100,CSCD0900"
  | "CSSD0200,CSND0100,CSOD0200,CSCD0100"
  | "CSSD0200,CSND0200,CSOD0200,CSCD0900"
  | "CSSD0200,CSND0900,CSOD0900,CSCD0900"
  | "CSSD0300,CSND0100,CSOD0100,CSCD0100"
  | "CSSD0300,CSND0200,CSOD0100,CSCD0900"
  | "CSSD0300,CSND0100,CSOD0200,CSCD0100"
  | "CSSD0300,CSND0200,CSOD0200,CSCD0900"
  | "CSSD0400,CSND0900,CSOD0900,CSCD0900"
  | "CSSD0500,CSND0900,CSOD0900,CSCD0900"
  | "CSSD0600,CSND0900,CSOD0900,CSCD0900"
  | "CSSD1100,CSND0900,CSOD0900,CSCD0900"
  | "CSSD1200,CSND0900,CSOD0900,CSCD0900"
  | "CSSD1300,CSND0900,CSOD0900,CSCD0900"
  | "CSSD1400,CSND0900,CSOD0900,CSCD0900";

export type VODType = "CSMD0100";

export type ContentType = "vod";

export interface Header {
  message: string;
  status: number;
}