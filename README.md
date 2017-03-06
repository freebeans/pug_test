# Ambiente para testar com PUG.

### Executar
Rode ```nodemon``` para compilar o template com os dados.
Quando o template ou os dados forem modificados, a atualização será automática.

### Instalar
Rodar ```npm install``` para instalar o pug e o nodemon.
No Chrome, pode-se instalar o [Easy Auto Refresh](https://chrome.google.com/webstore/detail/easy-auto-refresh/aabcgdmkeabbnleenpncegpcngjpnjkc) para atualizar a página gerada.

### Arquivos relevantes     
|Nome|Função|
|-|-|
|template.pug|Template em PUG|
|dados.json|Dados que serão aplicados ao template|
|output.html|Página gerada (pode ser aberta no browser)|

### Arquivos secundários    
|Nome|Função|
|-|-|
|compile.js| script para executar o pug|
|nodemon.json|configurações do nodemon|
|package.json|configurações do nodemon|
