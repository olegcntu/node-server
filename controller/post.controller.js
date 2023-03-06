const db = require("../db");

class PostController {

    async createPost(req, res) {
        try {
            const {title, content, userId} = req.body.params
            const newPost = await db.query(`INSERT INTO post (title, content, user_id)
                                            values ($1, $2, $3) RETURNING *`, [title, content, userId])
            res.json(newPost.rows[0])
        } catch (e) {
            res.json(e)
        }
    }


    async getPostsById(req, res) {
        try {
            const id = req.params.id
            const post = await db.query(`SELECT *
                                         FROM post
                                         WHERE id = $1`, [id])
            const result = post.rows[0]
            res.json(result)
        } catch (e) {
            res.json(e)
        }
    }

    async deletePostById(req, res) {
        try {
            const id = req.query.id
            const commentDelete = await db.query(`DELETE
                                                  FROM comment
                                                  WHERE post_id = $1;
            `, [id])
            const postDelete = await db.query(`DELETE
                                               FROM post
                                               WHERE id = $1;
            `, [id])

            const result = postDelete.rows[0]
            res.json(result)
        } catch (e) {
            res.json(e)
        }

    }

    async getPosts(req, res) {
        try {
            const limit = req.query.limit
            const page = (req.query.page - 1) * limit

            if (limit !== undefined && page !== undefined) {
                const post = await db.query(`SELECT *
                                             FROM post LIMIT $1
                                             OFFSET $2;
                `, [limit, page])
                let p = {};

                p.size = 100;
                p.posts = post.rows

                res.json(p)
            } else {
                const post = await db.query(`SELECT *
                                             FROM post;
                `)
                res.json(post.rows)
            }
        } catch (e) {
            res.json(e)
        }

    }

}

module.exports = new PostController()