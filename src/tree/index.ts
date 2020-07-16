// Tree<T>
// ---
// Abstract data structure containing labels of type `T`

export interface Tree<T> {
  readonly label: T;
  readonly children: ReadonlyArray<Tree<T>>;
}

type LabelMapper<T> = (label: T) => T;
type LabelReducer<T, R> = (label: T, acc: R) => R;

const Tree = <T>(label: T, children: ReadonlyArray<Tree<T>> = []): Tree<T> => ({
  label,
  children,
});

// Initializers

/**
 * Creates a tree with no children.
 */
export const singleton = <T>(label: T) => Tree(label);

/**
 * Creates a tree with the supplied children.
 */
export const tree = Tree;

// Access

export const label = <T>({ label }: Tree<T>): T => label;
export const children = <T>({ children }: Tree<T>): ReadonlyArray<Tree<T>> =>
  children;

// Transform

export const mapLabel = <T>(fn: (t: T) => T, t: Tree<T>): Tree<T> =>
  tree(fn(label(t)), children(t));
export const replaceLabel = <T>(l: T, t: Tree<T>): Tree<T> =>
  tree(l, children(t));

export const mapChildren = <T>(
  fn: (ts: ReadonlyArray<Tree<T>>) => ReadonlyArray<Tree<T>>,
  t: Tree<T>
): Tree<T> => tree(label(t), fn(children(t)));

export const replaceChildren = <T>(
  childrens: Array<Tree<T>>,
  t: Tree<T>
): Tree<T> => tree(label(t), childrens);

export const prependChild = <T>(child: Tree<T>, t: Tree<T>): Tree<T> =>
  tree(label(t), [child, ...children(t)]);

export const appendChild = <T>(child: Tree<T>, t: Tree<T>): Tree<T> =>
  tree(label(t), [...children(t), child]);
export const map = <T>(fn: LabelMapper<T>, t: Tree<T>): Tree<T> =>
  tree(
    fn(label(t)),
    children(t).map((t_) => map(fn, t_))
  );

// Fold

export const foldl = <T, R>(fn: LabelReducer<T, R>, acc: R, t: Tree<T>): R =>
  innerFoldl<T, R>(fn, acc, [t], []);

export const foldr = <T, R>(fn: LabelReducer<T, R>, acc: R, t: Tree<T>): R =>
  foldl<T, Array<T>>(utilListAppend, [], t).reduce(
    (acc_, v) => fn(v, acc_),
    acc
  );

export const count = <T>(t: Tree<T>): number =>
  foldl<T, number>((l: T, acc: number): number => acc + 1, 0, t);

export const flatten = <T>(t: Tree<T>): Array<T> =>
  foldr<T, Array<T>>(utilListAppend, [], t);

// TODO(gamebox): Implement
// export const restructure = () => {};

// Internal functions

const innerFoldl = <T, R>(
  fn: LabelReducer<T, R>,
  acc: R,
  treeSet: ReadonlyArray<Tree<T>> = [],
  nextSets: ReadonlyArray<ReadonlyArray<Tree<T>>> = []
): R => {
  if (treeSet.length === 0) {
    if (nextSets.length === 0) {
      return acc;
    } else {
      return innerFoldl(fn, acc, nextSets[0], nextSets.slice(1));
    }
  }

  const nextTree: Tree<T> = treeSet[0];
  const xs: ReadonlyArray<Tree<T>> = children(nextTree);
  const rest: ReadonlyArray<Tree<T>> = treeSet.slice(1);
  const d: T = label(nextTree);

  if (xs.length === 0) {
    return innerFoldl(fn, fn(d, acc), rest, nextSets);
  }

  return innerFoldl(fn, fn(d, acc), xs, [rest, ...nextSets]);
};

const utilListAppend = <T>(item: T, acc: T[]) => [item, ...acc];
