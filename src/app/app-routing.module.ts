import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LootGeneratorComponent } from './loot-generator/loot-generator.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'loot-generator',
    component: LootGeneratorComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
