# Portfólio Pessoal

Este projeto é um portfólio pessoal desenvolvido com HTML, CSS e JavaScript, com o objetivo de apresentar os meus trabalhos e habilidades. Durante o desenvolvimento, foram utilizadas várias técnicas e abordagens que contribuíram para o aprendizado e melhoria das habilidades em desenvolvimento front-end.

## Tecnologias Utilizadas

- HTML5
- CSS (Flexbox, Media Queries, BEM)
- JavaScript (Manipulação do DOM)

## Aprendizagens e Boas Práticas Adquiridas

### 1. Novas Propriedades de CSS

#### 1.1 Flexbox

O Flexbox foi utilizado para construir layouts mais flexíveis e responsivos, facilitando a distribuição e alinhamento dos elementos na página.

- **justify-content**: Utilizado para alinhar os itens no eixo principal (horizontal ou vertical).
- **align-items**: Usado para alinhar os itens no eixo transversal.
- **flex-direction**: Define a direção dos itens no contêiner flexível (linha ou coluna).
- **gap**: Espaçamento entre os itens, utilizado em vez de margens para um código mais limpo e reutilizável.

#### 1.2 Media Queries

As Media Queries foram utilizadas para tornar o layout responsivo, adaptando o design para diferentes tamanhos de tela (mobile, tablet, desktop). Exemplos de uso:

```css
@media (min-width: 1200px) {
  #hero {
    flex-direction: row-reverse;
  }
}
```

#### 1.3 Metodologia BEM

A metodologia BEM (Block, Element, Modifier) ajudou na organização e nomenclatura das classes, tornando o código mais claro e escalável. Seguiu-se a convenção:

- **Bloco**: Componente independente do layout (e.g., `.sidebar`).
- **Elemento**: Parte do bloco que realiza uma função específica (e.g., `.sidebar_header`).
- **Modificador**: Variação ou estado de um bloco ou elemento (e.g., `sidebar_header__text`).

#### 1.4 Declaração de Variáveis

O uso de variáveis CSS permitiu reutilizar valores, como cores e tamanhos, em todo o código. Isso facilitou a manutenção e a atualização do design.

```css
:root {
  --background: #151515;
  --background-lighter: #171717;
}
```

#### 1.5 Organização de Código

O código foi separado em múltiplos ficheiros para melhorar a organização e manutenção:

- `main.css` para estilos gerais.
- `landing.css` para layout e posicionamento.
- `sidebar.css` para os estilos da sidebar.
- `utils.css` para os estilos utilitários.

#### 1.6 Utilização de Gap em Vez de Margin

A propriedade `gap` foi utilizada em contêineres com layout Flexbox para espaçar os elementos. Isso reduziu o uso de margens específicas, tornando as classes mais reutilizáveis.

### 2. Aprendizagens em JavaScript

#### 2.1 Funções

Foram criadas funções para modularizar o código e melhorar a legibilidade. Algumas funções recebiam argumentos nomeados para facilitar o entendimento.

```javascript
function changeTheme(color) {
  switch (color) {
    case "red":
      document.documentElement.style.setProperty("--primary-color", red);
      console.log("red");
      break;
  }
}
```

#### 2.2 Manipulação do DOM

Utilizou-se a manipulação do DOM para alterar o conteúdo e os estilos dos elementos, bem como para interagir com o usuário.

```javascript
function menu() {
  const btnMenu = document.querySelector("body");
  btnMenu.classList.toggle("sidebar-open");
}
```

#### 2.3 Uso de IDs para Links

Foram utilizados IDs para criar âncoras e permitir a navegação para seções específicas da página.

```html
<a class="line_decoration" href="#hero" onclick="menu()">Início</a>

<section id="education" class="education">
  <div>
    <div class="education__education">
      <h2 class="text_xl line_decoration--xl">Educação</h2>
    </div>
  </div>
</section>
```

## Organização do Projeto

A estrutura do projeto foi pensada para ser modular e fácil de entender:

```
/projeto-portfolio
├── /css
│   ├── landing.css
│   ├── main.css
│   ├── normalize.css
│   ├── sidebar.css
│   └── utils.css
├── /fonts
│   ├── Syne-Bold.oft
│   ├── Syne-Regular.oft
├── /img
│   ├── daniel.JPG
│   ├── favicon.ico
│   └── site.png
├── scripts.js
├── index.html
├── .gitignore
└── README.md
```

## Futuras Melhorias

- Adicionar animações para melhorar a experiência do usuário.
- Implementar um modo escuro.
- Melhorar a acessibilidade seguindo as boas práticas do WCAG.

## Conclusão

Este projeto foi uma oportunidade de aplicar e consolidar conhecimentos de desenvolvimento web. Documentar as aprendizagens no README é uma forma de registrar o progresso e refletir sobre as melhorias alcançadas.
