class Livro{
    constructor(titulo, descricao, status, categoria, autor){
        this.titulo = titulo
        this.descricao = descricao
        this.status = this._validaStatus(status)
        this.categoria = this._catpermitidas(categoria)
        this.autor = autor
    }

    _validaStatus = (status)=>{
        if(status =="Disponível"){
            return status
        }
        else if(status =="Indisponível"){
            return status
        }
        else{
            throw new Error("Status não reconhecido.")
        }
    }

    _catpermitidas = (categoria)=>{
        const catPermitidas = [ "Infantil", "Filosofia", "Ciências", "Aritmética", "Romance"]
        if(catPermitidas.includes(categoria)){
            return categoria
        }
        else{
            throw new Error("Categoria não reconhecida.")
    }
}
}
export default Livro