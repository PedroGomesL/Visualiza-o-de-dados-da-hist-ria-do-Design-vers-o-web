import type p5 from 'p5';
import type { AppDatabase } from './types';

const DATA_ROOT = '/data';

export function loadDatabase(p: p5): AppDatabase {
  return {
    produtosBrasileiros: p.loadTable(`${DATA_ROOT}/Produtos brasileiros.tsv`, 'tsv', 'header') as p5.Table,
    produtosInternacionais: p.loadTable(`${DATA_ROOT}/Produtos internacionais.tsv`, 'tsv', 'header') as p5.Table,
    escolas: p.loadTable(`${DATA_ROOT}/Escolas.tsv`, 'tsv', 'header') as p5.Table,
    eventos: p.loadTable(`${DATA_ROOT}/Eventos_contexto.tsv`, 'tsv', 'header') as p5.Table,
    mapaMundi: p.loadJSON(`${DATA_ROOT}/custom.geo.json`)
  };
}
