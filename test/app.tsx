import { h } from "preact";
import styled from "preact-dandy";

import { Grid, Item } from "../src";

const Block = styled("div", {
  display: "block",
  width: "100%",
  height: "100px",
  boxShadow: "0 0 6px rgba(0,0,0,0.2)"
});

export function Application() {
  return (
    <Grid small={4}>
      {[...new Array(12)].map((_, i) => (
        <Item>
          <Block>1</Block>
        </Item>
      ))}
      {[...new Array(6)].map(() => (
        <Item level={2}>
          <Block>2</Block>
        </Item>
      ))}
      {[...new Array(4)].map(() => (
        <Item level={3}>
          <Block>3</Block>
        </Item>
      ))}
      {[...new Array(3)].map(() => (
        <Item level={4}>
          <Block>4</Block>
        </Item>
      ))}
      {[...new Array(2)].map(() => (
        <Item level={6}>
          <Block>6</Block>
        </Item>
      ))}
    </Grid>
  );
}
