import { appLoaded } from "../actions"

const initialEpic = action$ =>
  action$
    .ofType(appLoaded.type)
    .delay(1000)
    .mapTo(appLoaded.success())

export default initialEpic
