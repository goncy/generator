import {requireAll} from "./utils";

export default Object.assign(
  {},
  ...requireAll(require.context("../", true, /services\.js$/))
);
