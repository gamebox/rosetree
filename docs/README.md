[js-rosetree](README.md) › [Globals](globals.md)

# js-rosetree

# js-rosetree

Set of utilities for creating and manipulating Rosetrees. Inspired by [zwilias/elm-rosetree](https://package.elm-lang.org/packages/zwilias/elm-rosetree/latest)

## What are Rosetrees?

Rosetrees, also known as Multi-way trees, are tree data structures that allows nodes to have any number of children, and then number of children can be different for each node. They are useful for representing a wide variety of data that can not be represented cleanly in other tree data structures.

## Install

```sh
npm i js-rosetree
```

## Usage

```js
import { tree as Tree, zipper as Zipper } from "js-rosetree";

const { tree, singleton } = Tree;

const myTree = tree("a", [
  singleton("b"),
  tree("c", [singleton("d"), singleton("e")]),
]);

const myZipper = Zipper.fromTree(myTree);

console.dir(Zipper.label(Zipper.forward(myZipper))); // "b"

console.dir(Zipper.label(Zipper.findNext(myZipper, (l) => l === "e"))); // "e"

console.dir(
  Zipper.label(Zipper.root(Zipper.findNext(myZipper, (l) => l === "e")))
); // "a"
```
