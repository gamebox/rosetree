import * as Tree from "../tree";

interface Crumb<T> {
  readonly before: ReadonlyArray<Tree.Tree<T>>;
  readonly label: T;
  readonly after: ReadonlyArray<Tree.Tree<T>>;
}

export interface Zipper<T> {
  readonly focus: Tree.Tree<T>;
  readonly before: ReadonlyArray<Tree.Tree<T>>;
  readonly after: ReadonlyArray<Tree.Tree<T>>;
  readonly crumbs: ReadonlyArray<Crumb<T>>;
}

type LabelMapper<T> = (label: T, level: number, rootIsFocus: boolean) => string;
type ZipperAction<T> = (zipper: Zipper<T>) => Zipper<T> | undefined;

const Crumb = <T>(
  label: T,
  before: ReadonlyArray<Tree.Tree<T>> = [],
  after: ReadonlyArray<Tree.Tree<T>> = []
): Crumb<T> => ({
  before,
  label,
  after,
});

const Zipper = <T>(
  focus: Tree.Tree<T>,
  before: ReadonlyArray<Tree.Tree<T>> = [],
  after: ReadonlyArray<Tree.Tree<T>> = [],
  crumbs: ReadonlyArray<Crumb<T>> = []
): Zipper<T> => ({
  focus,
  before,
  after,
  crumbs,
});

// Initializers

export const fromTree = <T>(t: Tree.Tree<T>): Zipper<T> => Zipper(t);

// Conversions

export const toTree = <T>(zipper: Zipper<T>): Tree.Tree<T> =>
  tree(root(zipper));

export const toForest = <T>(
  zipper: Zipper<T>
): [Tree.Tree<T>, ReadonlyArray<Tree.Tree<T>>] => {
  const { focus, after } = root(zipper);
  return [focus, after];
};

// Access

export const tree = <T>({ focus }: Zipper<T>): Tree.Tree<T> => focus;

export const label = <T>({ focus }: Zipper<T>): T => Tree.label(focus);

export const children = <T>(zipper: Zipper<T>): ReadonlyArray<Tree.Tree<T>> =>
  Tree.children(tree(zipper));

export const depth = <T>({ crumbs }: Zipper<T>): number => crumbs.length;

// Movement

export const firstChild = <T>(zipper: Zipper<T>): Zipper<T> | undefined => {
  const cs = children(zipper);

  if (cs.length === 0) {
    return undefined;
  } else {
    const focus = cs[0];
    return Zipper(focus, [], cs.slice(1), [
      Crumb(label(zipper), zipper.before, zipper.after),
      ...zipper.crumbs,
    ]);
  }
};

export const lastChild = <T>(zipper: Zipper<T>): Zipper<T> | undefined => {
  const cs = Tree.children(zipper.focus).slice().reverse();

  if (cs.length === 0) {
    return undefined;
  } else {
    const focus = cs[0];
    return Zipper(
      focus,
      cs.slice(1),
      [],
      [Crumb(label(zipper), zipper.before, zipper.after), ...zipper.crumbs]
    );
  }
};

export const parent = <T>(zipper: Zipper<T>): Zipper<T> | undefined => {
  if (zipper.crumbs.length === 0) {
    return undefined;
  } else {
    const { focus, before, after, crumbs } = zipper;
    const crumb = crumbs[0];

    return Zipper(
      reconstruct(focus, before, after, crumb.label),
      crumb.before,
      crumb.after,
      crumbs.slice(1)
    );
  }
};

export const forward = <T>(zipper: Zipper<T>): Zipper<T> | undefined =>
  firstChild(zipper) || nextSibling(zipper) || nextSiblingOfAncestor(zipper);

const nextSiblingOfAncestor = <T>(zipper: Zipper<T>): Zipper<T> | undefined => {
  const p = parent(zipper);

  if (!p) {
    return undefined;
  } else {
    const sibling = nextSibling(p);

    if (!sibling) {
      return nextSiblingOfAncestor(p);
    } else {
      return sibling;
    }
  }
};

export const backward = <T>(zipper: Zipper<T>): Zipper<T> | undefined =>
  ((sibling) => sibling && lastDescendant(sibling))(previousSibling(zipper)) ||
  parent(zipper);

export const root = <T>(zipper: Zipper<T>): Zipper<T> => {
  const p = parent(zipper);
  if (!p) {
    return firstSibling(zipper);
  } else {
    return root(p);
  }
};

