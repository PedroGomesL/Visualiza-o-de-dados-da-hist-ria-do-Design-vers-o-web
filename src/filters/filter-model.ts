import type { ProdutoWeb } from '../core/types';

export class FilterModel {
  private readonly selectedTags = new Set<string>();

  toggleTag(tag: string) {
    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
    } else {
      this.selectedTags.add(tag);
    }
  }

  clear() {
    this.selectedTags.clear();
  }

  visibleProducts(products: ProdutoWeb[]) {
    if (this.selectedTags.size === 0) {
      return products;
    }
    return products;
  }
}
