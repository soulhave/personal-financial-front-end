import { Income } from './../income.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

const incomes: Income[] = [
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
  { total: 1400, type: 'Recorrente', date: '27/07/2015' },
]

@Component({
  selector: 'app-income-read',
  templateUrl: './income-read.component.html',
  styleUrls: ['./income-read.component.scss']
})
export class IncomeReadComponent implements AfterViewInit {
  displayedColumns = ['total', 'type', 'date', 'action']
  dataSource = new MatTableDataSource<Income>(incomes);
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

}
