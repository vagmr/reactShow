import type { ReactNode } from "react"
import { useState } from "react"
import '../style/loginPag.scss'
import axios from "axios"
import { BASE_URL } from "../constant"

const Login = (): ReactNode => {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState(false);
    const [msg, seyMsg] = useState("测试数据");
    const sub = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const info = { username, password };
        axios.post(BASE_URL + '/login', info).then(() => {
            console.log("登录成功");
        }).catch(err => {
            setError(true);
            seyMsg(err.response.data.msg);
            setTimeout(() => {
                setError(false);
            }, 1000)
        })
    }
    return (<>
        <main className="login">
            {error ? <h1 className="error">{msg}</h1> : ""}
            <div className="loginBox">
                <h1 className="title">登录</h1>
                <label htmlFor="username">账号</label>
                <input type="text" value={username} onChange={e => setUserName(e.target.value)} name="username" id="username" placeholder="请输入账号" />
                <label htmlFor="password">密码</label>
                <input type="password" value={password} onChange={e => setpassword(e.target.value)} name="password" id="password" placeholder="请输入密码" />
                <button onClick={e => sub(e)} className="btn">登录</button>
            </div>
        </main>
    </>)
}

export default Login