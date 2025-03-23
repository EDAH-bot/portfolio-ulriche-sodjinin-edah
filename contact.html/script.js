document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault() ;
    const name = document.getElementById('name').value ;
    const email = document.getElementById('email').value ;
    const message = document.getElementById('message').value ;
    
    if (name && email && message) {
    alert('Merci pour votre message,  ' + name + '  ! Nous vous contacterons bientôt.') ;
    document.getElementById('contact-form').reset() ;
    } else {
    alert('Veuillez remplir tous les champs du formulaire.') ;
    }
   }) ;