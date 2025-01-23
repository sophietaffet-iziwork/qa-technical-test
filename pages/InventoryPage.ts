import { Page } from "@playwright/test";

export class InventoryPage {
  private page: Page;
  private addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private cartBadge = '[data-test="shopping-cart-badge"]';

  constructor(page: Page) {
    this.page = page;
  }

  async addItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  async getCartItemCount(): Promise<number> {
    await this.cartBadge.waitFor({ state: "visible" });
    const countText = await this.cartBadge.textContent();
    return parseInt(countText || "0", 10);
  }
}
