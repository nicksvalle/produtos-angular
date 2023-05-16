import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : Produtos[] = [];

  constructor (private produtosService: ProdutosService){}
  
  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos() {
    this.produtosService.getProdutos().subscribe(
      {
        next : data => this.produtos = data
      }
    );
  }

}
