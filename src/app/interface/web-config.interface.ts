import { LayoutMode } from "./css-property.interface";
import { TextContent, TextContentConfig } from "./text.interface";

/** 網站設定檔 */
export interface  WebConfig {
  /** 網域 */
  domain: string;
  /** 資料 */
  data: any[];
  /** 頁面 */
  pages: PageConfig[]
}


/** 頁面設定檔 */
export interface PageConfig {
  /** 頁面與路由名稱 */
  name: string;
  /** 標題 */
  title: string;
  /** 描述 */
  description: string;
  /** 畫面rows */
  layout_rows: LayoutRow[]
}

export interface LayoutRow {
  layout_cols: LayoutCol[],
  config: LayoutRowConfig,
  [key:string]: any
}

export interface LayoutRowConfig {
  row_type: LayoutMode,
}

export interface LayoutCol {
  contents: Content[],
  config: LayoutColConfig,
  [key:string]: any
}

export interface LayoutColConfig {
  col_type: LayoutMode,
}

type Content = TextContent;
type ContentConfig = TextContentConfig;

export type ActiveObject = (Content | LayoutRow | LayoutCol | undefined);
export type ActiveConfig = ((ContentConfig | LayoutRowConfig | LayoutColConfig) & {[key: string]: any} | undefined);
