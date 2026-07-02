export type ProdutoOrigem = 'brasileiro' | 'internacional';

export interface AppDatabase {
  produtosBrasileiros: any;
  produtosInternacionais: any;
  escolas: any;
  eventos: any;
  mapaMundi: unknown;
}

export interface ProdutoWeb {
  id: string;
  nome: string;
  origem: ProdutoOrigem;
  linha: any;
}
