import type p5 from 'p5';
import type { AppDatabase } from './types';

const DATA_ROOT = '/data';

export function loadDatabase(p: p5): AppDatabase {
  const loader = p as any;
  return {
    produtosBrasileiros: loader.loadTable(`${DATA_ROOT}/Produtos brasileiros.tsv`, 'tsv', 'header'),
    produtosInternacionais: loader.loadTable(`${DATA_ROOT}/Produtos internacionais.tsv`, 'tsv', 'header'),
    escolas: loader.loadTable(`${DATA_ROOT}/Escolas.tsv`, 'tsv', 'header'),
    eventos: loader.loadTable(`${DATA_ROOT}/Eventos_contexto.tsv`, 'tsv', 'header'),
    mapaMundi: loader.loadJSON(`${DATA_ROOT}/custom.geo.json`)
  };
}
