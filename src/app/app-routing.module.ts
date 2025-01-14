import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/multi-step-form', pathMatch: 'full' },
  { path: 'multi-step-form', component: MultiStepFormComponent },
  { path: '**', redirectTo: '/multi-step-form' }  // Catch-all redirect for unmatched routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
