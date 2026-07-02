import type p5 from 'p5';
import { loadDatabase } from './core/database';
import type { AppDatabase } from './core/types';

export const sketch = (p: p5) => {
  let database: AppDatabase | null = null;

  (p as any).preload = () => {
    database = loadDatabase(p);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.pixelDensity(1);
  };

  p.draw = () => {
    p.background(18);
    p.noStroke();
    p.fill(255);
    p.textFont('sans-serif');
    p.textSize(16);
    p.textAlign(p.LEFT, p.TOP);
    p.text('Sistema de Visualizacao Web', 24, 24);

    const totalProdutos =
      (database?.produtosBrasileiros.getRowCount() ?? 0) +
      (database?.produtosInternacionais.getRowCount() ?? 0);
    p.text(`Produtos carregados: ${totalProdutos}`, 24, 52);
    p.text('Base pronta para migracao das visualizacoes Processing -> p5.js', 24, 80);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};
