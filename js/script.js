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
                // Posição 0
                "Nome": "A ditadura envergonhada",
                "Autor": "Elio Gaspari", 
                "Ano": 2014,
                "Descricao": " Durante os últimos trinta anos, o jornalista Elio Gaspari reuniu documentos até então inéditos e fez uma exaustiva pesquisa sobre o governo militar no Brasil. O resultado desse meticuloso trabalho gerou um conjunto de quatro volumes que compõe a obra mais importante sobre a história recente do país, e que acaba de ganhar uma edição revista e ampliada, enriquecida com novas fotos e projeto gráfico de Victor Burton."
            },

            {
                "Nome": "Marighella",
                "Autor": "Mario Magalhães", 
                "Ano": 2012,
                "Descricao": "O jornalista Mário Magalhães reconstitui a trepidante trajetória do revolucionário Carlos Marighella, militante do Partido Comunista Brasileiro e fundador da Ação Libertadora Nacional, o maior grupo armado de oposição à ditadura militar (1964-85)."
            },

            {
                "Nome": "1964",
                "Autor": "Angela de Castro",
                "Ano": 2014,
                "Descricao": "Um panorama de como se instaurou a ditadura civil-militar no Brasil e seus desdobramentos. Pelas mãos de Jorge Ferreira e Ângela de Castro Gomes, é possível entender melhor esse conturbado período da história, que rendeu ao país duas décadas de repressão e tantas injustiças. Numa linguagem objetiva, sem exageros acadêmicos ou notas de rodapé excessivas, que tornem o texto menos atraente para o grande público, os autores destacam personagens e momentos que marcaram o período, relembrando falas de personalidades e trechos de jornais que noticiaram o Golpe."
            },

            {
                "Nome": "Infância Roubada - Crianças Atingidas pela Ditadura no Brasil",
                "Autor": "Comissão da Verdade",
                "Ano": 2014,
                "Descricao": "Nesta obra é apresentado uma visão diferente sobre o período ditatorial no Brasil, o olhar das crianças que tiveram suas infâncias roubadas pelo regime."
            },

            {
                "Nome": "As meninas",
                "Autor": "Lygia Fagundes Telles", 
                "Ano": 2009,
                "Descricao": "A burguesa Lorena, filha de família quatrocentona, nutre veleidades artísticas e literárias. Namora um homem casado, mas permanece virgem. A drogada Ana Clara, linda como uma modelo, divide-se entre o noivo rico e o amante traficante. Lia, por fim, milita num grupo da esquerda armada e sofre pelo namorado preso. As meninas colhe essas três criaturas em pleno movimento, num momento de impasse em suas vidas."
            },

            {
                "Nome": "Volto semana que vem",
                "Autor": "Marilia Pilla ", 
                "Ano": 2015,
                "Descricao": "Volto semana que vem” é o que a narradora deste livro responde ao pai ao sair de casa num dia de 1970, quando ele pergunta, espantado, aonde ela vai. “Mais de dez anos se passaram até eu voltar àquela cozinha”, conclui ela em seguida. Composto por recortes de memória, o livro é o retrato de uma vida brasileira exemplar: a de quem foi criança logo depois da Era Vargas (o dia do suicídio de Getúlio é uma das primeiras cenas evocadas aqui), cresceu nos tempos de Juscelino, foi jovem com a ditadura, militou com a esquerda, conheceu a prisão, a tortura e o exílio."
            },

            {
                "Nome": "Bar Don Juan",
                "Autor": "Antonio Callado", 
                "Ano": 2014,
                "Descricao": "Uma narrativa poderosa, que se mantém atual mesmo – ou principalmente – com o passar do tempo. Fala-se em esquerda festiva, dos intelectuais sonhadores, de um Brasil com uma efervescência política parecida com a dos protestos iniciados em junho de 2013, embora Callado tenha escrito há tantos anos. Marcado pela desilusão dos projetos de luta armada entre os setores de esquerda na classe média, o autor narra a vida de um grupo de amigos que se envolve no combate à ditadura em meio à discussões políticas na boemia carioca. • Continuação de Quarup, romance que foi publicado anteriormente."
            },

            {
                "Nome": "Tropical sol da liberdade",
                "Autor": "Ana Maria Machado", 
                "Ano": 2012,
                "Descricao": "Maria Helena é uma jornalista que, após um longo período de exílio em função da ditadura militar no Brasil, volta para recuperar sua vida anterior e reencontrar a família. Instalada numa casa de praia em companhia da mãe, ela revisita cenas da infância e da juventude, e repassa os motivos que a fizeram deixar o país. Juntas, mãe e filha rememoram os momentos mais agudos da repressão, enquanto passam a limpo sua delicada convivência."
            },

            {
                "Nome": "Os Que Bebem Como Os Cães",
                "Autor": " Assis Brasil", 
                "Ano": 1975,
                "Descricao": "Romance que narra a história de Jeremias, um prisioneiro que sofreu lavagem cerebral e perdeu a memória. Sem saber o motivo de sua prisão, tenta se adaptar a rotina torturante do cárcere, em condições sub humanas. Algemado dentro de uma cela, com as mãos para trás, recebe uma soa com droga, para que não tenha noção do tempo. Para tomá-la, abaixa-se igualmente a um cão."
            },


        ]
    }

    