export const lastDescendant = <T>(zipper: Zipper<T>): Zipper<T> => {
  const descendant = lastChild(zipper);

  if (!descendant) {
    return zipper;
  } else {
    return lastDescendant(descendant);
  }
};

export const nextSibling = <T>(zipper: Zipper<T>): Zipper<T> | undefined => {
  const { after, before, focus, crumbs } = zipper;

  if (after.length === 0) {
    return undefined;
  } else {
    return Zipper(after[0], [focus, ...before], after.slice(1), crumbs);
  }
};

export const previousSibling = <T>(
  zipper: Zipper<T>
): Zipper<T> | undefined => {
  const { after, before, focus, crumbs } = zipper;

  if (before.length === 0) {
    return undefined;
  } else {
    return Zipper(before[0], before.slice(1), [focus, ...after], crumbs);
  }
};

export const siblingsBeforeFocus = <T>({
  before,
}: Zipper<T>): ReadonlyArray<Tree.Tree<T>> => before.slice().reverse();

export const siblingsAfterFocus = <T>({
  after,
}: Zipper<T>): ReadonlyArray<Tree.Tree<T>> => after;

// Modification

export const mapTree = <T>(
  fn: (tree: Tree.Tree<T>) => Tree.Tree<T>,
  zipper: Zipper<T>
) => ({
  ...zipper,
  focus: fn(tree(zipper)),
});

export const replaceTree = <T>(t: Tree.Tree<T>, zipper: Zipper<T>) => ({
  ...zipper,
  focus: t,
});

export const removeTree = <T>(zipper: Zipper<T>): Zipper<T> | undefined => {
  const [crumbLength, beforeLength, afterLength]: [number, number, number] = [
    zipper.crumbs.length,
    zipper.before.length,
    zipper.after.length,
  ];

  if (crumbLength === 0 && beforeLength === 0 && afterLength === 0) {
    return undefined;
  }

  if (beforeLength > 0) {
    return Zipper(
      zipper.before[0],
      zipper.before.slice(1),
      zipper.after,
      zipper.crumbs
    );
  }

  if (crumbLength > 0) {
    const crumb: Crumb<T> = zipper.crumbs[0];
    return Zipper(
      reconstructWithoutFocus(zipper.before, zipper.after, crumb.label),
      crumb.before,
      crumb.after,
      zipper.crumbs.slice(1)
    );
  }

  return Zipper(zipper.after[0], [], zipper.after.slice(1));
};

export const mapLabel = <T>(
  fn: (label: T) => T,
  zipper: Zipper<T>
): Zipper<T> => mapTree((t) => Tree.mapLabel(fn, t), zipper);
// TODO(tony): Fix implementation here
export const replaceLabel = <T>(l: T, zipper: Zipper<T>): Zipper<T> =>
  mapLabel(() => l, zipper);

/** Adds `t` as a sibling before the current tree. */
export const prepend = <T>(t: Tree.Tree<T>, zipper: Zipper<T>): Zipper<T> => ({
  ...zipper,
  before: [t, ...zipper.before],
});

/** Adds `t` as a sibling after the current tree */
export const append = <T>(t: Tree.Tree<T>, zipper: Zipper<T>): Zipper<T> => ({
  ...zipper,
  after: [t, ...zipper.after],
});

// Search

export const findNext = <T>(
  pred: (label: T) => Boolean,
  zipper: Zipper<T>
): Zipper<T> | undefined => find(pred, forward, zipper);

export const findPrevious = <T>(
  pred: (label: T) => Boolean,
  zipper: Zipper<T>
): Zipper<T> | undefined => find(pred, backward, zipper);

export const findFromRoot = <T>(
  pred: (label: T) => Boolean,
  zipper: Zipper<T>
): Zipper<T> | undefined => {
  const r = root(zipper);

  if (pred(label(r))) {
    return r;
  } else {
    return findNext(pred, r);
  }
};

// TODO(gamebox): Finish implementation
interface LabelPredicate<T> {
  (a: T, b: T): boolean;
}
export const isEqual = <T>(
  a: Zipper<T>,
  b: Zipper<T>,
  labelPred: LabelPredicate<T> = (a, b) => a === b
): boolean =>
  labelPred(label<T>(a), label(b)) &&
  a.after.length === b.after.length &&
  a.before.length === b.before.length &&
  a.crumbs.length === b.crumbs.length;

// Debug

