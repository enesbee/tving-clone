export interface IGetThemes {
  header: Header;
  body: Body;
}

export interface Body {
  result: Result[];
  total_count: number;
  has_more: HasMore;
}

export enum HasMore {
  N = "N",
  Y = "Y",
}

export interface Result {
  theme_seq: number;
  display_sort: number;
  theme_type: string;
  template_type: string;
  title: string;
  description: null;
  recommend_yn: HasMore;
  list_length_type: null;
  list_image_type: ImageType;
  list_image: null;
  list_image_link_move_type: null;
  list_image_link_url: null;
  body_image_type: string;
  body_image: null | string;
  body_image_link_move_type: string;
  body_image_link_url: null;
  body_text: null;
  start_date: Date;
  end_date: Date;
  use_yn: HasMore;
  del_yn: HasMore;
  reg_user_id: string;
  reg_date: string;
  mod_user_id: string;
  mod_date: string;
  poc_code: string;
  body_background_image: null;
  body_background_color: null;
  body_background_color2: null;
  body_background_image_type: ImageType;
  contents_type: string;
  auto_type: string;
  auto_option: null;
  adult_yn: HasMore;
  expose_main_yn: HasMore;
  theme_key: string;
  more_url: string;
  contents_code: string;
  contents: ContentElement[];
  sections: null;
  sub_title: string;
  list_background_image_type: ImageType;
  list_background_image: null;
  list_background_color: null;
  list_background_color2: null;
  title_font_color: null;
  sub_title_font_color: null;
  theme_bottom_text: null;
}

export enum ImageType {
  D = "D",
}

export interface ContentElement {
  content_code: string;
  content_type: ContentType;
  content: ContentContent;
  display_position: number;
  mapping_image_type: ImageType;
  mapping_image_url: null;
  tag_mapping_image_type: ImageType;
  tag_mapping_image_url: null;
}

export interface ContentContent {
  vod_code: string;
  vod_name: VODName;
  vod_type: VODType;
  grade_code: GradeCode;
  adult_yn: HasMore;
  insert_date: number;
  view_count: Count;
  like_count: number;
  channel: Channel;
  program: Program;
  episode: Episode;
  movie: null;
  store: null;
  sale_count: Count;
  last_frequency_yn: HasMore;
  program_view_count: Count;
  asp_info: ASPInfo[];
  service_open_date: number;
  service_end_date: number;
  free_last_frequency_yn: HasMore;
  stream: Image[] | null;
  billing_package_id: string[];
  program_sale_count: Count;
  stream_support_info: StreamSupportInfo | null;
  sale_package_yn: HasMore;
  sale_status: number;
  enm_code: null;
  billing_package_id_type: BillingPackageIDType;
}

export interface ASPInfo {
  code: Code;
  price: Price;
  mapping_code: string;
}

export enum Code {
  Aspc000081 = "ASPC000081",
  Aspc000082 = "ASPC000082",
  Aspc000084 = "ASPC000084",
  Aspc001000 = "ASPC001000",
  Aspc001040 = "ASPC001040",
}

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
  charge_fixed_yn: HasMore;
}

export enum ChargeFixedIDS {
  The26100612610161261006228399942915284 = "2610061,2610161,2610062,2839994,2915284",
}

