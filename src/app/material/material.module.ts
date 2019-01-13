import { ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatGridTile, MatGridListModule, MatGridTileHeaderCssMatStyler, MatSlideToggle, MatSlideToggleModule, MatSliderModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ]

})
export class MaterialModule { }
