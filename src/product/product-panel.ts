import type p5 from 'p5';

export class ProductPanel {
  drawPlaceholder(p: p5) {
    const w = 405;
    const x = p.width - w;
    p.noStroke();
    p.fill('#f5f2ea');
    p.rect(x, 0, w, p.height);
    p.fill('#000000');
    p.textAlign(p.LEFT, p.TOP);
    p.textSize(16);
    p.text('Selecione um produto', x + 16, 360);
  }
}
