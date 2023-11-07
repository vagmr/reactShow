import { db } from "../connect.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const getUser = (req, res) => {
    return res.send("Hello World!")
}
//auth相关路由
/* 注册 */
export const register = (req, res) => {
    let sql = "select * from user where username = ?"
    db.query(sql, [req.body.username], (err, data) => {
        if (err) return res.status(500).json({ code: 500, msg: "服务器错误", data: err });
        if (data.length) return res.status(409).json({ code: 409, msg: "用户已存在" });
        let sql = "insert into user(username,password,email) value(?)";
        //对密码进行加密
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        const values = [req.body.username, hashPassword, req.body.email];
        db.query(sql, [values], (err) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json({ code: 200, msg: "注册成功" });
        })
    })
}
/* 登录 */
export const login = (req, res) => {
    let sql = "select * from user where username = ?";
    db.query(sql, [req.body.username], (err, data) => {
        if (err) return res.status(500).json({ code: 500, msg: "服务器错误", data: err })
        if (!data.length) return res.status(409).json({ code: 409, msg: "用户不存在" })
        //验证密码的正确性
        const compare = bcrypt.compareSync(req.body.password, data[0].password)
        if (!compare) return res.status(409).json({ code: 409, msg: "密码错误" })
        /* 使用token验证 */
        const token = jwt.sign({ id: data[0].id }, "vagmrkey", { expiresIn: "2h" });
        const { password, ...other } = data[0]
        res.cookie("access_key", token, {
            maxAge: 2 * 60 * 60 * 1000,
            httpOnly: true
        }).status(200).json({ code: 200, msg: "登录成功", data: other })
    })
}
/* 退出登录 */
export const loginOut = (req, res) => {
    res.clearCookie("access_key", {
        secure: true,
        sameSite: "none",
    }).status(200).json({ code: 200, msg: "退出登录成功" })
}