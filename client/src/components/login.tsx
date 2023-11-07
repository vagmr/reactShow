import type { ReactNode } from "react"
import { useState } from "react"
import '../style/loginPag.scss'
import axios from "axios"
import { BASE_URL } from "../constant"
import ShowInfo from "./info"

const Login = (): ReactNode => {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [msg, seyMsg] = useState("测试数据");
    const [isRegister, setIsRegister] = useState(false);
    //是否显示提示框
    const [isShow, setIsShow] = useState(false);

    const sub = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const info = { username, password };
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
                seyMsg(err.response.data.msg);
                setTimeout(() => {
                    setIsShow(false);
                }, 1000)
            })
            return
        }
        axios.post(BASE_URL + '/login', info).then((res) => {
            setIsShow(true);
            setError(false);
            seyMsg(res.data.msg);
            setTimeout(() => {
                setIsShow(false);
            }, 1000)
        }).catch(err => {
            setIsShow(true);
            setError(true);
            seyMsg(err.response.data.msg);
            setTimeout(() => {
                setIsShow(false);
            }, 1000)
        })
    }
    //切换时清空值
    const toggle = () => {
        setIsRegister(!isRegister)
        setUserName("");
        setpassword("");
        setEmail("");
    }
    return (<>
        <main className="login">
            {isRegister ? (<form className="register" onSubmit={e => sub(e)}>
                <div className="registerBox">
                    <h1 className="title">注册</h1>
                    <input required type="text" value={username} onChange={e => setUserName(e.target.value)} name="username" id="username" placeholder="请输入账号" />
                    <input required
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email" id="email"
                        placeholder="请输入邮箱" />
                    <input required type="password" value={password} onChange={e => setpassword(e.target.value)} name="password" id="password" placeholder="请输入密码" />
                    <button type="submit" className="btn">注册</button>
                    {isShow ? (error ? <ShowInfo msg={msg} color="red" />
                        : <ShowInfo msg={msg} color="green" />) : ""}
                </div>
            </form>) :
                (
                    <div className="loginBox">
                        <h1 className="title">登录</h1>
                        <label htmlFor="username">账号</label>
                        <input type="text" value={username} onChange={e => setUserName(e.target.value)} name="username" id="username" placeholder="请输入账号" />
                        <label htmlFor="password">密码</label>
                        <input type="password" value={password} onChange={e => setpassword(e.target.value)} name="password" id="password" placeholder="请输入密码" />
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