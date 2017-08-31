document.forms.contact.addEventListener('submit', function(e){
    e.preventDefault();

    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');

    if(name.value == '' && surname.value == '') {
        alert('fail');
    }
    else {
        alert ('good');
    }
});