export const DATA_ROOT = '/data';

export function imagePath(origem: 'brasileiro' | 'internacional', id: string, index = 1, extension = 'jpg') {
  const pasta = origem === 'brasileiro' ? 'Banco de imagens nacional' : 'Banco de imagens internacional';
  const numero = String(index).padStart(2, '0');
  return `${DATA_ROOT}/${pasta}/${id}_${numero}.${extension}`;
}
