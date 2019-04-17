import styled from "preact-dandy";

/**
 * Component props for the Grid.
 */
interface GridProps {
  /**
   * Optional additional classes passed to the component.
   */
  class?: string;
  /**
   * Specify grid gap (default 16px)
   */
  gap?: string;
  /**
   * Specify grid auto-flow (default row)
   */
  flow?: string;
}
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
      "@media screen and (min-width: 720px)": {
        gridTemplateColumns: "repeat(10, 1fr)"
      },
      "@media screen and (min-width: 960px)": {
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
interface ItemProps {
  class?: string;
  level?: GridItemLevel;
  offset?: GridItemLevel;
}
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
