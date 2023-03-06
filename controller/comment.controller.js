const db = require("../db");

class CommentController {

    async createComment(req, res) {
        try {
            const {content, userId, postId} = req.body
            const newComment = await db.query(`INSERT INTO comment (content, user_id, post_id)
                                               values ($1, $2, $3) RETURNING *`, [content, userId, postId])
            res.json(newComment.rows[0])
        } catch (e) {
            res.json(e)
        }

    }

    async getComment(req, res) {
        try {
            const id = req.query.id
            const comment = await db.query(`SELECT *
                                            FROM comment
                                            WHERE post_id = $1`, [id])
            res.json(comment.rows)
        } catch (e) {
            res.json(e)
        }

    }

}

module.exports = new CommentController()