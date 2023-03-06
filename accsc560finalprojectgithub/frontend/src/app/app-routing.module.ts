import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditVgorganizerComponent } from './pages/edit-vgorganizer/edit-vgorganizer.component';
import { NewVgorganizerComponent } from './pages/new-vgorganizer/new-vgorganizer.component';
import { VgorganizerViewComponent } from './pages/vgorganizer-view/vgorganizer-view.component';

const routes: Routes = [
  { path: '', component: VgorganizerViewComponent },
  { path: 'new-vgorganizer', component: NewVgorganizerComponent},
  {path: 'edit-vgorganizer', component: EditVgorganizerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
