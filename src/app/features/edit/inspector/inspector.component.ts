import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActiveConfig } from 'src/app/interface/web-config.interface';
import { PageConfigService } from 'src/app/service/page-config.service';

interface KeyValueWithType {
  key: string;
  value: any;
}

enum DynamicInputType {
  SELECT = 'select',
  NUMBER_INPUT = 'number_input',
  TEXT_INPUT = 'text_input',
  SLIDER = 'slider',
  COLOR = 'color'
}

const textTagOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'];
const fontFamilyOptions = [''];
const fontWeightOptions = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
const textAlignOptions = ['left', 'center', 'right'];
const alighOptions = ['left', 'center', 'right', 'justify', 'start', 'end'];

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnInit {

  protected config: { [key: string]: { type: string; option?: string[]; unit?: string } }  = {
    tag: {
      type: DynamicInputType.SELECT,
      option: textTagOptions
    },
    fontsize: {
      type: DynamicInputType.NUMBER_INPUT,
      unit: 'px'
    },
    fontweight: {
      type: DynamicInputType.SELECT,
      option: fontWeightOptions
    },
    fontfamily: {
      type: DynamicInputType.SELECT,
      option: fontFamilyOptions
    },
    opacity: {
      type: DynamicInputType.SLIDER
    },
    textalign: {
      type: DynamicInputType.SELECT,
      option: textAlignOptions
    },
    padding: {
      type: DynamicInputType.NUMBER_INPUT,
      unit: 'px'
    },
    margin: {
      type: DynamicInputType.NUMBER_INPUT,
      unit: 'px'
    },
    content: {
      type: DynamicInputType.TEXT_INPUT,
    },
  }

  @Input('activeConfig')activeConfig: ActiveConfig;
  keyValueWithTypeList: KeyValueWithType[] = [];
  color1: string = '#2889e9';

  constructor(private pageConfigService: PageConfigService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeConfig'] && this.activeConfig) {
      this.keyValueWithTypeList = this.getKeyValueWithType(this.activeConfig);
    }
  }

  getKeyValueWithType(activeConfig: any): KeyValueWithType[] {
    const keys = Object.keys(activeConfig);
    const keyValueWithTypeList: KeyValueWithType[] = [];

    keys.forEach(key => {
      const value = activeConfig[key];

      const keyValueWithType: KeyValueWithType = {
        key: key,
        value: value,
      };

      keyValueWithTypeList.push(keyValueWithType);
    });

    return keyValueWithTypeList;
  }

  inputChange(item: KeyValueWithType) {
    if (this.activeConfig) {
      this.activeConfig[item.key] = item.value;
    }
    this.pageConfigService.setActiveConfig(this.activeConfig);
  }

  selectChange(item: KeyValueWithType, event: any) {
    if (this.activeConfig) {
      this.activeConfig[item.key] = event.target.value;
    }
    this.pageConfigService.setActiveConfig(this.activeConfig);
  }

  enterBlur(event: any) {
    event.target.blur();
  }

  formatLabel(value: number) {
    return value;
  }

  onEventLog(event: string, data: any): void {
    console.log(event, data);
  }

}
