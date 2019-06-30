import {requireAll} from "goncy/utils/discover";

export default Object.assign(
  {},
  ...requireAll(require.context("../", true, /services\.js$/))
);
