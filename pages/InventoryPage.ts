import { Page } from "@playwright/test";

export class InventoryPage {
  private page: Page;
  private addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private cartIcon = ".shopping_cart_link";
  private cartBadge = ".shopping_cart_badge";

  constructor(page: Page) {
    this.page = page;
  }

  async addItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  async getCartItemCount(): Promise<number> {
    const cartBadge = this.cartBadge;
    if (await cartBadge.isVisible()) {
      const countText = await cartBadge.textContent();
      return parseInt(countText || "0", 10);
    }
    return 0;
  }
}
