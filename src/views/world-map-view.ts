import type p5 from 'p5';

export class WorldMapView {
  drawPlaceholder(p: p5) {
    p.noStroke();
    p.fill('#48bfc6');
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(18);
    p.text('Mapa mundi sera portado a partir do GeoJSON', p.width / 2, p.height / 2);
  }
}
