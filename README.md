<h1 align = "center">Orbis</h1>


<h1>Topics 📋</h1>

   - [Sobre 📖](#about)
   - [Equipe](#team)
   - [Tecnologias 🚀](#techs)
   - [Tools 🛠️](#tools)
   - [Como rodar o projeto 🤔](#run-project)


<h2 id="about">😀 Sobre o projeto </h2>
<p id = "Sobre">Este repositório contém a aplicação "Orbis - Um toolkit digital de design centrado no usuário". A aplicação surge da necessidade de auxiliar os alunos da disciplina de IHC a projetar produtos  interativos, com uma curadoria de conteúdos que serão apresentados de forma digital sobre os métodos do design de interação. Os conteúdos serão baseados no artigo  "Orbis: Um toolkit para Apoio no Ensino e Prática de Técnicas do Design Centrado no Usuário - Valeska Mesquita e Ticianne Darin" adaptando a proposta de cartas das autoras do artigo para uma website interativo.</p>

<h2 id="team">Equipe </h2>
<p>
  <table>
    <tr>
      <th>Nome</th>
      <th>Função</th>
    </tr>
    <tr>
      <td>Alairton Junior</td>
      <td>Líder</td>
    </tr>
    <tr>
      <td>Beatriz Carvalho</td>
      <td>Arquiteta da informação</td>
    </tr>
    <tr>
      <td>Mariana Rangel</td>
      <td>Designer</td>
    </tr>
    <tr>
      <td>Isabelle Reinbold</td>
      <td>Desenvolvedora Frontend</td>
    </tr>
     <tr>
      <td>Jamyle Layla</td>
      <td>Desenvolvedora Frontend</td>
    </tr>
    <tr>
      <td>José Matheus</td>
      <td>Desenvolvedor Backend</td>
    </tr>
  </table>
</p>

## 3. Requisitos funcionais
Os requisitos funcionais para a aplicação são:

> RF0001: Acessar página inicial e mostrar informações sobre o site. Como usuário, quero acessar o site e ver informações do processo de Design Centrado no Usuário, quais são suas etapas e como utilizar o Orbis.


> RF0002: Permitir a navegação do conteúdo do site por meio de um menu. Como usuário, quero navegar pelo conteúdo do site por meio de um menu inicial que me leva para as ferramentas do Toolkit e formulário de recomendação.


> RF0003: Interagir com os botões referentes ao processo de Design Centrado no Usuário. Como usuário, quero aprender sobre o conteúdo de Design Centrado no Usuário e as suas etapas, através de um esquema interativo.


> RF0004: Permitir a aplicação de filtros nos métodos e ferramentas do Toolkit. Como usuário, quero poder usar um sistema de busca eficiente para encontrar rapidamente os métodos na aba “Toolkit”, para que eu não precise responder o formulário de recomendação, pois esse não é meu objetivo atual.


> RF0005: Permitir a visualização dos cards de métodos do DCU. Como usuário, quero visualizar todas ferramentas do Design Centrado no Usuário disponíveis no Toolkit Orbis.


> RF0006: Permitir visualizar informações sobre os métodos do DCU. Como usuário, quero visualizar informações específicas sobre os métodos e ferramentas do Toolkit. A exemplo disso, QUERO entender quando usar a ferramenta, suas características, passo a passo para execução e dicas.


> RF0007: Deve permitir ao usuário que este possa responder o formulário de recomendação. Como usuário, quero buscar uma recomendação do Orbis. Para isso, quero responder um formulário rápido, fácil e intuitivo que colete minhas informações e gere  essa recomendação.

> RF0008: O usuário pode selecionar a etapa do DCU no formulário. Como usuário, quero selecionar a etapa em que desejo uma recomendação de métodos e técnicas do Design Centrado no Usuário.

> RF0009:Visualização da Recomendação. Como usuário, quero visualizar a recomendação dos métodos para a etapa que eu selecionei. Assim, quero poder visualizar qual a mais indicada com base nas minhas respostas e entender quando eu quando devo utilizar.


> RF0010: Salvar Recomendação. Como usuário, quero salvar a recomendação do Orbis. Dessa forma, gostaria de fazer o download de um PDF com as informações das ferramentas que foram indicadas.


> RF0011: Visualizar materiais extras. Como usuário, quero visualizar materiais extras de consulta, indicados pelo Orbis, para realizar pesquisas mais profundas sobre aquele método ou ferramenta, como links para vídeos, artigos e outros sites sobre o assunto.


> RF0012:Input de autocomplete - Busca Rápida de Ferramentas. Como usuário, quero poder usar um sistema de busca eficiente para encontrar rapidamente os métodos que procuro. Então, por meio de uma ferramenta de busca, é retornado para mim os métodos que tenho em mente. 

A disposição dos requisitos no projeto é a seguinte:

#### 3.1. RF0001: Acessar página inicial e mostrar informações sobre o site. 
##### Arquivos relacionados:

#### 3.2. RF0002: Permitir a navegação do conteúdo do site por meio de um menu.
##### Arquivos relacionados:

#### 3.3. RF0003: Interagir com os botões referentes ao processo de Design Centrado no Usuário.
##### Arquivos relacionados:

#### 3.4. RF0004: Permitir a aplicação de filtros nos métodos e ferramentas do Toolkit. 
##### Arquivos relacionados:

<h2 id="techs">🚀 Tecnologias</h2>
<p>Tecnologias do Front-end</p>

-  [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
-  [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
-  [Axios](https://axios-http.com/)
-  [Styled-Compoments](https://styled-components.com/docs)
-  [React](https://react.dev/)
-  [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

<p>Tecnologias do Back-end</p>


-  [PHP](https://www.php.net/downloads.php)
-  [MySQL](https://www.mysql.com/downloads/)
  
 <h2 id="tools">🛠 Tools </h2>

As ferramentas utilizadas para desenvolver o projeto:

-  [Visual Studio Code](https://code.visualstudio.com/)
-  [Figma](https://www.figma.com/ui-design-tool/)
-  [Vite](https://vitejs.dev/)
    
<h2 id="run-project">🖥 Como rodar o projeto </h2>

<p>Clone o repositório com o seguinte comando:</p>

```bash
# - Clone this repository:
$ git clone https://github.com/JoseMatheus29/Orbis.git
```
### Frontent
 
```bash
# - Entre nesse diretório:
$ cd orbis/frontend
$ code .

# - For install dependencies:
$ npm install
# or
$ yarn

# - Inicializar o aplicação React
$ npm run dev
# or
$ yarn dev

# - Inicializar o server do projeto:
$ npm run server
# or
$ yarn server
```
