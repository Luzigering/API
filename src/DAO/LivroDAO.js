class LivroDAO{

    constructor(db){
        this.db = db
    }

    findAllLivros = ()=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM LIVROS', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "livros": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    findOneLivro = (titulo)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM LIVROS WHERE TITULO = ?',
            titulo,
            (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "livros": rows,
                        "erro": false
                    })
                }
            })
        })

    }

    //STATUS

    findForStatus = (status)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM LIVROS WHERE STATUS = ?',
            status,
            (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "livros": rows,
                        "erro": false
                    })
                }
            })
        })

    }

    //CATEGORIA
    findForCat = (categoria)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM LIVROS WHERE CATEGORIA = ?',
            categoria,
            (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "livros": rows,
                        "erro": false
                    })
                }
            })
        })

    }
    //AUTOR
    findForAutor = (autor)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM LIVROS WHERE AUTOR = ?',
            autor,
            (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "livros": rows,
                        "erro": false
                    })
                }
            })
        })

    }

    insertLivro = (newLivro) =>{
        return new Promise((resolve, reject)=>{
            this.db.run("INSERT INTO LIVROS (TITULO, DESCRICAO, STATUS, CATEGORIA, AUTOR) VALUES (?, ?, ?, ?, ?)",
            newLivro.titulo, newLivro.descricao, newLivro.status, newLivro.categoria,  newLivro.autor,
                (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Tarefa ${newLivro.titulo} inserido com sucesso`,
                        "tarefa": newLivro,
                        "erro": false
                    })
                }
            })
        })

    }

    deletLivro = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM LIVROS WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "livro": `Livro de id ${id} deletado.`,
                        "erro": false
                    })
                }
            })
        })
    }

    updateLivro = (id, livro)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE LIVROS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, CATEGORIA = ?, AUTOR =? WHERE ID = ?',
            livro.titulo, livro.descricao, livro.status, livro.categoria, livro.autor,
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Livro de id ${id} atualizado com sucesso`,
                        "livro": livro,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default LivroDAO