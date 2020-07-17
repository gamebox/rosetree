[js-rosetree](../README.md) › [Globals](../globals.md) › ["zipper/index"](_zipper_index_.md)

# Module: "zipper/index"

## Index

### Interfaces

* [Crumb](../interfaces/_zipper_index_.crumb.md)
* [LabelPredicate](../interfaces/_zipper_index_.labelpredicate.md)
* [Zipper](../interfaces/_zipper_index_.zipper.md)

### Type aliases

* [LabelMapper](_zipper_index_.md#labelmapper)
* [ZipperAction](_zipper_index_.md#zipperaction)

### Functions

* [Crumb](_zipper_index_.md#const-crumb)
* [Zipper](_zipper_index_.md#const-zipper)
* [append](_zipper_index_.md#const-append)
* [backward](_zipper_index_.md#const-backward)
* [children](_zipper_index_.md#const-children)
* [crumbDisplay](_zipper_index_.md#const-crumbdisplay)
* [depth](_zipper_index_.md#const-depth)
* [display](_zipper_index_.md#const-display)
* [exec](_zipper_index_.md#const-exec)
* [find](_zipper_index_.md#const-find)
* [findFromRoot](_zipper_index_.md#const-findfromroot)
* [findNext](_zipper_index_.md#const-findnext)
* [findPrevious](_zipper_index_.md#const-findprevious)
* [firstChild](_zipper_index_.md#const-firstchild)
* [firstSibling](_zipper_index_.md#const-firstsibling)
* [forward](_zipper_index_.md#const-forward)
* [fromTree](_zipper_index_.md#const-fromtree)
* [innerDisplay](_zipper_index_.md#const-innerdisplay)
* [isEqual](_zipper_index_.md#const-isequal)
* [label](_zipper_index_.md#const-label)
* [lastChild](_zipper_index_.md#const-lastchild)
* [lastDescendant](_zipper_index_.md#const-lastdescendant)
* [mapLabel](_zipper_index_.md#const-maplabel)
* [mapTree](_zipper_index_.md#const-maptree)
* [nextSibling](_zipper_index_.md#const-nextsibling)
* [nextSiblingOfAncestor](_zipper_index_.md#const-nextsiblingofancestor)
* [parent](_zipper_index_.md#const-parent)
* [prepend](_zipper_index_.md#const-prepend)
* [previousSibling](_zipper_index_.md#const-previoussibling)
* [reconstruct](_zipper_index_.md#const-reconstruct)
* [reconstructWithoutFocus](_zipper_index_.md#const-reconstructwithoutfocus)
* [removeTree](_zipper_index_.md#const-removetree)
* [replaceLabel](_zipper_index_.md#const-replacelabel)
* [replaceTree](_zipper_index_.md#const-replacetree)
* [root](_zipper_index_.md#const-root)
* [siblingsAfterFocus](_zipper_index_.md#const-siblingsafterfocus)
* [siblingsBeforeFocus](_zipper_index_.md#const-siblingsbeforefocus)
* [toForest](_zipper_index_.md#const-toforest)
* [toTree](_zipper_index_.md#const-totree)
* [tree](_zipper_index_.md#const-tree)

### Object literals

* [curried](_zipper_index_.md#const-curried)

## Type aliases

###  LabelMapper

Ƭ **LabelMapper**: *function*

*Defined in [zipper/index.ts:16](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L16)*

#### Type declaration:

▸ (`label`: T, `level`: number, `rootIsFocus`: boolean): *string*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |
`level` | number |
`rootIsFocus` | boolean |

___

###  ZipperAction

Ƭ **ZipperAction**: *function*

*Defined in [zipper/index.ts:17](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L17)*

#### Type declaration:

▸ (`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

## Functions

### `Const` Crumb

▸ **Crumb**‹**T**›(`label`: T, `before`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››, `after`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››): *[Crumb](../interfaces/_zipper_index_.crumb.md)‹T›*

*Defined in [zipper/index.ts:19](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L19)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`label` | T | - |
`before` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› | [] |
`after` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› | [] |

**Returns:** *[Crumb](../interfaces/_zipper_index_.crumb.md)‹T›*

___

### `Const` Zipper

▸ **Zipper**‹**T**›(`focus`: [Tree](../interfaces/_tree_index_.tree.md)‹T›, `before`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››, `after`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››, `crumbs`: ReadonlyArray‹[Crumb](../interfaces/_zipper_index_.crumb.md)‹T››): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

*Defined in [zipper/index.ts:29](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L29)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`focus` | [Tree](../interfaces/_tree_index_.tree.md)‹T› | - |
`before` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› | [] |
`after` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› | [] |
`crumbs` | ReadonlyArray‹[Crumb](../interfaces/_zipper_index_.crumb.md)‹T›› | [] |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

___

### `Const` append

▸ **append**‹**T**›(`t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

*Defined in [zipper/index.ts:251](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L251)*

Adds `t` as a sibling after the current tree

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

___

### `Const` backward

▸ **backward**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:135](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L135)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` children

▸ **children**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››*

*Defined in [zipper/index.ts:63](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L63)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››*

___

### `Const` crumbDisplay

▸ **crumbDisplay**‹**T**›(`c`: [Crumb](../interfaces/_zipper_index_.crumb.md)‹T› | string, `remaining`: Array‹[Crumb](../interfaces/_zipper_index_.crumb.md)‹T› | string›, `level`: number, `labelMapper`: [LabelMapper](_zipper_index_.md#labelmapper)‹T›): *string*

*Defined in [zipper/index.ts:310](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L310)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Crumb](../interfaces/_zipper_index_.crumb.md)‹T› &#124; string |
`remaining` | Array‹[Crumb](../interfaces/_zipper_index_.crumb.md)‹T› &#124; string› |
`level` | number |
`labelMapper` | [LabelMapper](_zipper_index_.md#labelmapper)‹T› |

**Returns:** *string*

___

### `Const` depth

▸ **depth**‹**T**›(`__namedParameters`: object): *number*

*Defined in [zipper/index.ts:66](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L66)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`crumbs` | ReadonlyArray‹[Crumb](../interfaces/_zipper_index_.crumb.md)‹T›› |

**Returns:** *number*

___

### `Const` display

▸ **display**‹**T**›(`z`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›, `labelMapper`: [LabelMapper](_zipper_index_.md#labelmapper)‹T›): *string*

*Defined in [zipper/index.ts:325](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L325)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`z` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |
`labelMapper` | [LabelMapper](_zipper_index_.md#labelmapper)‹T› |

**Returns:** *string*

___

### `Const` exec

▸ **exec**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›, `moves`: ReadonlyArray‹[ZipperAction](_zipper_index_.md#zipperaction)‹T››): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:353](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L353)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |
`moves` | ReadonlyArray‹[ZipperAction](_zipper_index_.md#zipperaction)‹T›› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` find

▸ **find**‹**T**›(`pred`: function, `move`: function, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:389](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L389)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **pred**: *function*

▸ (`label`: T): *Boolean*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

▪ **move**: *function*

▸ (`z`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`z` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

▪ **zipper**: *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` findFromRoot

▸ **findFromRoot**‹**T**›(`pred`: function, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:268](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L268)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **pred**: *function*

▸ (`label`: T): *Boolean*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

▪ **zipper**: *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` findNext

▸ **findNext**‹**T**›(`pred`: function, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:258](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L258)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **pred**: *function*

▸ (`label`: T): *Boolean*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

▪ **zipper**: *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` findPrevious

▸ **findPrevious**‹**T**›(`pred`: function, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:263](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L263)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **pred**: *function*

▸ (`label`: T): *Boolean*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

▪ **zipper**: *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` firstChild

▸ **firstChild**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:70](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L70)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` firstSibling

▸ **firstSibling**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

*Defined in [zipper/index.ts:407](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L407)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

___

### `Const` forward

▸ **forward**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:116](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L116)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` fromTree

▸ **fromTree**‹**T**›(`t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

*Defined in [zipper/index.ts:43](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L43)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

___

### `Const` innerDisplay

▸ **innerDisplay**‹**T**›(`t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›, `displayFn`: [LabelMapper](_zipper_index_.md#labelmapper)‹T›, `level`: number, `rootIsFocus`: boolean): *string*

*Defined in [zipper/index.ts:297](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L297)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› | - |
`displayFn` | [LabelMapper](_zipper_index_.md#labelmapper)‹T› | - |
`level` | number | 0 |
`rootIsFocus` | boolean | false |

**Returns:** *string*

___

### `Const` isEqual

▸ **isEqual**‹**T**›(`a`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›, `b`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›, `labelPred`: [LabelPredicate](../interfaces/_zipper_index_.labelpredicate.md)‹T›): *boolean*

*Defined in [zipper/index.ts:285](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L285)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`a` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | - |
`b` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | - |
`labelPred` | [LabelPredicate](../interfaces/_zipper_index_.labelpredicate.md)‹T› | (a, b) => a === b |

**Returns:** *boolean*

___

### `Const` label

▸ **label**‹**T**›(`__namedParameters`: object): *T*

*Defined in [zipper/index.ts:61](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L61)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`focus` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *T*

___

### `Const` lastChild

▸ **lastChild**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:84](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L84)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` lastDescendant

▸ **lastDescendant**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

*Defined in [zipper/index.ts:148](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L148)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

___

### `Const` mapLabel

▸ **mapLabel**‹**T**›(`fn`: function, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

*Defined in [zipper/index.ts:236](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L236)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (`label`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

▪ **zipper**: *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

___

### `Const` mapTree

▸ **mapTree**‹**T**›(`fn`: function, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *object*

*Defined in [zipper/index.ts:190](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L190)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (`tree`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

▪ **zipper**: *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

**Returns:** *object*

* **focus**: *[Tree](../interfaces/_tree_index_.tree.md)‹T›* = fn(tree(zipper))

___

### `Const` nextSibling

▸ **nextSibling**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:158](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L158)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` nextSiblingOfAncestor

▸ **nextSiblingOfAncestor**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:119](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L119)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` parent

▸ **parent**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:100](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L100)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` prepend

▸ **prepend**‹**T**›(`t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

*Defined in [zipper/index.ts:245](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L245)*

Adds `t` as a sibling before the current tree.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

___

### `Const` previousSibling

▸ **previousSibling**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:168](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L168)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` reconstruct

▸ **reconstruct**‹**T**›(`focus`: [Tree](../interfaces/_tree_index_.tree.md)‹T›, `before`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››, `after`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››, `label`: T): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [zipper/index.ts:417](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L417)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`focus` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |
`before` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› |
`after` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› |
`label` | T |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` reconstructWithoutFocus

▸ **reconstructWithoutFocus**‹**T**›(`before`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››, `after`: ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››, `label`: T): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [zipper/index.ts:425](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L425)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`before` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› |
`after` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› |
`label` | T |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` removeTree

▸ **removeTree**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

*Defined in [zipper/index.ts:203](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L203)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T› | undefined*

___

### `Const` replaceLabel

▸ **replaceLabel**‹**T**›(`l`: T, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

*Defined in [zipper/index.ts:241](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L241)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`l` | T |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

___

### `Const` replaceTree

▸ **replaceTree**‹**T**›(`t`: [Tree](../interfaces/_tree_index_.tree.md)‹T›, `zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *object*

*Defined in [zipper/index.ts:198](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L198)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *object*

* **focus**: *[Tree](../interfaces/_tree_index_.tree.md)‹T›* = t

___

### `Const` root

▸ **root**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

*Defined in [zipper/index.ts:139](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L139)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Zipper](../interfaces/_zipper_index_.zipper.md)‹T›*

___

### `Const` siblingsAfterFocus

▸ **siblingsAfterFocus**‹**T**›(`__namedParameters`: object): *ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››*

*Defined in [zipper/index.ts:184](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L184)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`after` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› |

**Returns:** *ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››*

___

### `Const` siblingsBeforeFocus

▸ **siblingsBeforeFocus**‹**T**›(`__namedParameters`: object): *ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››*

*Defined in [zipper/index.ts:180](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L180)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`before` | ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T›› |

**Returns:** *ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››*

___

### `Const` toForest

▸ **toForest**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[[Tree](../interfaces/_tree_index_.tree.md)‹T›, ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››]*

*Defined in [zipper/index.ts:50](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L50)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[[Tree](../interfaces/_tree_index_.tree.md)‹T›, ReadonlyArray‹[Tree](../interfaces/_tree_index_.tree.md)‹T››]*

___

### `Const` toTree

▸ **toTree**‹**T**›(`zipper`: [Zipper](../interfaces/_zipper_index_.zipper.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [zipper/index.ts:47](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L47)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zipper` | [Zipper](../interfaces/_zipper_index_.zipper.md)‹T› |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

___

### `Const` tree

▸ **tree**‹**T**›(`__namedParameters`: object): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

*Defined in [zipper/index.ts:59](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L59)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`focus` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

## Object literals

### `Const` curried

### ▪ **curried**: *object*

*Defined in [zipper/index.ts:370](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L370)*

###  append

▸ **append**‹**T**›(`tree`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *(Anonymous function)*

*Defined in [zipper/index.ts:378](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L378)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *(Anonymous function)*

###  findFromRoot

▸ **findFromRoot**‹**T**›(`pred`: function): *(Anonymous function)*

*Defined in [zipper/index.ts:383](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L383)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **pred**: *function*

▸ (`label`: T): *Boolean*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

**Returns:** *(Anonymous function)*

###  findNext

▸ **findNext**‹**T**›(`pred`: function): *(Anonymous function)*

*Defined in [zipper/index.ts:379](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L379)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **pred**: *function*

▸ (`label`: T): *Boolean*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

**Returns:** *(Anonymous function)*

###  findPrevious

▸ **findPrevious**‹**T**›(`pred`: function): *(Anonymous function)*

*Defined in [zipper/index.ts:381](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L381)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **pred**: *function*

▸ (`label`: T): *Boolean*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

**Returns:** *(Anonymous function)*

###  mapLabel

▸ **mapLabel**‹**T**›(`fn`: function): *(Anonymous function)*

*Defined in [zipper/index.ts:375](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L375)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (`label`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

**Returns:** *(Anonymous function)*

###  mapTree

▸ **mapTree**‹**T**›(`fn`: function): *(Anonymous function)*

*Defined in [zipper/index.ts:371](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L371)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (`tree`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *[Tree](../interfaces/_tree_index_.tree.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *(Anonymous function)*

###  prepend

▸ **prepend**‹**T**›(`tree`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *(Anonymous function)*

*Defined in [zipper/index.ts:377](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L377)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *(Anonymous function)*

###  replaceLabel

▸ **replaceLabel**‹**T**›(`label`: T): *(Anonymous function)*

*Defined in [zipper/index.ts:376](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L376)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`label` | T |

**Returns:** *(Anonymous function)*

###  replaceTree

▸ **replaceTree**‹**T**›(`tree`: [Tree](../interfaces/_tree_index_.tree.md)‹T›): *(Anonymous function)*

*Defined in [zipper/index.ts:373](https://github.com/gamebox/rosetree/blob/8513442/src/zipper/index.ts#L373)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](../interfaces/_tree_index_.tree.md)‹T› |

**Returns:** *(Anonymous function)*
