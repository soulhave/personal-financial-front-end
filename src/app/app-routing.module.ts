import { ExpenseListComponent } from './components/expenses/expense-list/expense-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "expense/list", pathMatch: "full" },
  { path: "expense/list", component: ExpenseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
