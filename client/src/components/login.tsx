import type { ReactNode } from "react"
import { useState } from "react"
import '../style/loginPag.scss'
import axios from "axios"
import { BASE_URL } from "../constant"
import ShowInfo from "./info"
import useUserStore from "../store/userStore"
import { useHistory } from 'react-router-dom'

const Login = (): ReactNode => {
    const setUserInfo = useUserStore(state => state.setUserInfo);
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        email: ""
    })
    const [error, setError] = useState(false);
    const [msg, seyMsg] = useState("异常提示");
    const [isRegister, setIsRegister] = useState(false);
    //是否显示提示框
    const [isShow, setIsShow] = useState(false);

    //路由跳转
    const history = useHistory();
    const sub = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const { username, password, email } = inputs;
        if (email.length > 0) {
            axios.post(BASE_URL + '/register', { username, email, password }).then((res) => {
                setIsShow(true);
                setError(false);
                seyMsg(res.data.msg);
                setTimeout(() => {
                    setIsShow(false);
                }, 1000)
            }).catch(err => {
                setIsShow(true);
                setError(true);
                seyMsg(err.response?.data?.msg);
                setTimeout(() => {
                    setIsShow(false);
                }, 1000)
            })
            return
        }
        axios.post(BASE_URL + '/login', { username, password }, { withCredentials: true }).then((res) => {
            setIsShow(true);
            setError(false);
            seyMsg(res.data.msg);
            setUserInfo(res.data.data);
            setTimeout(() => {
                setIsShow(false);
                history.push('/home')
            }, 1000)
        }).catch(err => {
            setIsShow(true);
            setError(true);
            seyMsg(err.response?.data?.msg);
            setTimeout(() => {
                setIsShow(false);
            }, 1000)
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
        const { value, name } = e.target;
        setInputs((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    //切换时清空值
    const toggle = () => {
        setIsRegister(!isRegister)
        // setUserName("");
        // setpassword("");
        // setEmail("");
    }
    return (<>
        <main className="login">
            {isRegister ? (<form className="register" onSubmit={e => sub(e)}>
                <div className="registerBox">
                    <h1 className="title">注册</h1>
                    <input required type="text" onChange={handleChange} name="username" id="username" placeholder="请输入账号" />
                    <input required
                        type="email"
                        onChange={handleChange}
                        name="email" id="email"
                        placeholder="请输入邮箱" />
                    <input required type="password" onChange={handleChange} name="password" id="password" placeholder="请输入密码" />
                    <button type="submit" className="btn">注册</button>
                    {isShow ? (error ? <ShowInfo msg={msg} color="red" />
                        : <ShowInfo msg={msg} color="green" />) : ""}
                </div>
            </form>) :
                (
                    <div className="loginBox">
                        <h1 className="title">登录</h1>
                        <label htmlFor="username">账号</label>
                        <input type="text" onChange={handleChange} name="username" id="username" placeholder="请输入账号" />
                        <label htmlFor="password">密码</label>
                        <input type="password" onChange={handleChange} name="password" id="password" placeholder="请输入密码" />
                        <button onClick={e => sub(e)} className="btn">登录</button>
                        {isShow ? (error ? <ShowInfo msg={msg} color="red" />
                            : <ShowInfo msg={msg} color="green" />) : ""}
                    </div>
                )
            }
            <span className="toggle" onClick={() => toggle()}>{isRegister ? "已有账号?点此登录" : "没有账号?点此注册"}</span>
        </main>
    </>)
}

export default Login