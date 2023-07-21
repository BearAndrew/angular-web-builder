import { PageConfigService } from '../../service/page-config.service';
import { Component, Injector, OnInit } from '@angular/core';
import { ActiveObject, LayoutCol, PageConfig } from '../../interface/web-config.interface';
import { TextComponent } from 'src/app/content-components/text/text.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  pageConfig: PageConfig | undefined;
  lastActiveObject: ActiveObject;
  lastHoverOject: ActiveObject;

  constructor(
    private pageConfigService: PageConfigService,
    private injector: Injector) { }

  ngOnInit(): void {
    this.pageConfigService.getPageConfig().subscribe(data => {
      this.pageConfig = data;
      console.log(this.pageConfig)
    });
  }

  /** 動態component */
  getComponent(contentType: string) {
    let component: any;
    if (contentType === 'text') {
      component = TextComponent;
    } else if (contentType === 'B') {
      // component = ComponentB;
    }
    return component;
  }

  /** 動態component要注入的config */
  getInjector(contentConfig: any) {
    const injectorConfig = Injector.create({
      providers: [{ provide: 'config', useValue: contentConfig }],
      parent: this.injector,
    });
    return injectorConfig;
  }


  /** 設定點擊物件為當前編輯物件 */
  setActive(event: Event, activeObject: ActiveObject) {
    event.stopPropagation();

    // 取消上一個ActiveObject的isActived狀態
    if(this.lastActiveObject) {
      this.lastActiveObject['isActived'] = false;
    }

    // 目前ActiveObject設定為active
    if (activeObject) {
      activeObject['isActived'] = true;
      this.pageConfigService.setActiveConfig(activeObject.config);
    }
    this.lastActiveObject = activeObject;
  }


  setHover(activeObject: ActiveObject, value: boolean) {
    if (this.lastHoverOject) {
      this.lastHoverOject['isHover'] = false;
    }

    if (activeObject) {
      activeObject['isHover'] = value;
    }
  }

}
