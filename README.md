Tripleten web_project_around_react

Sprint 13 — Introdução ao React 1️⃣ — Projeto: Sprint 13 — Renato Falchi Correia de Oliveira

Este projeto dá continuidade ao desenvolvimento do Around The U.S., agora migrando a aplicação da versão em JavaScript puro (OOP) para React. O foco desta sprint foi reestruturar a interface em componentes reutilizáveis, controlar o estado da aplicação com hooks e implementar a exibição condicional dos popups através de um único componente genérico.

2️⃣ — Objetivo do projeto

Reconstruir a estrutura da aplicação utilizando React, com foco em:

Dividir a interface em componentes reutilizáveis (Card, Popup, formulários)

Controlar a exibição dos popups através de estado (useState) no componente principal

Implementar um componente Popup genérico, capaz de renderizar diferentes conteúdos (formulários, imagem ampliada, confirmação de exclusão) via prop children

Exibir o popup de imagem ampliada ao clicar em um cartão

Exibir o popup de confirmação de exclusão ao clicar no botão de deletar um cartão

Passar dados entre componentes filho e pai através de props e callbacks

3️⃣ — Funcionalidades implementadas

🖼️ Componente Main

Componente principal da aplicação, responsável por:

Armazenar e renderizar a lista de cartões

Controlar qual popup está aberto no momento através de estado (popup)

Centralizar as funções de abertura e fechamento dos popups (handleOpenPopup, handleClosePopup)

Definir o conteúdo (title e children) de cada popup antes de abri-lo

🃏 Componente Card

Renderiza a imagem, o nome e os botões de curtir e deletar de cada cartão

Ao clicar na imagem, aciona o callback onClick recebido via props, abrindo o popup de imagem ampliada

Ao clicar no botão de deletar, aciona o callback onDeleteClick, abrindo o popup de confirmação de exclusão

🪟 Componente Popup

Componente genérico e reutilizável, responsável por renderizar qualquer conteúdo de popup

Recebe title, children e onClose via props

Alterna entre as classes de estilo popup__container e photoFrame__container dependendo do tipo de conteúdo exibido

🖼️ Componente ImagePopup

Exibe a imagem ampliada e a legenda do cartão clicado

Recebe o cartão selecionado via props

🗑️ Componente RemoveCard

Renderizado dentro do Popup ao clicar no botão de deletar de um cartão

Por enquanto, apenas exibe o botão de confirmação "Sim" (lógica de exclusão ainda não implementada)

📝 Componentes de formulário (NewCard, EditProfile, EditAvatar)

Renderizados dentro do Popup para adicionar novo cartão, editar informações do perfil e alterar o avatar

4️⃣ — Tecnologias utilizadas

HTML5 Estrutura semântica da aplicação.

CSS3 Estilização com BEM, media queries, grid, flexbox e responsividade completa.

JavaScript (ES6+) Manipulação de dados e lógica dos componentes.

React Componentização da interface, controle de estado com useState, comunicação entre componentes via props e callbacks.

Vite Ambiente de build e desenvolvimento do projeto.

GitHub Pages Hospedagem da versão final do projeto.

5️⃣ — Deploy do projeto

🔗 https://renatofalchi.github.io/web_project_around_react/