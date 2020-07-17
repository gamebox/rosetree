[js-rosetree](../README.md) › [Globals](../globals.md) › ["tree/index"](_tree_index_.md)

# Module: "tree/index"

## Index

### Interfaces

* [Tree](../interfaces/_tree_index_.tree.md)

### Type aliases

* [LabelMapper](_tree_index_.md#labelmapper)
* [LabelReducer](_tree_index_.md#labelreducer)

### Variables

* [tree](_tree_index_.md#const-tree)

### Functions

* [Tree](_tree_index_.md#const-tree)
* [appendChild](_tree_index_.md#const-appendchild)
* [children](_tree_index_.md#const-children)
* [count](_tree_index_.md#const-count)
* [flatten](_tree_index_.md#const-flatten)
* [foldl](_tree_index_.md#const-foldl)
* [foldr](_tree_index_.md#const-foldr)
* [innerFoldl](_tree_index_.md#const-innerfoldl)
* [label](_tree_index_.md#const-label)
* [map](_tree_index_.md#const-map)
* [mapChildren](_tree_index_.md#const-mapchildren)
* [mapLabel](_tree_index_.md#const-maplabel)
* [prependChild](_tree_index_.md#const-prependchild)
* [replaceChildren](_tree_index_.md#const-replacechildren)
* [replaceLabel](_tree_index_.md#const-replacelabel)
* [singleton](_tree_index_.md#const-singleton)
* [utilListAppend](_tree_index_.md#const-utillistappend)

## Type aliases

###  LabelMapper

Ƭ **LabelMapper**: *function*

*Defined in [tree/index.ts:10](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L10)*

#### Type declaration:

▸ (`label`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

___

###  LabelReducer

Ƭ **LabelReducer**: *function*

*Defined in [tree/index.ts:11](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L11)*

#### Type declaration:

▸ (`label`: T, `acc`: R): *R*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |
`acc` | R |

## Variables

### `Const` tree

• **tree**: *[Tree](_tree_index_.md#const-tree)* = Tree

*Defined in [tree/index.ts:28](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L28)*

Creates a tree with the supplied children.

## Functions

### `Const` Tree

▸ **Tree**‹**T**›(`label`: T, `children`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [tree/index.ts:13](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L13)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`label` | T | - |
`children` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› | [] |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` appendChild

▸ **appendChild**‹**T**›(`child`: [Tree](../interfaces/_tree_index_.tree.md)‹T›, `t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [tree/index.ts:56](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L56)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`child` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` children

▸ **children**‹**T**›(`__namedParameters`: object): *ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››*

*Defined in [tree/index.ts:33](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L33)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› |

**Returns:** *ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››*

___

### `Const` count

▸ **count**‹**T**›(`t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *number*

*Defined in [tree/index.ts:75](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L75)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *number*

___

### `Const` flatten

▸ **flatten**‹**T**›(`t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *Array‹T›*

*Defined in [tree/index.ts:78](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L78)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *Array‹T›*

___

### `Const` foldl

▸ **foldl**‹**T**, **R**›(`fn`: [LabelReducer](_tree_index_.md#labelreducer)‹T, R›, `acc`: R, `t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *R*

*Defined in [tree/index.ts:66](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L66)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [LabelReducer](_tree_index_.md#labelreducer)‹T, R› |
`acc` | R |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *R*

___

### `Const` foldr

▸ **foldr**‹**T**, **R**›(`fn`: [LabelReducer](_tree_index_.md#labelreducer)‹T, R›, `acc`: R, `t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *R*

*Defined in [tree/index.ts:69](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L69)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [LabelReducer](_tree_index_.md#labelreducer)‹T, R› |
`acc` | R |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *R*

___

### `Const` innerFoldl

▸ **innerFoldl**‹**T**, **R**›(`fn`: [LabelReducer](_tree_index_.md#labelreducer)‹T, R›, `acc`: R, `treeSet`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››, `nextSets`: ReadonlyArray‹ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›››): *R*

*Defined in [tree/index.ts:86](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L86)*

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fn` | [LabelReducer](_tree_index_.md#labelreducer)‹T, R› | - |
`acc` | R | - |
`treeSet` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› | [] |
`nextSets` | ReadonlyArray‹ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››› | [] |

**Returns:** *R*

___

### `Const` label

▸ **label**‹**T**›(`__namedParameters`: object): *T*

*Defined in [tree/index.ts:32](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L32)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`label` | T |

**Returns:** *T*

___

### `Const` map

▸ **map**‹**T**›(`fn`: [LabelMapper](_tree_index_.md#labelmapper)‹T›, `t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [tree/index.ts:58](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L58)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [LabelMapper](_tree_index_.md#labelmapper)‹T› |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` mapChildren

▸ **mapChildren**‹**T**›(`fn`: function, `t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [tree/index.ts:43](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L43)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (`ts`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››): *ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››*

**Parameters:**

Name | Type |
------ | ------ |
`ts` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› |

▪ **t**: *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` mapLabel

▸ **mapLabel**‹**T**›(`fn`: function, `t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [tree/index.ts:38](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L38)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (`t`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |

▪ **t**: *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` prependChild

▸ **prependChild**‹**T**›(`child`: [Tree](../interfaces/_tree_index_.tree.md)‹T›, `t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [tree/index.ts:53](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L53)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`child` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` replaceChildren

▸ **replaceChildren**‹**T**›(`childrens`: Array‹[Tree](../interfaces/_tree_index_.tree.md)‹T››, `t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [tree/index.ts:48](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L48)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`childrens` | Array‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` replaceLabel

▸ **replaceLabel**‹**T**›(`l`: T, `t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [tree/index.ts:40](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L40)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`l` | T |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` singleton

▸ **singleton**‹**T**›(`label`: T): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [tree/index.ts:23](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L23)*

Creates a tree with no children.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` utilListAppend

▸ **utilListAppend**‹**T**›(`item`: T, `acc`: T[]): *T[]*

*Defined in [tree/index.ts:112](https://github.com/gamebox/rosetree/blob/8513442/src/tree/index.ts#L112)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |
`acc` | T[] |

**Returns:** *T[]*
