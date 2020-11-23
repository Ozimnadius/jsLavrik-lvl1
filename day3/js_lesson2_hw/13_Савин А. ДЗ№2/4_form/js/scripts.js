window.onload = (function(){
  var form = document.querySelector(".validate-this");

  form.addEventListener("submit", validate);

  function validate(e) {
    e.preventDefault();

    var form = this
      , inputs = form.querySelectorAll("[data-error]");

    clear(inputs, function() {
      checkIsEmpty(inputs);
    });

    function checkIsEmpty(inputs) {
      var isEmpty = false;

      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];

        if (input.value.trim() === "") {
          isEmpty = true;
          markInput(input);
        }
      }

      var inputsTypePassword = form.querySelectorAll("[type='password']")
        , checkPassComplete = checkPassword(inputsTypePassword);

      if (!isEmpty && checkPassComplete) {
        setTimeout(function() {
            alert("checking is complete");
            form.submit();
        }, 300);
      }

    }

    function markInput(input) {
      input.classList.add("error");
      var text = input.getAttribute("data-error");

      if (!text) return;

      var div = document.createElement("div");

      div.textContent = text;
      div.className = "error-text";
      input.parentNode.appendChild(div);
    }

    function clear(inputsItem, callback) {
      for (var i = 0; i < inputsItem.length; i++) {
        var input = inputsItem[i]
          , parent = input.parentNode
          , message = parent.querySelector(".error-text");

        input.classList.remove("error");
        if (message) parent.removeChild(message);
      }

      if (callback) callback();
    }
  }
}());
		

		
		
		
		
		
		
