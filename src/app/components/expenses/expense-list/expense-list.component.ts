import { ExpenseList } from '../expense.model';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const expenseList: ExpenseList[] = [
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Fixed', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Fixed', date: '27/07/2015' },
]

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {
  displayedColumns = ['type', 'total', 'date', 'action']
  dataSource = new MatTableDataSource<ExpenseList>(expenseList);

  constructor() { }


}
