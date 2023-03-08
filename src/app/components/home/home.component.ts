import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nomeTutor', 'cpf', 'nomePet', 'especiePet', 'servico', 'data', 'valor'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  id: number;
  nomeTutor: string;
  cpf: string;
  nomePet: string;
  especiePet: string;
  servico: string;
  data: string;
  valor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 0, nomeTutor: 'Caroline Maria Fernandes Peixoto', cpf: '484.982.345-90', nomePet: 'Rhaeryra', especiePet: 'Gato', servico: 'Vacina V5', data: '15/12/2022', valor: '150.00'},
  
];
