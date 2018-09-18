

// JAVASCRIPT FOR PAGE 7 FORM 

var form = document.getElementById('Formy');

form.onsubmit = function(event) {
    // preventDefault - stops the default functionality of the form
    event.preventDefault();
    var result = document.getElementById('result');
    // 
    result.innerHTML = 'YES!' + form.FirstName.value;
    // form.reset is going to delete the information from the form and reset it
    form.reset();
};


