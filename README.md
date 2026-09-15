Tripleten web_project_around_react

Sprint 14 — Introdução ao React 2️⃣ — Projeto: Sprint 14 — Renato Falchi Correia de Oliveira

Este projeto dá continuidade ao Around The U.S., conectando a aplicação React construída na Sprint 13 a uma API REST real. O foco desta sprint foi integrar chamadas assíncronas à API, gerenciar o estado da aplicação de forma centralizada através da Context API e da técnica de elevação de estado (lifting state up), e implementar as funcionalidades completas de curtir, deletar, editar perfil, editar avatar e criar novos cartões.

2️⃣ — Objetivo do projeto

Conectar a interface construída na sprint anterior a uma API real, com foco em:

Buscar os dados iniciais do usuário e dos cartões diretamente da API ao carregar a aplicação

Compartilhar os dados do usuário logado entre todos os componentes através da Context API (CurrentUserContext)

Elevar o estado (cards e popup) para o componente App, centralizando o controle da aplicação e permitindo que múltiplos componentes leiam e modifiquem os mesmos dados

Implementar as chamadas de API para curtir/descurtir, deletar, criar cartões e atualizar perfil/avatar

Fechar os popups automaticamente após o sucesso de cada requisição à API

Utilizar tanto componentes gerenciados (useState) quanto refs (useRef) para capturar dados de formulários, dependendo do caso de uso

3️⃣ — Funcionalidades implementadas

🌐 Integração com a API

Classe Api (utils/api.jsx) centraliza todas as chamadas HTTP: getUserInfo, getInitialCards, addCard, updateUserInfo, updateAvatar, changeLikeCardStatus e deleteCard

Todas as requisições assíncronas utilizam async/await e/ou .then()/.catch() para tratamento de sucesso e erro

🧩 Componente App

Novo componente raiz da aplicação, responsável por:

Buscar as informações do usuário (currentUser) e a lista de cartões (cards) via API ao carregar a aplicação (useEffect)

Centralizar o estado popup e as funções handleOpenPopup / handleClosePopup

Implementar os manipuladores handleUpdateUser, handleUpdateAvatar, handleCardLike, handleCardDelete e handleAddPlaceSubmit, todos fechando o popup automaticamente após o sucesso da requisição

Disponibilizar currentUser, handleUpdateUser e handleUpdateAvatar via CurrentUserContext.Provider

Passar popup, cards e os demais manipuladores para Main como props

👤 CurrentUserContext

Context API criado para compartilhar os dados do usuário logado (currentUser) e os manipuladores de atualização de perfil/avatar com qualquer componente da árvore, sem necessidade de repassar props manualmente em cada nível

🖼️ Componente Main

Recebe cards, popup e os manipuladores (onCardLike, onCardDelete, onAddPlaceSubmit, onOpenPopup, onClosePopup) via props, vindos de App

Consome currentUser através do CurrentUserContext

Renderiza a lista de cartões e monta o conteúdo de cada popup antes de abri-lo

🃏 Componente Card

Aciona onCardLike e onCardDelete (recebidos via props) para curtir/descurtir e deletar cartões, refletindo o resultado da API imediatamente na interface

📝 Componente EditProfile

Formulário gerenciado (useState + onChange) para editar nome e descrição do perfil

Usa os valores atuais de currentUser (via contexto) como valores iniciais dos campos

Ao submeter, chama handleUpdateUser, que atualiza os dados na API e fecha o popup

🖌️ Componente EditAvatar

Formulário utilizando useRef para capturar o link da nova imagem de avatar diretamente do DOM, sem controlar o valor a cada digitação

Ao submeter, chama handleUpdateAvatar (via contexto), que atualiza o avatar na API, reflete a mudança em currentUser e fecha o popup

➕ Componente NewCard

Formulário gerenciado (useState) com dois campos: título e link da imagem do novo cartão

Ao submeter, chama onAddPlaceSubmit (recebido via props), que cria o cartão na API e o insere no início da lista de cards

Limpa os campos do formulário após o envio bem-sucedido

🗑️ Componente RemoveCard

Estrutura mantida para uma futura implementação de confirmação de exclusão (ainda não conectada ao fluxo de deleção, que atualmente ocorre diretamente ao clicar no botão de deletar)

4️⃣ — Tecnologias utilizadas

HTML5 Estrutura semântica da aplicação.

CSS3 Estilização com BEM, media queries, grid, flexbox e responsividade completa.

JavaScript (ES6+) Manipulação de dados, Promises, async/await e lógica dos componentes.

React Componentização da interface, hooks (useState, useEffect, useContext, useRef), Context API e elevação de estado (lifting state up).

Vite Ambiente de build e desenvolvimento do projeto.

API REST Integração com o backend do TripleTen (around-api) para persistência de usuário e cartões.

GitHub Pages Hospedagem da versão final do projeto.

5️⃣ — Deploy do projeto

🔗 https://renatofalchi.github.io/web_project_around_react/