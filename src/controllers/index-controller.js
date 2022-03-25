
const indexController = (app)=>{
    app.get('/', (req, res)=>{
        res.send(`
        <h1>Biblioteca</h1>
        <h3>Link do repositório <a target="_blank" href="https://github.com/luzianegering/Escola-API-Biblioteca">aqui</a> </h3>
        `)
    })
}

export default indexController