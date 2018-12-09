# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: Com a tag async o download do script é realizado de forma assíncrona, assim o processo de renderização da página não é interrompido enquanto o download é realizado. Após o download o script é executado.
Com a tag defer o dowload também é realizado de forma assíncrona, porém a execução do script só começa depois que a renderização da página estiver concluída. Por fim, no caso exemplo, o async tem prioridade sobre o defer, então em browsers que suportam async a opção defer é totalmente ignorada, essa é uma abordagem utilizada para proporcionar um fallback em casos em que os navegadores não suportem a tag async

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

R:
`<link rel="manifest" href="manifest.json">`

Serve para carregar o arquivo manifesto dessa aplicação. Esse arquivo fornece informações como nome do app. autor, ícone e descrição dentro de um arquivo texto. O arquivo manifesto possibilita que o app seja instalado na tela inicial de um dispositivo afim de proporcionar uma melhor experiência do usuário.

`<meta name="theme-color" content="">`

Utilizada para definir a cor tema do navegador.

`<meta name="apple-mobile-web-app-capable" content="yes">`

Possibilita que a aplicação seja executada em full screen em dispositivos mac ios.

`<meta name="apple-mobile-web-app-status-bar-style" content="black">`

Define o estilo da barra de status. Vale ressaltar que tal meta não possui efeito caso a anterior não seja definida também.


### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não, está aplicaço no pode ser considerada um PWA, para que a aplicaço seja considerada um PWA falta o arquivo manifest da mesma, assim como algumas otimizações através de services workers que podem habilitar um cache eficiente para a Bilioteca utilizada, possibilitando a utilizaço offline da aplicação e também a utilização de mais recursos do dispositivo como a geolocalizaço por exemplo.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R: `ngOnChanges()`
É executado quando o Angular redefine alguma propriedade "data-bound". O método recebe como parâmetro um objeto que possue o último estado da propriedade e o seu valor atual

Called before ngOnInit() and whenever one or more data-bound input properties change.

`ngOnInit()`
Responsável por inicializar a diretiva ou o componente após o Angular realizar a "montagem do componente". É chamado apenas uma vez, depois da primeira chamada de `ngOnChanges()`

`ngDoCheck()`	
Detecta e executa de acordo com mudanças que o Angular não pode detectar sozinho. É chamado durante toda execução de detecção de mudança.

`ngAfterContentInit()`	
Executado depois que o Angular projeta todo o conteúdo do componente na view.

ngAfterContentChecked()	
Executado depois que o Angular projeta todo o conteúdo do componente na view para checar o conteúdo.
É executado depois de todo `ngDoCheck()`


`ngAfterViewInit()`	
Executado após o Angular inicializar a view do componente corrente e de todos os seus componentes filhos.

`ngAfterViewChecked()`	
Executado depois que o Angular checa o componente e seus componentes filhos.
É executado antes de `ngAfterViewInit()` e sempre após `ngAfterContentChecked()`

`ngOnDestroy()`
É executado para limpar/destruir código não mais utilizado antes do Angular destruir o componente. Nesse método os "watchers" são destruídos e os "listeners" de eventos também, para evitar leaks de memória.

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: 
"Web Components" é um conceito que permitem criar novas tags HTML personalizadas, reutilizáveis e encapsuladas para usar em  páginas web ou em outros componentes que você desejar. Web Componentes funcionam em navegadores modernos e podem ser usados com qualquer biblioteca JavaScript ou framework que funcione com o HTML.
Todos os Web Components são baseados em tags HTML existentes ou em outros componentes já definidos. Podemos fazer uma pequena assimilação entre Web Components e Templates, pois ambos possuem uma base imutável, são altamente reutilizaveis e podem ter trechos personalizados.
Além dessas características, cada componente deve ter um conjunto de funcionalidades, as quais ele é capaz de executar independente de outros componentes presentes em sua página.Por exemplo, vamos supor que temos um input que aplica uma máscara de CEP em seu valor e depois faz algumas chamadas de API para conseguir pegar um endereço de acordo com esse CEP. Poderíamos componentizar esse input, assim em qualquer tela da nossa aplicação poderíamos apenas importar esse componente e conseguiríamos obter nossa localização baseada no CEP.
Vantagens: Altamente modular, fácil manutenção, possibilidade de ser instanciado dinâmicamente, alta coesão e baixo acoplamento.

