import * as Tree from "./index";

import deepFreeze from "deep-freeze";

// TODO(gamebox): Add property based testing

const { tree, singleton } = Tree;

describe("Tree module", () => {
  // Base data.  DO NOT EDIT, consider this section append only.

  const baseSingleton = deepFreeze(singleton("a"));
  const baseTree: Tree.Tree<string> = deepFreeze(
    tree("a", [singleton("b"), tree("c", [singleton("d"), singleton("e")])])
  );

  // Test cases

  describe("flatten", () => {
    it("should correctlty flatten a tree into a list", () => {
      expect(Tree.flatten(baseTree)).toEqual(["a", "b", "c", "d", "e"]);
    });
  });

  describe("singleton", () => {
    it("should work correctly", () => {
      expect(baseSingleton).toEqual(tree("a", []));
    });
  });

  describe("label", () => {
    it("should work correctly", () => {
      expect(Tree.label(baseSingleton)).toEqual("a");
    });
  });

  describe("children", () => {
    it("should work correctly", () => {
      expect(Tree.children(baseSingleton)).toEqual([]);
      expect(Tree.children(baseTree)).toEqual([
        singleton("b"),
        tree("c", [singleton("d"), singleton("e")]),
      ]);
    });
  });

  describe("mapLabel", () => {
    it("should work correctly", () => {
      expect(Tree.mapLabel((l) => l.toUpperCase(), baseSingleton)).toEqual(
        singleton("A")
      );
    });
  });

  describe("replaceLabel", () => {
    it("should work correctly", () => {
      expect(Tree.replaceLabel("A", baseSingleton)).toEqual(singleton("A"));
      expect(Tree.replaceLabel(null, baseSingleton)).toEqual(singleton(null));
    });
  });

  describe("mapChildren", () => {
    it("should work correctly", () => {
      expect(
        Tree.mapChildren(
          (xs) =>
            xs.map((child) => {
              return Tree.mapLabel((l) => l.toUpperCase(), child);
            }),
          baseTree
        )
      ).toEqual(
        tree("a", [singleton("B"), tree("C", [singleton("d"), singleton("e")])])
      );
    });
  });

  describe("replaceChildren", () => {
    it("should work correctly", () => {
      expect(Tree.replaceChildren([], baseTree)).toEqual(singleton("a"));
    });
  });

  describe("prependChild", () => {
    it("should work correctly", () => {
      expect(
        Tree.prependChild(
          singleton("b"),
          Tree.prependChild(singleton("c"), baseSingleton)
        )
      ).toEqual(tree("a", [singleton("b"), singleton("c")]));
    });
  });

  describe("appendChild", () => {
    it("should work correctly", () => {
      expect(
        Tree.appendChild(
          singleton("c"),
          Tree.appendChild(singleton("b"), baseSingleton)
        )
      ).toEqual(tree("a", [singleton("b"), singleton("c")]));
    });
  });

  describe("map", () => {
    it("should work correctly", () => {
      expect(
        Tree.map(
          (x) => x * 2,
          tree(1, [singleton(2), tree(3, [singleton(4)]), singleton(5)])
        )
      ).toEqual(
        tree(2, [singleton(4), tree(6, [singleton(8)]), singleton(10)])
      );
    });
  });

  describe("foldl", () => {
    it("should be able to work correctly", () => {
      expect(
        deepFreeze(
          Tree.foldl(
            (label, acc) => acc + label,
            "",
            tree("Hello ", [
              singleton("world "),
              tree("and ", [
                singleton("you "),
                singleton("and "),
                singleton("you"),
              ]),
              singleton("!"),
            ])
          )
        )
      ).toEqual("Hello world and you and you!");
    });
  });

  describe("count", () => {
    it("should work correctly", () => {
      expect(Tree.count(baseSingleton)).toEqual(1);
      expect(Tree.count(baseTree)).toEqual(5);
    });
  });
});
