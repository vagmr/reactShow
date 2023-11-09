import express from "express";
import userRouter from './router/user.js'
import commentRouter from './router/comment.js'
import likeRouter from './router/like.js'
import postRouter from './router/post.js'
import authRouter from './router/auth.js'
import descRouter from './router/desc.js'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'
import cookieParser from "cookie-parser";
import cors from 'cors'

//创建路径变量
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

//cors设置
const corsOptions = {
    credentials: true,
    origin: "http://localhost:5173",
    // 允许的头信息 allowedHeaders: ['Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的 HTTP 方法
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));

//路由
app.use('/api', descRouter)
app.use('/api', authRouter)
app.use('/api', commentRouter)
app.use('/api', likeRouter)
app.use('/api', postRouter)
app.use('/api', userRouter)

app.listen(3000, () => {
    console.log('Api working...')
})

export default app;
