import { customAlphabet } from 'nanoid'


function _createId(digits: number = 21) {
  const ABC = "123456789abcdefghijkmnopqrstuvwxyz"
  const nanoid = customAlphabet(ABC, digits)
  return nanoid()
}

function createUserId() {
  return "vg_" + _createId(19)
}

export default {
  createUserId
}