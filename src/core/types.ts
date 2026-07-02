import type p5 from 'p5';

export type ProdutoOrigem = 'brasileiro' | 'internacional';

export interface AppDatabase {
  produtosBrasileiros: p5.Table;
  produtosInternacionais: p5.Table;
  escolas: p5.Table;
  eventos: p5.Table;
  mapaMundi: unknown;
}

export interface ProdutoWeb {
  id: string;
  nome: string;
  origem: ProdutoOrigem;
  linha: p5.TableRow;
}
