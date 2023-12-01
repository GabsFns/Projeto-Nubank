/*Aqui, uma nova instância de IntersectionObserver 
é criada, recebendo uma função de callback como 
parâmetro. Essa função de callback será executada 
sempre que um dos elementos observados intersectar 
(tornar-se visível) ou deixar de intersectar o viewport.*/
const myObserver = new IntersectionObserver((entries) => {
/*A função de callback recebe um array entries que contém 
objetos representando os elementos observados. Para cada entrada 
(entry) no array, a lógica dentro do bloco de código será aplicada. */
 entries.forEach((entry) => {
    if(entry.isIntersecting){
//Aqui, verifica-se se o elemento está atualmente intersectando o viewport 
        entry.target.classList.add('show')
/*  Se estiver, a classe CSS 'show' é adicionada ao elemento; caso contrário, 
a classe é removida. Essa lógica controla a visibilidade do elemento conforme 
ele entra ou sai da área visível na tela.*/        
    } else {
        entry.target.classList.remove('show')
    }
  })
})

/*Seleciona todos os elementos com a classe CSS .
last-one e entre outros e armazena-os na variável elements.*/
const elements = document.querySelectorAll('.last-one')
const elements2 = document.querySelectorAll('.last-one2')
const elements3 = document.querySelectorAll('.ani')
const elements4 = document.querySelectorAll('.ani-figure')

/* Para cada elemento na coleção elements, o myObserver é 
configurado para observar esse elemento. Isso significa 
que a função de callback definida anteriormente será chamada 
sempre que esse elemento intersectar ou deixar de intersectar o viewport.*/
elements.forEach((element) => myObserver.observe(element))
elements2.forEach((element) => myObserver.observe(element))
elements3.forEach((element) => myObserver.observe(element))
elements4.forEach((element) => myObserver.observe(element))


/*Em resumo, essas linhas de código implementam um mecanismo de 
observação de elementos que, ao entrarem na área visível da tela durante 
a rolagem, ativam a adição da classe 'show', proporcionando efeitos de 
animação conforme definido no CSS. Esse tipo de técnica é comumente 
usado para criar animações de rolagem suaves e interativas em páginas 
da web.*/