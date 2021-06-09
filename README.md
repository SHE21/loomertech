<h2 align="left">LoomerTech API RESTful</h2>

Api RESTful para o gerencimento de cadastro de imóveis urbanos.

<h2 align="left">Status do Projeto</h2>
Concluído

<h2 align="left">Features</h2>
- [x] Cadastro de usuário<br>
- [x] Login de usuário<br>
- [x] Cadastro de imóveis<br>
- [x] Lista de imóveis<br>
- [x] Lista de imóveis por parêmetros<br>
- [x] Atualizar de imóvel<br>
- [x] Exclusão de imóvel<br>

<h2 align="left">Primeiro paço</h2>
Configure a conexão com o banco de dados no arquivo <code>database/Connection.js</code>.<br>
<code>const config = {<br>
    database: 'loomertech',<br>
    user: 'root',<br>
    password: '',<br>
    host: 'localhost',<br>
    dialect: 'mysql'<br>
}</code>

<h2 align="left">Demonstração</h2>
As respostas enviadas como resultados das operações são em formato <code>json</code><br>

<b>Cadastro de usuário</b><br>
Acesse a rota <code>root/user/add</code> e envie os parâmetros via <code>POST</code>:<br>
<code>fullname</code><br>
<code>cpf</code><br>
<code>email</code><br>
<code>password</code><br>

<p></p>

<b>Login de usuário</b><br>
Acesse a rota <code>root/user/login</code> e envie os parâmetros via <code>POST</code>:<br>
<code>email</code><br>
<code>password</code><br>

<b>Cadastro de imóveis</b> <i>(operação restrita a usuário logado)</i><br>
Acesse a rota <code>root/imovel/put</code> e envie os parâmetros via <code>POST</code>:<br>
<code>cep</code>: CEP<br>
<code>number</code> Número do imóvel<br>
<code>complement</code>: Complemento do imóvel<br>
<code>rent_amount</code>: Preço do aluguel<br>
<code>numb_rooms</code>: Número de quartos<br>
<code>avaliable</code>: Disponibilidade para alugar<br>

<b>Lista de imóveis</b> <i>(operação restrita a usuário logado)</i><br>
Acesse a rota <code>root/imovel/get</code> terá um retorno de todas os imóveis cadastrados na base de dados.<br>

<b>Lista de imóveis por parêmetros</b> <i>(operação restrita a usuário logado)</i><br>
Listando todos os imóveis de um determinado CEP: <code>root/imovel/get/cep/{cep}</code><br>
Ex.: <code>root/imovel/get/cep/65110000</code><br>

Listando todos os imóveis com determinado número de quartos: <code>root/imovel/get/rooms/{rooms}</code><br>
Ex.: <code>root/imovel/get/rooms/2</code><br>

Listando todos os imóveis disponíveis para aluguel: <code>root/imovel/get/avaliable/{avaliable}</code><br>
Ex.: <code>root/imovel/get/avaliable/1</code><br>

<b>Atualizar de imóvel</b> <i>(operação restrita a usuário logado)</i><br>
Acesse a rota <code>root/imovel/update/{id}</code> e envie como parâmetro via <code>POST</code> o <code>idMask</code>:<br>
Ex.: <code>root/imovel/update/idugjdx4wdc1czkf1y</code>

<b>Excluir um imóvel</b> <i>(operação restrita a usuário logado)</i><br>
Acesse a rota <code>root/imovel/delete/{id}</code> e envie como parâmetro via <code>GET</code> o <code>idMask</code>:<br>
Ex.: <code>root/imovel/delete/idugjdx4wdc1czkf1y</code>

<h2>Pré-requisitos</h2>
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
Node.js versão mais recente.

<h2>Ambiente de Teste</h2>
O Postman foi o ambiente de teste usado para consumir a API.
Algumas config do Postman:<br>
No Header:<br>
<code>Content-Type : application/json</code>
<code>x-access-token : aqui token gerado depois de login</code><br>
No Body:<br>
Marque a opção: <code>x-www-form-urlencoded</code>

<h2>Tecnologias</h2>
As seguintes ferramentas foram usadas na construção do projeto:<br>
<li>JavaScript</li>
<li>Node Js</li>
<br>

<b>Dependências do projeto</br><br>
<code>"dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.2.5",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "random-key-generator": "^1.2.3",
    "sequelize": "^6.6.2"
  }</code>