### c) Para que serve a tag ngFor do angular?
R: A tag ngFor é utilizada para realizar um loop em um objeto/array iterável.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R: Esse código representa que a classe `ListPage` possuí uma variável de nome legends a qual é do tipo `Array de Strings` e seu valor inicial é um array vazio.

### e) Como funciona a api Events do Ionic? Para que serve?
R: A API Events do Ionic funciona como um sistema de eventos para a aplicação, essa api funciona com a emissão/publicação de eventos em um certo "namespace" e o registro de um ou mais "listeners" para esse evento. Quando um listener identificada a emissão de um evento ele trata esse evento. Essa api serve para a comunicação de diferentes componentes dentro de uma aplicação.

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: Flexbox é um modelo de layout da Web CSS3. Com o flexbox é possível que elementos responsivos sejão organizados automaticamente dentro de um container de acordo com o tamanho da tela.

`ion-grid`
Essa tag é um poderoso sistema de flexbox desenvolvido seguindo a metodologia "Mobile First". Ele indica o início de um contaner flex.

`ion-row`
É uma tag que representa um componente horizontal que ocupa a largura total disponível dentro de um sistema grid. Essa tag pode conter um número variável de colunas para melhorar a responsividade como um todo.

`ion-col`
É uma tag que representa uma célula dentro do sitema grid. Toda `ion-col` deve ser definida dentro de uma tag `ion-row`. O conteúdo dentro de uma tag como esta se expande para preencher toda a linha de forma responsiva.

As vantagens de utilizarmos essas tags é que as mesmas possibilitam a implementaão um sistema de alta responsividade de forma elegante e em uma alta velocidade, pois elas abstraem toda a complexidade do mesmo em uma forma que nossos cérebros conseguem entender melhor, assim podemos contruir layouts poderosos, responsivos e performaticos com maior facilidade.


## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:
1. O projeto não compilava devido ao erro de importação do `LoadingController` corrigido no commit https://github.com/marcusmourao/stefanini-frontend-test/commit/dcf177522e03c9f48decddf47a4c7ea484da23a9
2. Erro ao esconder modal de "carregando" corrigido no commit https://github.com/marcusmourao/stefanini-frontend-test/commit/ef3e67c7e549a95e925da437a02c38634d18ba49

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:
1. Projeto no compilava
2. Erro ao esconder modal de "carregando"

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 
Considerando que não era possível executar o projeto, considero que o primeiro erro a ser corrigido deveria ser o erro 1 citado anteriormente, pois ele tinha um nível de complexidade extremamente baixo e sem corrgir o mesmo seria impossível realizar qualquer outra correção.

 O segundo erro não permitia que o modal de "carregando" sumisse, e isso causava uma experiência horrível para o usuário. Foi extremamente fácil resolver o problema e com a correção a experiência do usuário no foi mais comprometida.
 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R: O comando `async` indica que o método `presentLoading` é assíncrono, ou seja, sua execução começa, mas isso não impede que o codigo subsequente continue executando. O comando `await` indica que naquele contexto, a próxima linha de código só será executada depois que a função assíncrona `this.loadingController.create...` estiver sido concluída.

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: Os comandos `async` e `await` facilitam o entendimento que códigos e chamadas assíncronas, o código fica mais legível por podermos representar mais código com menos termos léxicos e facilita a compreensão de quais pontos o código é executado de forma assíncrona e quais pontos é executado de forma síncrona.

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R:
A lib 'lodash' fornece várias funções utilitárias para uma aplicação. Nesse caso estamos realizando a importação de todas as funções/métodos/constantes que foram exportados pela lib e estámos "movendo" tudo para o objeto `_`. Nessa aplicação estamos utilizando apenas a função `isNil(value)`, a qual checa se a variável é `null` ou `undefined`.
