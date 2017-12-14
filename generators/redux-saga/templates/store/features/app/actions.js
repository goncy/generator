import { makeAction } from "async-action-creator"

import { NAMESPACE } from "./constants"

export const appLoaded = makeAction(`${NAMESPACE}/APP_LOADED`)
