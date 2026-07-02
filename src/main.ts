import p5 from 'p5';
import { sketch } from './sketch';
import './styles.css';

new p5(sketch, document.getElementById('app') ?? undefined);
