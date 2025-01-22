import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Cart Tests", () => {
  test("should be able to add an item to the cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Log in first
    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");

    // Add an item to the cart
    await inventoryPage.addItemToCart();

    // Verify the item count in the cart
    const itemCount = await inventoryPage.getCartItemCount();
    expect(itemCount).toBe(1);
  });
});
