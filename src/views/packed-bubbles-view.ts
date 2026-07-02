import type p5 from 'p5';

export class PackedBubblesView {
  draw(p: p5) {
    p.noStroke();
    p.fill('#d9d9d9');
    p.circle(p.width / 2, p.height / 2, 180);
    p.fill('#ff00fb');
    p.circle(p.width / 2, p.height / 2, 18);
  }
}
