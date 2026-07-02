import type p5 from 'p5';

export class CircularView {
  draw(p: p5) {
    p.noFill();
    p.stroke('#ffffff');
    p.strokeWeight(8);
    p.circle(p.width / 2, p.height / 2, Math.min(p.width, p.height) * 0.45);
  }
}
