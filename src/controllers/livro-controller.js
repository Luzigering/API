import LivroDAO from '../DAO/LivroDAO.js'
import Livro from '../models/Livro.js'

const livroController = (app, bd)=>{
    
    const livroDAO = new LivroDAO(bd)

    app.get('/livro', (req, res)=>{
        livroDAO.findAllLivros()
        .then((resposta)=>{
            res.status(200).json(resposta)
        })
        .catch((erro)=>{
            res.status(400).json(erro)
        })
    })
    //Busca pelo título.
    app.get('/livro/titulo/:titulo', (req, res)=>{
        const titulo = req.params.titulo

        livroDAO.findOneLivro(titulo)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })
    //Busca por STATUS
    app.get('/livro/status/:status', (req, res)=>{
        const status = req.params.status

        livroDAO.findForStatus(status)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })
    //Busca por Categoria
    app.get('/livro/categoria/:categoria', (req, res)=>{
        const categoria = req.params.categoria

        livroDAO.findForCat(categoria)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })
    //Busca por Autor
    app.get('/livro/autor/:autor', (req, res)=>{
        const autor = req.params.autor

        livroDAO.findForAutor(autor)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })



    app.post('/livro',(req, res)=>{
        const body = req.body
        try {
            const newLivro = new Livro(body.titulo, body.descricao, body.status, body.categoria, body.autor)

            livroDAO.insertLivro(newLivro)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/livro/id/:id', (req, res)=>{
        const id = req.params.id
        livroDAO.deletLivro(id)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.put('/livro/id/:id', (req, res)=>{
        const id = req.params.id
        const body = req.body

        try {
            const livroAtualizado = new Livro(body.titulo, body.descricao, body.status, body.categoria, body.autor)

            livroDAO.updateLivro(id, livroAtualizado)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}

export default livroController
