$(document).ready(function () {

    $('form').on("submit", function (e) {
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li id="cross-event"> ${novaTarefa} </li>`);
        $(novoItem).appendTo('ul');
        $('nome-tarefa').val('');
    })

    $('#riscar-text').on('clicsk', 'li', function () {
        $(this).addClass('clicked');
    });
})