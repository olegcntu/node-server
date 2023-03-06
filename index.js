const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const commentRouter = require('./routes/comment.routes')
//const PORT=process.env.PORT || 8080
const PORT = 8082

const app = express()
// app.use('/api/user', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     next();
// })
// app.use('/api/post', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", ["DELETE", "GET"]);
//     next();
// })
// app.use('/api/comment', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     next();
// })

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)
app.use('/api', commentRouter)

app.listen(PORT, () => console.log(`server start on ${PORT}`))