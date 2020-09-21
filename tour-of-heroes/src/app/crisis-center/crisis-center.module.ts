import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterDetailsComponent } from './crisis-center-details/crisis-center-details.component';

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisCenterDetailsComponent,
  ],
  imports: [CommonModule, CrisisCenterRoutingModule, FormsModule],
})
export class CrisisCenterModule {}
