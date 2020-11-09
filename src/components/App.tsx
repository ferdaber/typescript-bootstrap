import { css, cx } from "@linaria/core";
import React, { useState } from "react";

const styles = {
  app: css`
    font-weight: bold;
  `,
};

type Props = {};

export function App(props: Props) {
  const [overrideColor, setOverrideColor] = useState(false);
  return (
    <div className={styles.app}>
      Hello{" "}
      <span
        className={cx(
          css`
            color: red;
          `,
          overrideColor &&
            css`
              color: blue;
            `
        )}
        onClick={() => setOverrideColor((x) => !x)}
      >
        world
      </span>
      !
    </div>
  );
}
export default App;
