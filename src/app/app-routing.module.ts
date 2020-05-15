import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokescreenComponent } from './content/pokescreen/pokescreen.component';


const routes: Routes = [{
  /* path: 'pokescreen',
  component: PokescreenComponent */
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
