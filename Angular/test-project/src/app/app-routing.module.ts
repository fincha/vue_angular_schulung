import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

const routes: Routes = [
  { path: 'hello1', component: HelloWorldComponent },
  // { path: '/hello2', component: HelloWorld2 },
  // { path: '/hello3', component: HelloWorld3 },
  // { path: '/hello4', component: HelloWorld4 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
