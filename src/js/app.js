(function($){
    var $modal = $('#exampleModal');
    var $email = $('#exampleInputEmail1');

    $modal.on('shown.bs.modal', function(){
        $email.trigger('focus');

    });

    $('.js-save-changes').on('click', function(){
        if($email.val().trim().length > 0){
            sendChanges().then(function(value){
                $modal.modal('hide');
                console.log($email.val());
            });
        }else{
            console.log('El campo correo esta vacio, ingresa un correo valido porfavor');
            // .has-error ::invalid
            
            $modal.find('form').addClass('was-validated');
        }
    });

    function sendChanges(){
        console.log('>> Enviando cambios ...');

        return new Promise(function(resolve, reject){
            setTimeout(function(){
                console.log('--- Changes werw saved!');
                resolve();
            }, 2000);
        });
    }

})(jQuery);