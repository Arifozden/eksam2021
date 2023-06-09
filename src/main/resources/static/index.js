function regPakke(){
    const pakke={
        fornavn:$("#fornavn").val(),
        etternavn:$("#etternavn").val(),
        adresse:$("#adresse").val(),
        postnr:$("#postnr").val(),
        telefonnr:$("#telefonnr").val(),
        epost:$("#epost").val(),
        volum:$("#volum").val(),
        vekt:$("#vekt").val()
    };
    const url="/sjekkPostnr?postnr="+$("#postnr").val();
    $.get(url,function (OKPostnr){
        if(OKPostnr&&validerFornavn()&&validerEtternavn()){
            $.post("/lagre",pakke,function (){

            });
        }
    });

}

function validerFornavn(){
    const fornavn=$("#fornavn").val();
    const regexp = /^[a-zæøåA-ZÆØÅ .\-]{2,50}$/;
    const ok=regexp.test(fornavn);
    if(!ok){
        $("#feilFornavn").html("Fornavn må være mellom 2 og 50 tegn");
        return false;
    }else {
        $("#feilFornavn").html("");
        return true;
    }
}

function validerEtternavn(){
    const etternavn=$("#etternavn").val();
    const regexp = /^[a-zæøåA-ZÆØÅ .\-]{2,50}$/;
    const ok=regexp.test(etternavn);
    if(!ok){
        $("#feilEtternavn").html("Etternavn må være mellom 2 og 50 tegn");
        return false;
    }else {
        $("#feilEtternavn").html("");
        return true;
    }
}

function validerPostnr(){
    const postnr=$("#postnr").val();
    const regexp=/^[0-9]{4}$/;
    const ok=regexp.test(postnr);
    if(!ok){
        $("#feilPostnr").html("Postnummer må være 4 sifre");
        return false;
    }else {
        const url="/sjekkPostnr?postnr="+$("#postnr").val();
        $.get(url,function (OK){
            if(!OK){
                $("#feilPostnr").html("Postnr er ikke gyldig!");
                return false;
            }else {
                $("#feilPostnr").html("");
                return true;
            }
        });

    }
}