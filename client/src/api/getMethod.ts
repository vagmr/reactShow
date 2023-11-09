import axios from "axios"
import { BASE_URL } from "../constant"
export const getDescApi = () => {
    return axios.get(BASE_URL + "/desc")
}
/* 获取用户详细信息 */
export const getUserInfoApi = () => {
    return axios.get(BASE_URL + "/comment")
}