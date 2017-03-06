var fs   = require('fs')
var pug  = require('pug')
var dados = require('./dados.json')

const compiledTemplate = pug.compileFile('template.pug');
var html = compiledTemplate(dados);

fs.writeFile("output.html", html, function(err){
  if(err){
    return console.log(err);
  }

  console.log(html);
})
