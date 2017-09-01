document.forms['contact'].addEventListener('submit', function(e){
    e.preventDefault();

    var name = document.forms['contact'].name;
    var surname = document.forms['contact'].vorname;
    var email = document.forms['contact'].email;
    var note = document.forms['contact'].note;
    var error = document.getElementById('error');

    //reGex
    var string_reg = new RegExp("^([a-zA-Z ]{3,})$");
    var mail_reg = new RegExp('^([a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6})$')


    var valid_name = string_reg.test(name.value);
    var valid_surname = string_reg.test(surname.value);
    var valid_mail = mail_reg.test(email.value);
    
    if( valid_name && valid_surname && valid_mail ){
        
        // if everything is good
        $.ajax({
            url: 'mail.php',
            data:{
                'name' : name.value,
                'surname' : surname.value,
                'email' : email.value,
                'note' : note.value,
            },
            type: "GET",
            success: function(result){
                error.innerHTML = 'mail is forwarded!!';
            }
        });
    
    }
    else{
        /*
            error handleing
        */
        var error_message = '';

        if(valid_name === false){
            error_message +="Invalid name.</br>"; 
        }
        if(valid_surname === false){
            error_message +="Invalid surname.</br>"
        }
        if(valid_mail === false){
            error_message +="Invalid email.</br>";
        }
        
        error.innerHTML = error_message;
    }


});