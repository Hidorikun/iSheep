import { NgModule } from '@angular/core';
import {
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatButtonModule,
   MatListModule,
   MatBadgeModule,
   MatGridListModule,
   MatCardModule,
   MatMenuModule
} from '@angular/material';

@NgModule({
   imports: [
       MatToolbarModule,
       MatIconModule,
       MatSidenavModule,
       MatButtonModule,
       MatListModule,
       MatBadgeModule,
       MatGridListModule,
       MatCardModule,
       MatMenuModule
   ],
   exports: [
       MatToolbarModule,
       MatIconModule,
       MatSidenavModule,
       MatButtonModule,
       MatListModule,
       MatBadgeModule,
       MatGridListModule,
       MatCardModule,
       MatMenuModule
   ],
})
export class MaterialModule { }