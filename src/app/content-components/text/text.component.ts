import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  contentHTML: string = '';

  constructor(
    @Inject('config') private config: any,
    private renderer: Renderer2,
    private el: ElementRef) {}

  ngOnInit(): void {
    this.contentHTML =
    `<${this.config.tag} style="` +
    `font-size: ${this.config.fontsize}; ` +
    `font-weight: ${this.config.fontweight}; ` +
    `font-family: ${this.config.fontfamily !== '' ? this.config.fontfamily : 'ui-sans-serif'}; ` +
    `color: ${this.config.color}; ` +
    `opacity: ${this.config.opacity}; ` +
    `text-align: ${this.config.textalign}; ` +
    `padding: ${this.config.padding}; ` +
    `margin: ${this.config.margin}; ` +
    `background-color: ${this.config.backgroundcolor};">` +
    `${this.config.content}` +
    `</${this.config.tag}>\n`;
    // console.log(this.contentHTML)
    this.setInlineStyle();
  }

  setInlineStyle() {
    const elementTag = this.config.tag;
    const elementText = this.config.content;

    const dynamicElement = this.renderer.createElement(elementTag);
    const textNode = this.renderer.createText(elementText);

    this.renderer.appendChild(dynamicElement, textNode);

    this.renderer.setStyle(dynamicElement, 'font-size', `${this.config.fontsize}`);
    this.renderer.setStyle(dynamicElement, 'font-weight', this.config.fontweight);
    this.renderer.setStyle(
      dynamicElement,
      'font-family',
      this.config.fontfamily !== '' ? this.config.fontfamily : 'ui-sans-serif'
    );
    this.renderer.setStyle(dynamicElement, 'color', this.config.color);
    this.renderer.setStyle(dynamicElement, 'opacity', this.config.opacity);
    this.renderer.setStyle(dynamicElement, 'text-align', this.config.textalign);
    this.renderer.setStyle(dynamicElement, 'padding', `${this.config.padding}`);
    this.renderer.setStyle(dynamicElement, 'margin', `${this.config.margin}`);
    this.renderer.setStyle(dynamicElement, 'background-color', this.config.backgroundcolor);

    const container = this.el.nativeElement;
    this.renderer.appendChild(container, dynamicElement);
  }

}