export interface Channel {
  code: string;
  name: VODName;
  category_code: CategoryCode;
  category_name: VODName;
  description: VODName;
  quality: Quality;
  hd_yn: HasMore;
  price: Price;
  free_yn: HasMore;
  adult_yn: HasMore;
  item_sale_yn: HasMore;
  guest_watch_yn: HasMore;
  oversea_watch_yn: HasMore;
  image: Image[];
  no: number;
  sort_no: number;
  stick_channel_no: number;
  mcp_code: string;
  scp_code: string;
  time_shift_time: number;
  type: Type;
  broadcast_type: BroadcastType;
  service_yn: HasMore;
  fan_yn: HasMore;
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

export enum BroadcastType {
  Cpse0100 = "CPSE0100",
  Cpse0200 = "CPSE0200",
  Cpse0300 = "CPSE0300",
}

export enum CategoryCode {
  Cg100 = "CG100",
  Cg110 = "CG110",
  Cg130 = "CG130",
  Cg140 = "CG140",
  Cg180 = "CG180",
  Cg220 = "CG220",
}

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

export enum Quality {
  Cvpr0200 = "CVPR0200",
}

export enum Type {
  Cpcs0100 = "CPCS0100",
}

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
  download_yn: HasMore;
  duration: number;
  free_yn: HasMore;
  frequency: number;
  grade_code: GradeCode;
  adult_yn: HasMore;
  guest_watch_yn: HasMore;
  image: Image[];
  keywords1: string[];
  keywords2: string[];
  mcp_code: string;
  name: VODName;
  price: Price;
  program_code: string;
  hd_yn: HasMore;
  quality: Quality;
  scp_code: string;
  synopsis: VODName;
  broadcast_datetime: number;
  same_code: string;
  drm_yn: HasMore;
  drm_sale_type: string;
  enm_code: string;
  pip_media_url: string;
  mezzokey: string;
  etc: Etc;
  mdrm_multi_yn: HasMore;
  mdrm_fair_yn: HasMore;
  mdrm_fair_filesize: string;
  mdrm_play_yn: HasMore;
  mdrm_play_filesize: string;
  mdrm_wide_yn: HasMore;
  mdrm_wide_filesize: null;
  mdrm_package_key: string;
  pip_cliptype: PipCliptype;
  stream_meta_info: StreamMetaInfo;
  skip_sec: string;
  abr_flag: HasMore;
  vtt_path: string;
  vtt_img: string;
  new_broadcast_yn: HasMore;
  paramount_yn: HasMore;
  uhd_4k_yn: HasMore;
}

export enum BroadcastDay {
  Pgwd0100 = "PGWD0100",
  Pgwd0200 = "PGWD0200",
  Pgwd0300 = "PGWD0300",
  Pgwd0400 = "PGWD0400",
  Pgwd0500 = "PGWD0500",
  Pgwd0600 = "PGWD0600",
  Pgwd0700 = "PGWD0700",
}

export enum Category1Code {
  Pca = "PCA",
  Pcc = "PCC",
  Pcd = "PCD",
}

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

export enum GradeCode {
  Cptg0100 = "CPTG0100",
  Cptg0300 = "CPTG0300",
  Cptg0400 = "CPTG0400",
  Cptg0500 = "CPTG0500",
}

export enum PipCliptype {
  C001 = "C001",
}

export enum StreamMetaInfo {
  Stream25Stream30Stream40Stream50 = "stream25,stream30,stream40,stream50",
  Stream25Stream30Stream40Stream50Stream70 = "stream25,stream30,stream40,stream50,stream70",
  Stream50Stream40Stream30Stream25 = "stream50,stream40,stream30,stream25",
}

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
  adult_yn: HasMore;
  series_code: SeriesCode;
  keywords1: null;
  keywords2: null;
  fan_yn: null;
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
  quickup_yn: HasMore;
  season_pgm_code: string;
  season_pgm_no: string;
  season_etc_vod_yn: HasMore;
  tving_original_yn: HasMore;
  tving_exclusive_yn: HasMore;
  stream_meta_info: StreamMetaInfo;
  episode_sort: number;
}

export enum BroadState {
  Cpbs0200 = "CPBS0200",
  Cpbs0300 = "CPBS0300",
  Empty = "",
}

export enum ProductCountry {
  Cact1001 = "CACT1001",
}

export enum Production {
  Cj = "CJ",
}

export enum Script {
  Empty = "",
  김남희 = "김남희",
  김은희 = "김은희",
  백미경 = "백미경",
  송재정김윤주 = "송재정, 김윤주",
}

export enum SeriesCode {
  Empty = "",
  S00200 = "S00200",
}

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

export enum StreamSupportInfo {
  Stream40Stream30Stream50 = "stream40,stream30,stream50",
  Stream40Stream30Stream50Stream70 = "stream40,stream30,stream50,stream70",
}

export enum VODType {
  Csmd0100 = "CSMD0100",
}

export enum ContentType {
  VOD = "vod",
}

export interface Header {
  message: string;
  status: number;
}