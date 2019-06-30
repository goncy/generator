import {nest, requireAll} from "goncy/utils/discover";

const providers = requireAll(
  require.context("../../", true, /contexts\/(.*?).js$/),
  "Provider"
);

export default nest(providers);
