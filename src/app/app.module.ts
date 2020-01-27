import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputSearchFormComponent } from './input-search-form/input-search-form.component';
import { DisplayJobCardComponent } from './display-job-card/display-job-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: InputSearchFormComponent
  },
  {
    path: 'plating/:id',
    component: DisplayJobCardComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    InputSearchFormComponent,
    DisplayJobCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
