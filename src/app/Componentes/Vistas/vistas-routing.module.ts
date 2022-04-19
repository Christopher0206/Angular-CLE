import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from 'src/app/guard/vigilante.guard';
const routes: Routes = [
  {
    path: '',
    children: [
      
      { path: '**', redirectTo: '/ini/home' },
    ],
    canActivateChild: [VigilanteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistasModule {}
