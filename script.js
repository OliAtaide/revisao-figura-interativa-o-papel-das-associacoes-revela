timeline = [
    {
        ano: '1543',
        imagem: 'timeline1/imagem1.jpg',
        texto: `
        A Santa Casa de Misericórdia de Santos foi a primeira instituição não governamental que se tem notícia no Brasil.
        As Santas Casas de Misericórdia eram mantidas pela Igreja Católica e exerciam atendimentos de saúde aos enfermos,
        amparo a velhice e a infância.

        `
    }, {
        ano: '1935',
        imagem: 'timeline1/imagem2.jpeg',
        texto: `
        O segundo momento histórico oficial do Terceiro Setor ocorreu durante o Governo de Getúlio Vargas,
        em 28/08/1935. A Federação promulgou a lei nº 91 de Concessão de Títulos de Utilidade Pública Federal (TUP),
        que foi regulamentada por decreto Federal somente em 1961: “Podem ser declaradas de utilidade pública as sociedades civis,
        associações e fundações, constituídas no país, que sirvam de forma desinteressada à coletividade.”  
        `
    },
    {
        ano: '1938',
        imagem: 'timeline1/imagem3.jpeg',
        texto: `
        Em 1º de junho de 1938 foi criado o Conselho Nacional de Serviço Social (CNSS),
        estabelecendo o direito das instituições nele inscritas receberem subsídios governamentais para levar a cabo suas ações.
        Esta data representa o primeiro movimento de regulação pública da Assistência Social no Brasil e, neste período,
        a Igreja Católica  continuava sendo a principal Instituição na prestação de serviços sociais.
        `
    },
    {
        ano: '1942',
        imagem: 'timeline1/imagem4.jpg',
        texto: `
        Em 1942, foi fundada a Legião Brasileira de Assistência (LBA). Financiada pelo Estado,
        a LBA tinha por objetivo principal prestar assistência às famílias dos soldados mobilizados para a Segunda Guerra Mundial. 
        `
    },
    {
        ano: '1950',
        imagem: 'timeline1/imagem5.jpg',
        texto: `
        Ano em que a expressão “Organização não Governamental” foi empregada pela primeira em uma resolução do Conselho Econômico e Social da Organização das Nações Unidas (ONU) para fazer referência às organizações civis que não tinham nenhum vínculo com o governo.
        
        <br/><br/>
        <small>Fonte: ONGS: O que são e qual sua relevância?https://www.politize.com.br/ong-o-que-eacesso em 14/06/2020 as 13:05</small>
        `
    },
    {
        ano: 'Anos 70',
        imagem: 'timeline1/imagem6.jpg',
        texto: 'Já havia mais de 10 mil ONGs no Brasil.'
    },
    {
        ano: '1980',
        imagem: 'timeline1/imagem7.jpeg',
        texto: `
        Com a redemocratização do país, houve a diminuição da intervenção estatal nas questões sociais.
        Assim, as questões que envolviam cidadania e direitos fundamentais passam a ser o foco principal
        das organizações sem fins lucrativos.
        `
    },
    {
        ano: '2020',
        imagem: 'timeline1/imagem8.jpg',
        texto: 'O Brasil tem atualmente cerca de 800 mil Organizações da Sociedade Civil - OSC.'
    }
]


timeline.forEach(function (v, i) {
    console.log(v, i);
    var lado;
    if (i % 2 == 0) {
        lado = 'left';
    }
    else {
        lado = 'right'
    }
    $('.tl-btn').before(
        `
        <div class="tl-container ` + lado + `">
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title mb-3">
                        `
        + v.ano +
        `
                    </h1>
                    <img src="imgs/`
                    + v.imagem +
                    `" alt="" class="card-img mb-3">
                    <div class="card-text">
                        `
        + v.texto +
        `
                    </div>
                </div>
            </div>
        </div>
    `
    )
});

$('.tl-btn').click(function () {
    window.scrollTo(0,0);
})

