import type p5 from 'p5';

export class TimelineView {
  draw(p: p5) {
    const y = p.height - 74;
    p.noStroke();
    p.fill('#222222');
    p.rect(255, y + 28, p.width - 660, 42);
    p.fill('#ffcb00');
    p.rect(270, y + 28, p.width - 690, 42);
  }
}
