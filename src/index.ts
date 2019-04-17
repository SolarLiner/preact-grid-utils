import styled from "preact-dandy";

/**
 * Component props for the Grid.
 */
interface GridProps {
  /**
   * Specify grid gap (default 16px)
   */
  gap?: string;
  /**
   * Specify grid auto-flow (default row)
   */
  flow?: string;
}
/**
 * Grid element. The grid element is variable-width, which is easier to manipulate in JSX. It is 6 columns wide on
 * smartphones, 8 on tablets and 12 on desktop. This means items with size 1,2,4,8, and 12 are privileged in this grid
 * system.
 */
export const Grid = styled<GridProps>(
  "div",
  {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "16px",
    gridAutoFlow: "row",
    $nest: {
      "@media screen and (min-width: 480px)": {
        gridTemplateColumns: "repeat(8, 1fr)"
      },
      "@media screen and (min-width: 880px)": {
        gridTemplateColumns: "repeat(12, 1fr)"
      }
    }
  },
  props => ({
    gap: props.gap || "16px",
    gridAutoFlow: props.gap || "row"
  })
);

type GridItemLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
/**
 * Props for the Item component.
 */
interface ItemProps {
  /**
   * Item level, or size on the grid. Because of the workings of the grid, sizes 1,2,4,8, and 12 are privileged.
   */
  level?: GridItemLevel;
  /**
   * Offsets the item by adding an element with this size before it.
   */
  offset?: GridItemLevel;
}
/**
 * Item component, designed to go inside the Grid component defined above.
 */
export const Item = styled<ItemProps>(
  "div",
  {
    display: "block"
  },
  props => ({
    gridColumn: `span ${props.level || 1}`,
    $nest: !props.offset
      ? undefined
      : {
          "&::before": {
            display: "block",
            height: 0,
            width: "100%",
            gridColumn: `span ${props.offset}`
          }
        }
  })
);
