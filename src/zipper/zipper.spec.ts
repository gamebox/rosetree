import * as Zipper from "./index";
import * as Tree from "../tree/index";
import deepFreeze from "deep-freeze";

describe("Zipper module", () => {
  // Base data.  DO NOT EDIT, considering this section append only.

  const baseTree: Tree.Tree<string> = deepFreeze(
    Tree.tree("a", [Tree.singleton("b"), Tree.singleton("c")])
  );

  const baseZipper: Zipper.Zipper<string> = deepFreeze(
    Zipper.fromTree(baseTree)
  );

  const bigTree: Tree.Tree<number> = deepFreeze(
    Tree.tree(1, [
      Tree.tree(2, [
        Tree.tree(3, [
          Tree.tree(4, [
            Tree.singleton(5),
            Tree.singleton(6),
            Tree.singleton(7),
          ]),
          Tree.tree(8, [Tree.singleton(9)]),
        ]),
      ]),
      Tree.singleton(10),
    ])
  );

  const bigZipper: Zipper.Zipper<number> = deepFreeze(Zipper.fromTree(bigTree));

  // Test cases

  describe("toTree", () => {
    it("should work correctly", () => {
      expect(Zipper.toTree(baseZipper)).toEqual(baseTree);
      expect(Zipper.toTree(Zipper.lastDescendant(baseZipper))).toEqual(
        baseTree
      );
    });
  });

  describe("toForest", () => {
    it("should work correctly", () => {
      expect(Zipper.toForest(baseZipper)).toEqual([baseTree, []]);
    });
  });

  describe("tree", () => {
    it("should work correctly", () => {
      expect(Zipper.tree(baseZipper)).toEqual(baseTree);
    });
  });

  describe("label", () => {
    it("should work correctly", () => {
      expect(Zipper.label(baseZipper)).toEqual("a");
    });
  });

  describe("children", () => {
    it("should work correctly", () => {
      expect(Zipper.children(baseZipper)).toEqual([
        Tree.singleton("b"),
        Tree.singleton("c"),
      ]);
    });
  });

  describe("firstChild", () => {
    it("should work correctly", () => {
      expect(Zipper.label(Zipper.firstChild(baseZipper)!)).toEqual("b");
    });
  });

  describe("lastChild", () => {
    it("should work correctly", () => {
      expect(Zipper.label(Zipper.lastChild(baseZipper)!)).toEqual("c");
    });
  });

  describe("parent", () => {
    it("should work correctly", () => {
      expect(Zipper.parent(Zipper.fromTree(Tree.singleton("a")))).toEqual(
        undefined
      );

      expect(
        Zipper.label(Zipper.parent(Zipper.firstChild(baseZipper)!)!)
      ).toEqual(Zipper.label(baseZipper));
    });
  });

  describe("forward", () => {
    it("should work correctly", () => {
      const moved = Zipper.forward(baseZipper)!;
      const numChildren = Tree.children(Zipper.tree(moved)).length;

      expect(Zipper.label(moved)).toEqual("b");
      expect(numChildren).toEqual(0);

      const moved2 = Zipper.forward(moved)!;

      expect(Zipper.label(moved2)).toEqual("c");

      const moved3 = Zipper.forward(moved2);

      expect(moved3).toEqual(undefined);

      // Big tree test
      let prevLabel = 0;
      let curr = bigZipper;

      do {
        const next = prevLabel + 1;
        expect(Zipper.label(curr)).toEqual(next);
        prevLabel = next;
        curr = Zipper.forward(curr)!;
      } while (curr);
    });
  });

  describe("backward", () => {
    it("should work correctly", () => {
      const forward1 = Zipper.forward(baseZipper)!;
      const forward2 = Zipper.forward(forward1)!;
      const backward = Zipper.backward(forward2)!;
      const backward2 = Zipper.backward(backward)!;
      const backward3 = Zipper.backward(backward2);

      expect(backward).toEqual(forward1);
      expect(backward2).toEqual(baseZipper);
      expect(backward3).toEqual(undefined);

      // Big tree test

      const begin = Zipper.lastDescendant(bigZipper)!;
      let prevLabel = Zipper.label(begin) + 1;
      let curr = begin;

      do {
        const next = prevLabel - 1;
        expect(Zipper.label(curr)).toEqual(next);
        prevLabel = next;
        curr = Zipper.backward(curr)!;
      } while (curr);
    });
  });

  describe("root", () => {
    it("should work correctly", () => {
      const forward1 = Zipper.forward(baseZipper)!;
      const forward2 = Zipper.forward(forward1)!;
      expect(Zipper.root(forward1)).toEqual(baseZipper);
      expect(Zipper.root(forward2)).toEqual(baseZipper);
      expect(Zipper.root(baseZipper)).toEqual(baseZipper);
    });
  });

  describe("lastDescendant", () => {
    it("should work correctly", () => {
      const forward1 = Zipper.forward(baseZipper)!;
      const forward2 = Zipper.forward(forward1);

      expect(Zipper.lastDescendant(baseZipper)).toEqual(forward2);

      // TODO(gamebox): Write test case with larger tree
    });
  });

  describe("nextSibling", () => {
    it("should work correctly", () => {
      const forward1 = Zipper.forward(baseZipper)!;
      const forward2 = Zipper.forward(forward1);
      expect(Zipper.nextSibling(forward1)).toEqual(forward2);
    });
  });

  describe("previousSibling", () => {
    it("should work correctly", () => {
      const forward1 = Zipper.forward(baseZipper)!;
      const forward2 = Zipper.forward(forward1)!;
      expect(Zipper.previousSibling(forward2)).toEqual(forward1);
    });
  });

  describe("siblingsBeforeFocus", () => {
    it("should work correctly", () => {
      const forward1 = Zipper.forward(baseZipper)!;
      const forward2 = Zipper.forward(forward1)!;
      expect(Zipper.siblingsBeforeFocus(forward1)).toEqual([]);
      expect(Zipper.siblingsBeforeFocus(forward2)).toEqual([
        Tree.singleton("b"),
      ]);
    });
  });

  describe("siblingsAfterFocus", () => {
    it("should work correctly", () => {
      const forward1 = Zipper.forward(baseZipper)!;
      const forward2 = Zipper.forward(forward1)!;
      expect(Zipper.siblingsAfterFocus(forward1)).toEqual([
        Tree.singleton("c"),
      ]);
      expect(Zipper.siblingsAfterFocus(forward2)).toEqual([]);
    });
  });

  describe("mapTree", () => {
    it("should work correctly", () => {
      expect(
        Zipper.label(
          Zipper.mapTree<string>(
            (t: Tree.Tree<string>) => Tree.mapLabel((l) => l.toUpperCase(), t),
            baseZipper
          )
        )
      ).toEqual("A");
    });
  });

  describe("replaceTree", () => {
    it("should work correctly", () => {
      const replaced = Zipper.replaceTree(
        Tree.tree("C", [Tree.singleton("d")]),
        Zipper.lastDescendant(baseZipper)
      );

      expect(Zipper.children(replaced)).toEqual([Tree.singleton("d")]);
      expect(Zipper.label(replaced)).toEqual("C");
    });
  });

  describe("removeTree", () => {
    it("should work correctly", () => {
      const removed = Zipper.removeTree(Zipper.lastDescendant(baseZipper))!;
      const otherRemoved = Zipper.removeTree(Zipper.firstChild(baseZipper)!)!;

      const removedRoot = Zipper.removeTree(baseZipper)!;

      expect(Zipper.children(Zipper.root(removed)!)).toEqual([
        Tree.singleton("b"),
      ]);
      expect(Zipper.children(Zipper.root(otherRemoved)!)).toEqual([
        Tree.singleton("c"),
      ]);

      expect(Zipper.label(removed)).toEqual("b");
      expect(Zipper.label(otherRemoved)).toEqual("a");

      expect(removedRoot).toEqual(undefined);
    });
  });

  describe("mapLabel", () => {
    it("should work correctly", () => {
      expect(
        Zipper.label(Zipper.mapLabel((l) => l.toUpperCase(), baseZipper))
      ).toEqual("A");
    });
  });

  describe("replaceLabel", () => {
    it("should work correctly", () => {
      expect(Zipper.label(Zipper.replaceLabel("A", baseZipper))).toEqual("A");
    });
  });

  describe("append", () => {
    it("should work correctly", () => {
      const appended = Zipper.append(
        Tree.singleton("appended"),
        Zipper.lastChild(baseZipper)!
      );

      expect(Zipper.siblingsAfterFocus(appended)).toEqual([
        Tree.singleton("appended"),
      ]);
    });
  });

  describe("prepend", () => {
    it("should work correctly", () => {
      const prepended = Zipper.prepend(
        Tree.singleton("prepended"),
        Zipper.firstChild(baseZipper)!
      );

      expect(Zipper.siblingsBeforeFocus(prepended)).toEqual([
        Tree.singleton("prepended"),
      ]);
    });
  });

  describe("findNext", () => {
    it("should work correctly", () => {
      const isEven = (l: number): boolean => l % 2 === 0;
      const found = Zipper.findNext(
        isEven,
        Zipper.firstChild(Zipper.firstChild(bigZipper)!)!
      )!;

      expect(Zipper.label(found)).toEqual(4);

      const found2 = Zipper.findNext(isEven, found)!;

      expect(Zipper.label(found2)).toEqual(6);

      const found3 = Zipper.findNext(isEven, found2)!;

      expect(Zipper.label(found3)).toEqual(8);

      const found4 = Zipper.findNext(isEven, found3)!;

      expect(Zipper.label(found4)).toEqual(10);

      const notFound = Zipper.findNext(isEven, found4)!;

      expect(notFound).toEqual(undefined);
    });
  });

  describe("findPrevious", () => {
    it("should work correctly", () => {
      const isEven = (l: number) => l % 2 === 0;
      const found = Zipper.findPrevious(
        isEven,
        Zipper.lastDescendant(bigZipper)
      )!;

      expect(Zipper.label(found)).toEqual(8);

      const found2 = Zipper.findPrevious(isEven, found)!;

      expect(Zipper.label(found2)).toEqual(6);

      const found3 = Zipper.findPrevious(isEven, found2)!;

      expect(Zipper.label(found3)).toEqual(4);

      const found4 = Zipper.findPrevious(isEven, found3)!;

      expect(Zipper.label(found4)).toEqual(2);

      const notFound = Zipper.findPrevious(isEven, found4);

      expect(notFound).toEqual(undefined);
    });
  });

  describe("findFromRoot", () => {
    it("should work correctly", () => {
      expect(
        Zipper.label(
          Zipper.findFromRoot((l) => l === 6, Zipper.lastDescendant(bigZipper))!
        )
      ).toEqual(6);
    });
  });

  describe("exec", () => {
    it("should work correctly when every move returns a zipper", () => {
      expect(
        Zipper.label(Zipper.exec(baseZipper, [Zipper.forward, Zipper.forward])!)
      ).toEqual("c");
    });

    it("should work correctly when a move returns undefined", () => {
      expect(
        Zipper.exec(baseZipper, [
          Zipper.forward,
          Zipper.forward,
          Zipper.forward,
        ])
      ).toBeUndefined();
    });
  });
});
