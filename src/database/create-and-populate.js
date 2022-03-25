import sqlite3 from 'sqlite3'
sqlite3.verbose()
import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);
const msgerror = "Não foi possível executar o comando";

const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS LIVROS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    TITULO VARCHAR(255),
    DESCRICAO LONG TEXT,
    STATUS VARCHAR(64),
    CATEGORIA VARCHAR(64),
    AUTOR VARCHAR(255)
);`;
//Remanescentes: Crie findForStatus, findForCat, findForAutor;
const ADD_LIVROS_DATA = `INSERT INTO LIVROS (TITULO, DESCRICAO, STATUS, CATEGORIA, AUTOR)
VALUES 
('O-Pequeno-Príncipe','Le Petit Prince é uma novela do escritor, aviador aristocrata francês Antoine de Saint-Exupéry, originalmente publicada em inglês e francês em abril de 1943 nos Estados Unidos.
 Durante a Segunda Guerra Mundial, Saint-Exupéry foi exilado para a América do Norte.',
'Disponível','Infantil',' Antoine-de-Saint-Exupéry'),
('As-Aventuras-de-Pinóquio','As Aventuras de Pinóquio é um romance escrito pelo italiano Carlo Collodi em Florença no ano de 1881 e publicado dois anos depois com ilustrações de Enrico Mazzanti.
 Trata-se de um clássico da literatura infanto-juvenil. ',
'Disponível','Infantil','Carlo-Collodi'),
('O-Patinho-Feio','O Patinho Feio é um conto de fadas do escritor dinamarquês Hans Christian Andersen, publicado pela primeira vez em 11 de Novembro de 1843 em Nye Eventyr. 
Forste Bind. Forste Samling. 1844.',
'Disponível','Infantil','Hans-Christian-Andersen'),
('A-Origem-das-Espécies','A Origem das Espécies é uma obra de literatura científica escrita por Charles Darwin, que é considerada a base da biologia evolutiva.
 Publicado em 24 de novembro de 1859, ele introduziu a teoria científica de que as formas de vida evoluem ao longo das gerações por meio de um processo de seleção natural.',
'Indisponível','Ciências','Charles-Darwin'),
('Fertilização-das-orquídeas','A fertilização de orquídeas é um livro do naturalista inglês Charles Darwin publicado em 15 de maio de 1862 sob o título explicativo completo Sobre os vários artifícios pelos 
quais as orquídeas britânicas e estrangeiras são fertilizadas por insetos e Os bons efeitos do cruzamento.',
'Indisponível','Ciências','Charles-Darwin'),
('Crítica-da-Razão-Pura','A Crítica da Razão Pura é a principal obra de teoria do conhecimento do filósofo Immanuel Kant, cuja primeira edição é de 1781, com alterações substanciais feitas pelo autor em determinadas seções para a segunda edição, publicada em 1787.',
'Disponível','Filosofia',' Immanuel-Kant'),
('A-República','A República é um diálogo socrático escrito por Platão, filósofo grego, no século IV a.C. Todo o diálogo é narrado, em primeira pessoa, por Sócrates.',
'Disponível','Filosofia',' Platão'),
('A-Genealogia-da-Moral','Genealogia da Moral, uma Polêmica é uma obra do filósofo alemão Friedrich Nietzsche, publicada em 1887,
 que complementa e clarifica uma obra anterior, Para Além do Bem e do Mal. ',
'Disponível','Filosofia',' Friedrich-Nietzsche')

`

function criaTabelaLivros() {
    db.run(LIVROS_SCHEMA, (error)=> {
        if(error) console.log('Erro ao criar');
    });
}


function populaTabelaLivros() {
    db.run(ADD_LIVROS_DATA, (error)=> {
       if (error) console.log('Erro ao inserir valores');
    });
}

db.serialize( ()=> {
    criaTabelaLivros();
    populaTabelaLivros();
});