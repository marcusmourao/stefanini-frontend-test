# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: Com a tag async o download do script é realizado de forma assíncrona, assim o processo de renderização da página no é interrompido enquanto o download é realizado. Após o download o script é executado.
Com a tag defer o dowload também é realizado de forma assíncrona, porém a execuço do script só começa depois que a renderizaço da página estiver concluída. Por fim, no caso exemplo, o async tem prioridade sobre o defer, então em browsers que suportam async a opço defer é totalmente ignorada, essa é uma abordagem utilizada para proporcionar um fallback em casos em que os navegadores não suportem a tag async

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Esse parâmetro é utilizado para indicar qual será a função chamada após o carregamento da API

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: Quando removemos o parâmetro &callback nada aparece na tela desse projeto, pois a função que inicializa as funções do Maps e instancia um mapa não é chamada.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: window.onload = function initMap()... Com esse trecho de código indicamos que após o carregamento total da página a função initMap() deve ser executada.

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R:<link rel="manifest" href="manifest.json">

Serve para carregar o arquivo manifesto dessa aplicação. Esse arquivo fornece informações como nome do app. autor, ícone e descrição dentro de um arquivo texto. O arquivo manifesto possibilita que o app seja instalado na tela inicial de um dispositivo afim de proporcionar uma melhor experiência do usuário.

<meta name="theme-color" content="">

Utilizada para definir a cor tema do navegador.

<meta name="apple-mobile-web-app-capable" content="yes">

Possibilita que a aplicação seja executada em full screen em dispositivos mac ios.

<meta name="apple-mobile-web-app-status-bar-style" content="black">

Define o estilo da barra de status. Vale ressaltar que tal meta não possui efeito caso a anterior não seja definida também.


### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não, está aplicaço no pode ser considerada um PWA, para que a aplicaço seja considerada um PWA falta o arquivo manifest da mesma, assim como algumas otimizações através de services workers que podem habilitar um cache eficiente para a Bilioteca utilizada, possibilitando a utilizaço offline da aplicação e também a utilização de mais recursos do dispositivo como a geolocalizaço por exemplo.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R:

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: 

### c) Para que serve a tag ngFor do angular?
R:


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: 

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R:

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R:
