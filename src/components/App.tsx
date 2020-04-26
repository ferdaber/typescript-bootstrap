import { css } from "linaria";
import React from "react";

const styles = {
  app: css`
    font-weight: bold;
  `,
};

type Props = {};

export function App(props: Props) {
  return <div className={styles.app}>Hello world!</div>;
}
export default App;
