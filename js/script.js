if (document.body.classList.contains('contato')) {
    const form = document.getElementById('contato-form');
    const campos = document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.span-required');
    const emailRegex = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/; // validação recomendada pela RFC 5322 como está descrito no site https://www.baeldung.com/java-email-validation-regex
    const fields = document.querySelectorAll('.field');
    const button = document.querySelector('.btn');
    let isError = true;

    function brownAndWhite() { button.style.backgroundColor = "#41333b"; button.style.color = '#fff' };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validarNome();
        validarEmail();
        validarMensagem();
        if (isError == false) {
            console.log(isError);
            form.submit();
        }
    })

    function setError(index) {
        campos[index].style.border = '1px solid #e63636';
        spans[index].style.display = 'inline-block';
        spans[index].style.marginBottom = "5px";
        fields[index].style.marginBottom = "0";
    }

    function removeError(index) {
        campos[index].style.border = '';
        spans[index].style.display = 'none';
        spans[index].style.marginBottom = "20px";
        fields[index].style.marginBottom = "20px";
    }

    function validarNome() {
        if (campos[0].value.length < 3) {
            isError = true;
            setError(0);
        } else {
            isError = false;
            removeError(0);
        }
    }

    function validarEmail() {
        if (!emailRegex.test(campos[1].value)) {
            isError = true;
            setError(1);
        } else {
            isError = false;
            removeError(1);
        }
    }

    function validarMensagem() {
        if (campos[2].value.length < 30) {
            isError = true;
            setError(2);
        } else {
            isError = false;
            removeError(2);
        }
    }

}

if (document.body.classList.contains('indicacoes')) {
    const productContainers = [...document.querySelectorAll('.books-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}

function redirectTo(numero) {
    localStorage.setItem("numeroDoLivro", numero);
    window.location.href = 'mostrar-livro.html' // redirect
}

if (document.body.classList.contains('mostrar-livro')) {
    window.onload = function () 
     {
        var teste;
        // Usar Hash?? https://stackoverflow.com/questions/21875390/redirect-page-and-call-javascript-function
        document.getElementById('titulo').innerHTML = livrosJson.Livros[localStorage.getItem("numeroDoLivro")].Nome; 
        document.getElementById('autor').innerHTML = livrosJson.Livros[localStorage.getItem("numeroDoLivro")].Autor; 
        document.getElementById('ano').innerHTML = livrosJson.Livros[localStorage.getItem("numeroDoLivro")].Ano; 
        document.getElementById('descricao').innerHTML = livrosJson.Livros[localStorage.getItem("numeroDoLivro")].Descricao;
        document.getElementById('imagem').src = "imagens/livro" +localStorage.getItem("numeroDoLivro") + ".jpg"; // SEMPRE UTILIZAR O NOME "livro" + "numero" nas imagens, exemplo "livro0", "livro1"
        localStorage.removeItem("numeroDoLivro");
    }
}

    let livrosJson =
    {
        "Livros": [

            {   
                "Nome": "Livro 0",
                "Autor": "Autor 1", // Posição 0
                "Ano": 2004,
                "Descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nec tincidunt praesent semper feugiat nibh. In nibh mauris cursus mattis. Fames ac turpis egestas integer eget aliquet nibh praesent. Facilisis sed odio morbi quis commodo odio aenean. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Vel turpis nunc eget lorem dolor sed viverra. Sed viverra tellus in hac. Sed enim ut sem viverra aliquet eget sit amet. Malesuada pellentesque elit eget gravida cum sociis natoque. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Ipsum faucibus vitae aliquet nec ullamcorper. Quam id leo in vitae turpis massa sed. Vitae et leo duis ut diam quam. Ut morbi tincidunt augue interdum velit euismod in pellentesque."
            },

            {
                "Nome": "Livro 1",
                "Autor": "Autor 1", 
                "Ano": 2005,
                "Descricao": "1Lalalalalalalalalal 01 101 10101001010101 Lalalalalalalalalal 01 101 10101001010101 Lalalalalalalalalal 01 101 10101001010101"
            },

            {
                "Nome": "Livro 2",
                "Autor": "Autor 2",
                "Ano": 2006,
                "Descricao": "2Lalalalalalalalalal 01 101 10101001010101 Lalalalalalalalalal 01 101 10101001010101 Lalalalalalalalalal 01 101 10101001010102"
            },

            {
                "Nome": "Livro 3",
                "Autor": "Autor 3",
                "Ano": 2006,
                "Descricao": "bla bla bla"
            },

            {
                "Nome": "Livro 4",
                "Autor": "Autor 4",
                "Ano": 2006,
                "Descricao": "bla bla bla"
            },

            {
                "Nome": "Livro 5",
                "Autor": "Autor 5", // Posição 5
                "Ano": 2006,
                "Descricao": "bla bla bla"
            },
        ]
    }
