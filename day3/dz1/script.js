window.onload = function () {

    let p = new Popup();

    document.querySelector('.openModal').addEventListener('click', function () {
        p.open('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis ea exercitationem modi nam, neque nulla sequi suscipit tempore voluptatem! Assumenda cupiditate ex facere hic, nam quas quasi sapiente similique velit veritatis! Asperiores, debitis ducimus eveniet fuga in minus, nulla perferendis perspiciatis placeat quas quia repellendus reprehenderit sapiente. A corporis dolor dolorum eum excepturi iure minima mollitia necessitatibus, nesciunt perspiciatis quaerat quisquam sint soluta tempora tempore tenetur unde veniam veritatis voluptatem voluptatum. Adipisci aliquid, autem eaque et eum eveniet labore possimus reiciendis saepe ullam! A, atque eaque explicabo minima obcaecati quod quos? Adipisci, consectetur fugit id ipsum magnam odit reiciendis.')
    });

};

function Popup() {
    let popup = this,
        overlay = document.createElement('div'),
        modal = document.createElement('div');

    overlay.classList.add('popup');
    modal.classList.add('modal');
    document.body.append(overlay);
    document.body.append(modal);

    this.open = function (content) {
        overlay.classList.add('active');
        modal.innerHTML = content;
        modal.classList.add('active');
    };

    this.close = function () {
        overlay.classList.remove('active');
        modal.innerHTML = '';
        modal.classList.remove('active');
    };

    overlay.addEventListener('click', popup.close);
}