const innerDisplay = <T>(
  t: Tree.Tree<T>,
  displayFn: LabelMapper<T>,
  level: number = 0,
  rootIsFocus: boolean = false
): string =>
  [
    displayFn(Tree.label(t), level, rootIsFocus),
    ...t.children.map((child: Tree.Tree<T>) =>
      innerDisplay(child, displayFn, level + 1, false)
    ),
  ].join("\n");

const crumbDisplay = <T>(
  c: Crumb<T> | string,
  remaining: Array<Crumb<T> | string>,
  level: number,
  labelMapper: LabelMapper<T>
): string =>
  typeof c === "string"
    ? c
    : [
        ...c.before.map((tree_) => innerDisplay(tree_, labelMapper, level)),
        labelMapper(c.label, level, false),
        crumbDisplay(remaining[0], remaining.slice(1), level + 1, labelMapper),
        ...c.after.map((tree_) => innerDisplay(tree_, labelMapper, level)),
      ].join("\n");

export const display = <T>(
  z: Zipper<T>,
  labelMapper: LabelMapper<T>
): string => {
  const focusDisplay = innerDisplay(
    tree(z),
    labelMapper,
    z.crumbs.length,
    true
  );
  const beforeDisplay = z.before.map((t) =>
    innerDisplay(t, labelMapper, z.crumbs.length)
  );
  const afterDisplay = z.after.map((t) =>
    innerDisplay(t, labelMapper, z.crumbs.length)
  );

  const currentLevelDisplay = [
    ...beforeDisplay.slice().reverse(),
    focusDisplay,
    ...afterDisplay,
  ].join("\n");
  const allCrumbs = [...z.crumbs.slice().reverse(), currentLevelDisplay];
  return crumbDisplay(allCrumbs[0], allCrumbs.slice(1), 0, labelMapper);
};

// Utilities

export const exec = <T>(
  zipper: Zipper<T>,
  moves: ReadonlyArray<ZipperAction<T>>
): Zipper<T> | undefined => {
  if (moves.length === 0) {
    return zipper;
  } else {
    const [move, ...rest] = moves;
    const newZip = move(zipper);
    if (newZip !== undefined) {
      return exec(newZip, rest);
    } else {
      return undefined;
    }
  }
};

export const curried = {
  mapTree: <T>(fn: (tree: Tree.Tree<T>) => Tree.Tree<T>) => (z: Zipper<T>) =>
    mapTree(fn, z),
  replaceTree: <T>(tree: Tree.Tree<T>) => (z: Zipper<T>) =>
    replaceTree(tree, z),
  mapLabel: <T>(fn: (label: T) => T) => (z: Zipper<T>) => mapLabel(fn, z),
  replaceLabel: <T>(label: T) => (z: Zipper<T>) => replaceLabel(label, z),
  prepend: <T>(tree: Tree.Tree<T>) => (z: Zipper<T>) => prepend(tree, z),
  append: <T>(tree: Tree.Tree<T>) => (z: Zipper<T>) => append(tree, z),
  findNext: <T>(pred: (label: T) => Boolean) => (z: Zipper<T>) =>
    findNext(pred, z),
  findPrevious: <T>(pred: (label: T) => Boolean) => (z: Zipper<T>) =>
    findPrevious(pred, z),
  findFromRoot: <T>(pred: (label: T) => Boolean) => (z: Zipper<T>) =>
    findFromRoot(pred, z),
};

// Internal functions

const find = <T>(
  pred: (label: T) => Boolean,
  move: (z: Zipper<T>) => Zipper<T> | undefined,
  zipper: Zipper<T>
): Zipper<T> | undefined => {
  const next = move(zipper);

  if (next) {
    if (pred(label(next))) {
      return next;
    } else {
      return find(pred, move, next);
    }
  } else {
    return undefined;
  }
};

const firstSibling = <T>(zipper: Zipper<T>): Zipper<T> => {
  const sibling = previousSibling(zipper);

  if (!sibling) {
    return zipper;
  } else {
    return firstSibling(sibling);
  }
};

const reconstruct = <T>(
  focus: Tree.Tree<T>,
  before: ReadonlyArray<Tree.Tree<T>>,
  after: ReadonlyArray<Tree.Tree<T>>,
  label: T
): Tree.Tree<T> =>
  Tree.tree(label, [...before.slice().reverse(), focus, ...after]);

const reconstructWithoutFocus = <T>(
  before: ReadonlyArray<Tree.Tree<T>>,
  after: ReadonlyArray<Tree.Tree<T>>,
  label: T
): Tree.Tree<T> => Tree.tree(label, [...before.slice().reverse(), ...after]);
