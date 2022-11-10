function login(){

    adi= document.getElementById('ad').value;
    sifre= document.getElementById('sifre').value;

    var hata= new Array();
    var sembol = '*|,:<>[]{}`;()@&$#%!+-"/.';

   /*  var sembolvar=false; */
   /*  for (var i = 0; i < sifre.length; i++) {
        if (sembol.indexOf(sifre.charAt(i))!=-1){
            sembolvar=true;
        }
        } */

}
    if(adi=="")
        hata.push('Lütfen kullanıcı adını boş geçmeyiniz');
   /*  else if (adi.length<4) */
       /*  hata.push('Lütfen kullanıcı adını 3 karakterden fazla giriniz'); */

    if (sifre=="")
    hata.push('Şifre alanını boş geçmeyiniz');
    /* else{ 

    } */
    /*     if (sifre!=tsifre)
            hata.push('Şifreler aynı olmalıdır.');

        else if (sifre.length<6)
            hata.push('Şifre 6 karakter veya daha büyük olmalıdır.');

        else if (sifre.search(/[a-z]/) < 0)
                hata.push("Şifre en az bir küçük harf içermelidir.");

        else if (sifre.search(/[A-Z]/) < 0)
                hata.push("Şifre en az bir büyük harf içermelidir.");

        else if (sifre.search(/[0-9]/) < 0)
            hata.push("Şifre en az bir rakam içermelidir.");

        else if (sembolvar==false)
            hata.push("Şifre en az bir sembol içermelidir."); */


        if (adi==="Tuğba" && sifre==="123456.Tt")
        {
                    
         alert('Başarıyla Giriş Yapıldı'); 
                    
         }

        else 
        {
        alert('Bilgilerinizi Kontrol Edip Tekrar Deneyiniz');
            

       } 

           
