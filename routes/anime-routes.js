import { pool } from '../config/database.js'

export default async function animeRoutes(fastify, options) {
    fastify.post('/animes', async (request, reply) => {
        const { title, synopsis, episodes, genre, releaseYear } = request.body
        try {
            const [result] = await pool.query(`
                INSERT INTO animes (title, synopsis, episodes, genre, releaseYear)
                VALUES (?, ?, ?, ?, ?)`,
                [title, synopsis, episodes, JSON.stringify(genre), releaseYear]
            )
            reply.code(201).send({ id: result.insertId, message: 'Anime publicado com sucesso!' })
        } catch (error) {
            reply.code(500).send({ message: 'Erro ao inserir Anime', detail: error.message })
        }
    })

    fastify.get('/animes', async (request, reply) => {
        const [rows] = await pool.query(`SELECT * FROM animes`)
        reply.send(rows)
    })

    fastify.get('/animes/:id', async (request, reply) => {
        const [rows] = await pool.query(`SELECT * FROM animes WHERE id = ?`, [request.params.id])
        if (rows.lenght === 0) return reply.code(404).send({ message: 'Anime não encontrado' })
        reply.send(rows[0])
    })

    fastify.put('/animes/:id', async (request, reply) => {
        const { title, synopsis, episodes, genre, releaseYear } = request.body
        try {
            await pool.query(`
                UPDATE animes SET title = ?, synopsis = ?, episodes = ?, genre = ?, releaseYear = ? WHERE id = ?`,
                [title, synopsis, episodes, JSON.stringify(genre), releaseYear, request.params.id]
            )
            reply.send({ message: 'Anime atualizado com sucesso!' })
        } catch (error) {
            reply.code(500).send({ message: 'Erro ao atualizar anime', detail: error.message })
        }
    })

    fastify.delete('/animes/:id', async (request, reply) => {
        await pool.query(`DELETE FROM animes WHERE id = ?`, [request.params.id])
        reply.send({ message: 'Anime removido com sucesso!'})
    })
}