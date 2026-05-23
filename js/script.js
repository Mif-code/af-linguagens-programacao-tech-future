/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Tech Future - Portal de Tecnologia e Inovação
Aluno 1: Moises Ivanildo Ferreira - RA: 251553
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

// Função 1: botão voltar ao topo com manipulação de DOM e evento de scroll
const btnTopo = document.querySelector('#btnTopo');

window.addEventListener('scroll', function () {

    if (window.scrollY > 300) {

        btnTopo.classList.add('mostrar');

    } else {

        btnTopo.classList.remove('mostrar');

    }

});

btnTopo.addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

// Função 2: alternância de tema claro/escuro
const btnTema = document.querySelector('#btnTema');

btnTema.addEventListener('click', function () {

    document.body.classList.toggle('tema-escuro');

});

// Função 3: destaque visual nos cards usando eventos de mouse
const cards = document.querySelectorAll('.card-personalizado');

cards.forEach(function (card) {

    card.addEventListener('mouseenter', function () {

        card.classList.add('card-destaque-js');

    });

    card.addEventListener('mouseleave', function () {

        card.classList.remove('card-destaque-js');

    });

});

// Função 4: filtro simples de cards da galeria por categoria
const botoesFiltro = document.querySelectorAll('.filtro-btn');
const itensGaleria = document.querySelectorAll('.item-galeria');

botoesFiltro.forEach(function (botao) {

    botao.addEventListener('click', function () {

        const categoria = botao.dataset.categoria;

        botoesFiltro.forEach(function (btn) {

            btn.classList.remove('ativo');

        });

        botao.classList.add('ativo');

        itensGaleria.forEach(function (item) {

            if (
                categoria === 'todos' ||
                item.dataset.categoria === categoria
            ) {

                item.style.display = 'block';

            } else {

                item.style.display = 'none';

            }

        });

    });

});

// Função 5: validação do formulário de contato
const formulario = document.querySelector('#formContato');

if (formulario) {

    formulario.addEventListener('submit', function (event) {

        event.preventDefault();

        const nome = document.querySelector('#nome').value.trim();

        const email = document.querySelector('#email').value.trim();

        const mensagem = document.querySelector('#mensagem').value.trim();

        if (
            nome === '' ||
            email === '' ||
            mensagem === ''
        ) {

            alert('Por favor, preencha os campos obrigatórios.');

        } else {

            alert(
                'Mensagem enviada com sucesso! Em breve a equipe Tech Future retornará o contato.'
            );

            formulario.reset();

        }

    });

}

// Função extra: efeito visual simples ao carregar a página
window.addEventListener('load', function () {

    document.body.classList.add('pagina-carregada');

});