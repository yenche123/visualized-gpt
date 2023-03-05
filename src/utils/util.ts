import ider from "./ider"

let userId = ""
function getUserId() {
  if(userId) return userId
  const res = localStorage.getItem("vg-userId")
  if(res) {
    userId = res
    return userId
  }

  userId = ider.createUserId()
  localStorage.setItem("vg-userId", userId)
  return userId
}

export default {
  getUserId
}