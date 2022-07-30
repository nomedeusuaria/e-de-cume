## É de cumê 

</br>

Olá, esta API é referente ao meu projeto final do curso de backend da {Reprograma}, no qual fiz parte da turma On-16.

Tendo em vista a atual situação de insegurança alimentar que assola milhões de brasileiros e a recente (re)inserção do Brasil no Mapa da Fome, este projeto tem como objetivo trazer alternativas alimentícias para amenizar e/ou contornar esse problema.

As vezes consideradas como “mato” ou “daninha”, essas hortaliças que crescem em canteiros são, na verdade, ricas em nutrientes e comestíveis. As plantas alimentícias não convencionais (PANCs) são espécies vegetais com uma ou mais partes comestíveis de sua estrutura. Podem ser exóticas, nativas, espontâneas ou cultivadas; são pouco afetadas por pragas e doenças, são bem adaptadas ao clima de sua região e apresentam eficiência na absorção dos nutrientes vindos da terra.

Conhecer e aprender sobre as PANCs é, sobretudo, valorizar a importâncias desses vegetais para a segurança alimentar e nutricional de pessoas. Além de resgatar a tradição que essas plantas tem na culinária e cultura locais de diversas regiões do Brasil.

</br>

## Ferramentas usadas neste projeto

</br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm ou yarn`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `npm install --save-exact jest@28.1.0 --save-dev`| Jest é uma estrutura de teste JavaScript.|
| `swagger`| Gera a documentação.|
| `heroku`| hospeda a documentação.|

</br>

## Rotas

</br>

| Verbo  |    EndPoint     |       Descrição da Rota             | Status    |
| ------ | -------------   | ------------------------------------| --------  | 
| GET    | /pancs          |  Listar todas as PANCs              |   200  ✔️ |
| GET    | /pancs/:id      |  Listar pancs por ID                |   200  ✔️ |
| PATCH  | /pancs/:id      |  Adicionar uma nova PANC            |   201  ✔️ |
| DELETE | /pancs/:id      |  Deverá deletar uma PANC por ID     |   200  ✔️ |

A documentação pode ser acessada [aqui](https://e-de-cume.herokuapp.com/my-documentation-route/).

</br>

## testes

</br>

Utilizei o Jest para realizar os testes das rotas de CRUD.

