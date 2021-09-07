function call(){

    var TI = document.getElementById("TI").value;
    var DI = document.getElementById("DI").value;
    var TU = document.getElementById("TU").value;
    var PAG = 0;
    var IM = 0;
    var TOT = 0;


    if(TI<5){
        PAG = TI*1
    }else if (TI<8){
        PAG = (TI - 5)*0.8+5
    }else if (TI<=10){
        PAG = (TI - 8)*0.7+7.4
    }else{
        PAG = (TI-10)*0.5+8.8
    }

    if(DI=="Sunday"){
        IM=PAG*0.05;
    }else if(TU=="m"){
            IM=PAG*0.15
    }else{
        IM = PAG*0.1
    }

    TOT = PAG + IM;

    document.write("PAG: "+PAG+"<br/>IMP: "+IM+"<br/>TOT: "+TOT);
}