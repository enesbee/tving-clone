export interface IGetShortBanner {
  header?: Header;
  body?: Body;
}

export interface Body {
  info: Info;
  result: Result[];
}

export interface Info {
  title: string;
}

export interface Result {
  content_code: null;
  content_type: string;
  banner_type: string;
  content: Content;
  display_position: number;
  mapping_contents_name: null;
  mapping_image_type: null;
  mapping_image_url: null;
  tag_mapping_image_type: null;
  tag_mapping_image_url: null;
  add_clip: null;
  shopping_info: null;
  position_title: string;
  display_start_date: string;
  display_end_date: string;
}

export interface Content {
  banner_title: string;
  banner_sub_title: string;
  banner_link_url: string;
  banner_link_move_type: string;
  banner_image_type: string;
  banner_image_url: string;
  background_color_left: string;
  background_color_right: string;
  banner_title2: null;
  banner_title3: null;
  banner_sub_title2: null;
  banner_sub_title3: null;
  banner_bc_notice: null;
  banner_bc_notice_color: null;
  banner_title_bold: string;
  banner_sub_title_bold: string;
  banner_title2_bold: string;
  banner_title3_bold: string;
  banner_sub_title2_bold: string;
  banner_sub_title3_bold: string;
}

export interface Header {
  message: string;
  status: number;
}