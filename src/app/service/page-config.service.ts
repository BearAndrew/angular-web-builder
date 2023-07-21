import { Injectable } from '@angular/core';
import { ActiveConfig, PageConfig } from '../interface/web-config.interface';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root'
})
export class PageConfigService {

  private pageConfigSubject: ReplaySubject<PageConfig> = new ReplaySubject<PageConfig>();
  private activeConfigSubject: ReplaySubject<ActiveConfig> = new ReplaySubject<ActiveConfig>();

  private pageConfig: PageConfig = {
    name: 'home',
    title: '首頁',
    description: '描述',
    // 畫面
    layout_rows: [
      {
        config: {
          row_type: 'grid',
        },
        layout_cols:[
          {
            config: {
              col_type: 'flex',
            },
            contents: [
              {
                content_type: 'text',
                config: {
                  tag: 'h1',
                  fontsize: '40px',
                  fontweight: '700',
                  fontfamily: '',
                  color: '#000000',
                  opacity: '1',
                  textalign: 'center',
                  padding: '16px',
                  margin: '16px',
                  backgroundcolor: '#ffffff',
                  content: '標題標題標題'
                }
              }
            ]
          }
        ]
      },
      {
        config: {
          row_type: 'grid',
        },
        layout_cols:[
          {
            config: {
              col_type: 'flex',
            },
            contents: [
              {
                content_type: 'text',
                config: {
                  tag: 'h2',
                  fontsize: '32px',
                  fontweight: '500',
                  fontfamily: '',
                  color: '#000000',
                  opacity: '1',
                  textalign: 'left',
                  padding: '16px',
                  margin: '16px',
                  backgroundcolor: '#ffdddd',
                  content: '副標題副標題'
                }
              },
              {
                content_type: 'text',
                config: {
                  tag: 'p',
                  fontsize: '16px',
                  fontweight: '400',
                  fontfamily: '',
                  color: '#888888',
                  opacity: '1',
                  textalign: 'center',
                  padding: '8px',
                  margin: '0px',
                  backgroundcolor: '#ffffff',
                  content: '內文內文內文'
                }
              }
            ]
          },
          {
            config: {
              col_type: 'flex',
            },
            contents: [
              {
                content_type: 'text',
                config: {
                  tag: 'h2',
                  fontsize: '32px',
                  fontweight: '500',
                  fontfamily: '',
                  color: '#000000',
                  opacity: '1',
                  textalign: 'right',
                  padding: '16px',
                  margin: '16px',
                  backgroundcolor: '#ddffdd',
                  content: '副標題副標題'
                }
              }
            ]
          }
        ]
      },
    ]
  }

  private activeConfig: ActiveConfig;

  constructor() {
    this.setPageConfig(this.pageConfig);
  }

  getPageConfig(): Observable<PageConfig> {
    return this.pageConfigSubject.asObservable();
  }

  setPageConfig(pageConfig: PageConfig) {
    this.pageConfigSubject.next(pageConfig);
  }

  getActiveConfig(): Observable<ActiveConfig> {
    return this.activeConfigSubject.asObservable();
  }

  setActiveConfig(activeConfig: ActiveConfig) {
    this.activeConfigSubject.next(activeConfig);
  }

}
