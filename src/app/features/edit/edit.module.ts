import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { ContentComponentsModule } from 'src/app/content-components/content-components.module';
import { InspectorComponent } from './inspector/inspector.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent,
    InspectorComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EditRoutingModule,
    ContentComponentsModule
  ]
})
export class EditModule { }