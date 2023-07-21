import { Color, FontFamily, FontWeight, Opacity, Pixel, TextAlign, TextTag } from "./css-property.interface"

export interface TextContent {
  content_type: 'text',
  config: TextContentConfig,
  [key: string]: any
}

export interface TextContentConfig {
  tag: TextTag,
  fontsize: Pixel,
  fontweight: FontWeight,
  fontfamily: FontFamily,
  color: Color,
  opacity: Opacity,
  textalign: TextAlign,
  padding: Pixel,
  margin: Pixel,
  backgroundcolor: Color,
  content: string,
}
