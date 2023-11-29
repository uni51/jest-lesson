// テストファイル（例: shoppingList.test.js）

import { ShoppingList } from "./practice"; // ファイルのパスを正しく指定する

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe("addItem", () => {
    it("アイテムをリストに追加する", () => {
      shoppingList.addItem("Apple");
      expect(shoppingList.list).toContain("Apple");
    });
  });

  describe("addItem", () => {
    it("アイテムをリストから削除する", () => {
      shoppingList.addItem("Banana");
      shoppingList.removeItem("Banana");
      expect(shoppingList.list).not.toContain("Banana");
    });

    it("リストにアイテムが存在しない場合はエラー", () => {
      expect(() => shoppingList.removeItem("Banana")).toThrow(
        "アイテム: Banana は存在しません"
      );
    });
  });
});
