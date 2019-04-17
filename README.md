# preact-grid-utils

Variable-width grid system for Preact. 300b by itself, 600b counting preact-dandy.

## Installation

```bash
npm i preact-grid-utils
```

## Usage

The Grid utils define two components, **Grid** and **Item**.

### Grid

```tsx
<Grid gap="16px" flow="row">{...}</Grid>
```

The Grid component is a simple wrapper over CSS Grid, with a variable-width grid. It has two optional props, which controls gap and auto-flow. Their default values are shown above.

The **variable-width** grid is similar to [Material Design Component's Layout Grid](https://www.material.io/develop/web/components/layout-grid/), it changes its number of columns depending on the width of the client device. This makes it easier to work with the grid in JSX.

The grid is configured with the widths as **upper limits**:

- **6 columns** until **480px**
- **8 columns** until **880px**
- **12 columns** above.

This means for layout purposes that items of width **1,2,4,6,12** will be best and most stable.

### Item

```tsx
<Item level={1} offset={0}>{...}</Item>
```

The Item component wraps a single item in the grid. You can optionally pass a size (the _level_ prop) and an offset (the _offset_ property), but if you don't, their default values are shown above.
