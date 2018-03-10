import React from "react";

import styles from "./counter.less";

const Counter = ({counter, dispatch}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {counter.record}</div>
      <div className={styles.current}>{counter.current}</div>
      <div className={styles.button}>
        <button onClick={() => dispatch({type: "counter/count"})}>+</button>
      </div>
    </div>
  );
};

export default Counter;
