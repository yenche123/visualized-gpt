import util from "~/utils/util"

const _env = util.getEnv()
const username = _env.VAL_TOWN_USERNAME
const mainFunc = _env.VAL_TOWN_MAIN_FUNC

if(!username) {
  console.warn(`please configure your username of val town in .env.local`)
}

if(!mainFunc) {
  console.warn(`please configure your mainFunc of val town in .env.local`)
}

export default {
  HELLO_WORLD: `https://api.val.town/express/@${username}.${mainFunc}`,
}