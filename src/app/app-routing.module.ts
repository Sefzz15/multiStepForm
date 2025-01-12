import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './components/steps/step1/step1.component';  // Αντικατέστησε με τα δικά σου components
import { Step2Component } from './components/steps/step2/step2.component';
import { Step3Component } from './components/steps/step3/step3.component';

const routes: Routes = [
  { path: 'step-1', component: Step1Component },
  { path: 'step-2', component: Step2Component },
  { path: 'step-3', component: Step3Component },
  { path: '', redirectTo: '/step-1', pathMatch: 'full' },
  { path: '**', redirectTo: '/step-1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
