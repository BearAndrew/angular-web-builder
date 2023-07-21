import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActiveConfig } from 'src/app/interface/web-config.interface';
import { PageConfigService } from 'src/app/service/page-config.service';

interface KeyValueWithType {
  key: string;
  value: any;
  type: string;
}

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnInit {

  activeConfig: ActiveConfig;
  keyValueWithTypeList: KeyValueWithType[] = [];
  inputField: HTMLInputElement | undefined;

  constructor(private pageConfigService: PageConfigService) { }

  ngOnInit(): void {
    this.pageConfigService.getActiveConfig().subscribe(
      data => {
        this.activeConfig = data;
        this.keyValueWithTypeList = this.getKeyValueWithType(this.activeConfig);
      }
    );
  }

  getKeyValueWithType(activeConfig: any): KeyValueWithType[] {
    const keys = Object.keys(activeConfig);
    const keyValueWithTypeList: KeyValueWithType[] = [];

    keys.forEach(key => {
      const value = activeConfig[key];
      const type = typeof value;

      const keyValueWithType: KeyValueWithType = {
        key: key,
        value: value,
        type: type
      };

      keyValueWithTypeList.push(keyValueWithType);
    });

    return keyValueWithTypeList;
  }

  onInputChange(item: KeyValueWithType) {
    if (this.activeConfig) {
      this.activeConfig[item.key] = item.value;
    }
    setTimeout(() => {
      this.pageConfigService.setActiveConfig(this.activeConfig);
    }, 0);
  }

  onInputFocus(inputElement: HTMLInputElement): void {
    this.inputField = inputElement; // 记录当前输入框
  }

}
