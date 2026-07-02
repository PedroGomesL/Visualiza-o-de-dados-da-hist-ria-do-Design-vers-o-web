import type p5 from 'p5';

export class FilterPanel {
  draw(p: p5) {
    p.noStroke();
    p.fill('#ffcb00');
    p.rect(0, 0, 255, p.height);
    p.fill('#000000');
    p.textAlign(p.CENTER, p.TOP);
    p.textSize(28);
    p.text('FILTROS', 127, 20);
  }
}
