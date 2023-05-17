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
    window.scrollTo(0, 0);
})

