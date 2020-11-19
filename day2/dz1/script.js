window.onload = function () {
  let form =  document.querySelector('form');
  let inputs = document.querySelectorAll('input');
  form.addEventListener('submit', validate);

  function validate() {
      let error = false;


      for (let i=0; i< inputs.length;i++){
          let field = inputs[i];

          if (!checkField(field)){
              field.classList.add('error');
              error = true;
          }
      }

      if (error){
          event.preventDefault();
      } else {
          alert('Валидация успешна');
      }

  }

    for (let i=0; i< inputs.length;i++){
        let field = inputs[i].oninput = function (e) {
            this.classList.remove('error');
        };
    }

  function checkField(field) {

      let val = field.value;
      let type = field.type;

      if (type=='text'){
          return val.length>0;
      } else {
          return val.length>5;
      }
  }

};