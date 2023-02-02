export interface IGetOriginalContent {
  header?: Header;
  body?: Body;
}

export interface Body {
  api_uri: string;
  title: string;
  type: string;
  contents: Content[];
  has_more: HasMore;
}

export interface Content {
  vod_name: string;
  vod_code: string;
  tving_original_yn: HasMore;
  tving_exclusive_yn: HasMore;
  image: string;
}

export type HasMore = "Y" | "N";

export interface Header {
  message: string;
  status: number;
}