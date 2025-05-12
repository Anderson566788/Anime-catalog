import { pool } from './database.js'

try {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS animes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT,
    episodes INT,
    genre JSON,
    releaseYear INT
    );
    `)
    process.exit(0)
} catch (error) {
    console.log('Erro ao criar tabela: ', error)
    process.exit(1)
}