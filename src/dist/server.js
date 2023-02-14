import express from 'express';
import * as mysql from 'mysql2/promise';
import puppeteer from 'puppeteer';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = 3000;
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'bxm1014',
    database: 'noticias_g1'
};
// cria a conexão com o banco de dados
const connection = await mysql.createConnection(dbConfig);
// passa a conexão para a aplicação
app.set('connection', connection);
// inicia o servidor na porta definida
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
// define a rota /noticia_g1
app.post('/noticia_g1', cors(), bodyParser.json(), async (req, res) => {
    const url = req.body.url;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const title = await page.$eval('h1.content-head__title', el => el.textContent);
    const subtitle = await page.$eval('h2.content-head__subtitle', el => el.textContent);
    await browser.close();
    const conn = await mysql.createConnection(dbConfig);
    await conn.execute('INSERT INTO noticias (title, subtitle) VALUES (?, ?)', [title, subtitle]);
    await conn.end();
    res.json({ title, subtitle });
});
//# sourceMappingURL=server.js.map