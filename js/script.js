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
                "Descricao": " durante os últimos trinta anos, o jornalista Elio Gaspari reuniu documentos até então inéditos e fez uma exaustiva pesquisa sobre o governo militar no Brasil. O resultado desse meticuloso trabalho gerou um conjunto de quatro volumes que compõe a obra mais importante sobre a história recente do país, e que acaba de ganhar uma edição revista e ampliada, enriquecida com novas fotos e projeto gráfico de Victor Burton."
            },

            {
                "Nome": "Marighella",
                "Autor": "Mario Magalhães", 
                "Ano": 2012,
                "Descricao": "o jornalista Mário Magalhães reconstitui a trepidante trajetória do revolucionário Carlos Marighella, militante do Partido Comunista Brasileiro e fundador da Ação Libertadora Nacional, o maior grupo armado de oposição à ditadura militar (1964-85)."
            },

            {
                "Nome": "1964",
                "Autor": "Angela de Castro",
                "Ano": 2014,
                "Descricao": "um panorama de como se instaurou a ditadura civil-militar no Brasil e seus desdobramentos. Pelas mãos de Jorge Ferreira e Ângela de Castro Gomes, é possível entender melhor esse conturbado período da história, que rendeu ao país duas décadas de repressão e tantas injustiças. Numa linguagem objetiva, sem exageros acadêmicos ou notas de rodapé excessivas, que tornem o texto menos atraente para o grande público, os autores destacam personagens e momentos que marcaram o período, relembrando falas de personalidades e trechos de jornais que noticiaram o Golpe."
            },

            {
                "Nome": "Bar Don Juan",
                "Autor": "Antonio Callado", 
                "Ano": 2014,
                "Descricao": "uma narrativa poderosa, que se mantém atual mesmo - ou principalmente - com o passar do tempo. Fala-se em esquerda festiva, dos intelectuais sonhadores, de um Brasil com uma efervescência política parecida com a dos protestos iniciados em junho de 2013, embora Callado tenha escrito há tantos anos. Marcado pela desilusão dos projetos de luta armada entre os setores de esquerda na classe média, o autor narra a vida de um grupo de amigos que se envolve no combate à ditadura em meio à discussões políticas na boemia carioca."
            },

            {
                "Nome": "Tropical sol da liberdade",
                "Autor": "Ana Maria Machado", 
                "Ano": 2012,
                "Descricao": "Maria Helena é uma jornalista que, após um longo período de exílio em função da ditadura militar no Brasil, volta para recuperar sua vida anterior e reencontrar a família. Instalada numa casa de praia em companhia da mãe, ela revisita cenas da infância e da juventude, e repassa os motivos que a fizeram deixar o país. Juntas, mãe e filha rememoram os momentos mais agudos da repressão, enquanto passam a limpo sua delicada convivência."
            },

            {
                "Nome": "Feliz Ano velho",
                "Autor": "Marcelo Rubens Paiva", 
                "Ano": 2015,
                "Descricao": "aos vinte anos, Marcelo sobe em uma pedra e mergulha numa lagoa imitando o Tio Patinhas. A lagoa é rasa, ele esmigalha uma vértebra e perde os movimentos do corpo. Escrito com sentido de urgência, o livro relata as mudanças irreversíveis na vida do garoto a partir do acidente. Ele é transferido de um hospital a outro, enfrenta médicos reticentes, luta para conquistar pequenas reações do corpo. Aos poucos, se dá conta de sua nova realidade, irreversível. Ao mesmo tempo ele recorda momentos tristes como quando seu pai desapareceu após ser preso político durante a ditadura militar."
            },

            {
                "Nome": "Os Carbonários",
                "Autor": "Alfredo Sirkis", 
                "Ano": 1998,
                "Descricao": "foi a partir do livro Os Carbonários que muitos brasileiros puderam compreender o que significou o Ato Institucional Número 5 (AI-5) as passeatas de 1968 os seqüestros dos embaixadores da Suíça e da Alemanha a libertação de presos políticos e as ações da ditadura para aniquilar as oposições "
            },

            {
                "Nome": "Ditadura e repressão",
                "Autor": "Anthony W. Pereira ", 
                "Ano": 2012,
                "Descricao": "Por que os regimes autoritários se deram ao trabalho de ''judiciar a repressão''? Se chegaram ao poder através da força, por que não continuaram a exercê-la? Ditadura e repressão, de Anthony W. Pereira, professor e diretor do Brazil Institute do King'' s College em Londres, investiga a legalidade autoritária ao analisar os aspectos legais das ditaduras militares em três países do cone sul: Brasil, Chile e Argentina."
            },

            {
                "Nome": "Brasil: nunca mais",
                "Autor": "Dom Paulo Evaristo Arns", 
                "Ano": 2014,
                "Descricao": "um grupo de especialistas dedicou-se durante 8 anos a reunir cópias de mais de 700 processos políticos que tramitaram pela Justiça Militar, entre abril de 64 e março de 79. O resumo desta pesquisa está neste livro. Um relato doloroso da repressão e tortura que se abateram sobre o Brasil."
            },

            {
                "Nome": "Ah como era boa a ditadura",
                "Autor": "Luiz Gê", 
                "Ano": 2015,
                "Descricao": "o Brasil é um país em constante processo de transformação política. Desde 2013, o povo vai às ruas. Entre as várias manifestações, uma chamou a atenção: o pedido de volta à ditadura militar que governou o país entre 1964 e 1985. Mas o que foi a ditadura e, sobretudo, qual o seu legado para o Brasil? Trabalhando na Folha de S.Paulo, o quadrinista Luiz Gê acompanhou de perto o processo de abertura política rumo à democracia, com brilhantes charges sobre o que viria a ser o Brasil democrático."
            },
       
            //  Livros de pessoas que sofreram a ditadura - FILEIRA 2

            {
                "Nome": "O Voo da Arara Azul", // Posiçõ 10
                "Autor": "Maria José Silveira", 
                "Ano": 2011,
                "Descricao": "A época é a ditadura militar no Brasil, em 1969. André tem 13 anos e é um adolescente inquieto e observador, que cria uma arara-azul em sua casa, em um bairro de classe média em São Paulo. Ele alimenta um amor platônico por Lia, uma mulher mais velha, engajada em questões políticas, que se muda para a casa ao lado."
            },

            {
                "Nome": "Em Nome Dos Pais",
                "Autor": "Matheus Leitão ", 
                "Ano": 2017,
                "Descricao": "movido pela curiosidade de compreender o passado, o jovem perguntador passou a recolher retalhos de uma história dolorosa, que se iniciou em 1972, no Espírito Santo, quando os pais militavam no PCdoB. Delatados por um companheiro, foram presos e torturados. Na ocasião, Míriam estava grávida de Vladimir, o primeiro filho do casal."
            },

            {
                "Nome": "Notas de um tempo silenciado",
                "Autor": "Robson Vilalba", 
                "Ano": 2015,
                "Descricao": "nem toda a história foi contada. Algumas permaneceram esquecidas, outras silenciadas... Mas nem por isso foram apagadas da memória individual e coletiva da resistência ao Golpe de 64. Um olhar profundo sobre a ditadura militar no Brasil. Um mosaico de elementos que, em sua particularidade, revelam a cada capítulo, a cada traço, o que teria sido viver e sobreviver à ditadura e, hoje, poder contá-la."
            },

            {
                "Nome": "Ainda estou aqui",
                "Autor": "Marcelo Rubens Paiva", 
                "Ano": 2015,
                "Descricao": "Eunice Paiva é uma mulher de muitas vidas. Casada com o deputado Rubens Paiva, esteve ao seu lado quando foi cassado e exilado, em 1964. Mãe de cinco filhos, passou a criá-los sozinha quando, em 1971, o marido foi preso por agentes da ditadura, a seguir torturado e morto. Em meio à dor, ela se reinventou. "
            },

            {
                "Nome": "Infância Roubada - Crianças Atingidas pela Ditadura no Brasil",
                "Autor": "Comissão da Verdade",
                "Ano": 2014,
                "Descricao": "nesta obra é apresentado uma visão diferente sobre o período ditatorial no Brasil, o olhar das crianças que tiveram suas infâncias roubadas pelo regime."
            },

            {
                "Nome": "K - relato de uma busca",
                "Autor": "Bernardo Kucinski", 
                "Ano": 2016,
                "Descricao": "em 1974, a irmã de Bernardo Kucinski, professora de Química na Universidade de São Paulo, é presa pelos militares ao lado do marido e desaparece sem deixar rastros. O pai dela, dono de uma loja no Bom Retiro e judeu imigrante que na juventude fora preso por suas atividades políticas, inicia então uma busca incansável pela filha e depara com a muralha de silêncio em torno do desaparecimento dos presos políticos. K. narra a história dessa busca."
            },

            {
                "Nome": "O que é isso, companheiro?",
                "Autor": "Fernando Gabeira", 
                "Ano": 2016,
                "Descricao": "documento histórico - esta seria a melhor maneira de classificar a narrativa que Fernando Gabeira empreende para nos contar, em primeira pessoa, como jovens guerrilheiros, em 1969, conseguiram realizar a mais espetacular proeza de um grupo de esquerda: o sequestro do embaixador americano. O então jornalista recém-saído do Jornal do Brasil e seus companheiros de organização ''trocaram'' a vida do embaixador pela libertação de 15 presos políticos "
            },

            {
                "Nome": "Volto semana que vem",
                "Autor": "Marilia Pilla", 
                "Ano": 2015,
                "Descricao": "''volto semana que vem” é o que a narradora deste livro responde ao pai ao sair de casa num dia de 1970, quando ele pergunta, espantado, aonde ela vai. “Mais de dez anos se passaram até eu voltar àquela cozinha”, conclui ela em seguida. Composto por recortes de memória, o livro é o retrato de uma vida brasileira exemplar: a de quem foi criança logo depois da Era Vargas (o dia do suicídio de Getúlio é uma das primeiras cenas evocadas aqui), cresceu nos tempos de Juscelino, foi jovem com a ditadura, militou com a esquerda, conheceu a prisão, a tortura e o exílio."
            },

            {
                "Nome": "A Verdade Sufocada - A história que a esquerda não quer que o Brasil conheça",
                "Autor": "Coronel Carlos Alberto Brilhante Ustra", 
                "Ano": 2015,
                "Descricao": "Comandei o doi/codi/ii exército, de 29/09/1970 a 23/01/1974, período em que as organizações terroristas atuaram com maior intensidade. Neste livro conto como os órgãos de segurança as derrotaram. Na luta armada, lamentavelmente, tivemos cerca de 500 vítimas, de ambos os lados, um número bastante reduzido se o compararmos com os demais países da américa latina que, também, enfrentaram o terrorismo. Além dos relatos, procuro desfazer mitos, farsas e mentiras divulgadas para manipular a opinião pública e para desacreditar e desmoralizar aqueles que as venceram. - Carlos Alberto Ustra."
            },

            {
                "Nome": "Como ser um ditador",
                "Autor": "Mikal Hem", 
                "Ano": 2021,
                "Descricao": "Alguns entre nós sonham em se perpetuar no poder, porém, sem o incômodo das eleições democráticas, conquista de votos e debates eleitorais. A separação dos poderes, mídia livre, acordos internacionais, para alguns políticos, não são nada mais do que obstáculos a serem superados. O livro Como ser um ditador?, do jornalista Mikal Hem, traz todos os truques para se chegar e permanecer no topo ― bem como as melhores maneiras de se desfrutar do poder ilimitado.Trazendo o exemplo dos ditadores de maior sucesso ― incluindo Kim Jong Il, Robert Mugabe, Muammar Gaddafi, Nicolae Ceausescu e François “Papa Doc” Duvalier ―, este guia prático oferece dez lições fáceis sobre como conquistar sua própria ditadura, incluindo importantes dicas sobre fraude eleitoral, criação de um culto à personalidade e as roupas da moda nesse universo de poder absoluto."
            }
        ]
    }

    
