
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    $(window).scroll(function() {

        if ($(window).scrollTop() + $(window).height() == $(document).height()) {

            console.log("Carregando mais serviços...");
        }
    });


    $("nav ul li a").click(function() {
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });


    $("#form-contato").submit(function(event) {
        event.preventDefault(); 


        var nome = $("#form-contato input[name='nome']").val();
        var email = $("#form-contato input[name='email']").val();
        var mensagem = $("#form-contato textarea[name='mensagem']").val();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        console.log("Enviando formulário...");
    });
