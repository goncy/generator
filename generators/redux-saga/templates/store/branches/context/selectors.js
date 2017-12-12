import * as R from "ramda"

export const setValue = (prop, payload, state) => R.assoc(prop, payload)(state)
