import {requireAll} from "goncy/utils/discover";

const routes = Object.assign({}, ...requireAll(require.context("../../", true, /routes\.js$/)));

export default routes;
