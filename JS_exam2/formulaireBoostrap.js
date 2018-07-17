
function supplement() {
    var x=document.querySelector("#sp1").value;
    if (x==="Bonus(20%)") {
        return 0.20;
    }
    else if (x==="Allocation(25%)") {
        return 0.25;
    }
    else{
        return 0;
    }    
}

function montantRelative(noeudPourcent,noeudMontant) {
    var ref=document.querySelector("#sb").value;
    ref*=(1+supplement());
    var pourcent=noeudPourcent.value;                
    var montant=(ref*pourcent)/100;
    noeudMontant.value=montant;
}

function calculerReduction() {
    var reduction=0;
    //var nombre=document.querySelector("#nbp").value;
    var nombre=document.querySelector("#nbp").value;
    var fem=document.querySelector("#gridRadios2");
    if (fem.checked) {
        reduction+=2;
    }
    if (nombre==3) {
        reduction+=1;
    }
    if (nombre==4) {
        reduction+=2;
    }
    document.querySelector("#pRed-imp").value=reduction;
}

function afficherInfos() {
    var M1=document.querySelector("#imp");
    var P1=document.querySelector("#pImp");
    montantRelative(P1,M1);
    var M2=document.querySelector("#ass");
    var P2=document.querySelector("#pAss");
    montantRelative(P2,M2);
    var M3=document.querySelector("#reg");
    var P3=document.querySelector("#pReg");
    montantRelative(P3,M3);

    calculerReduction();
    var M4=document.querySelector("#red-imp");
    var P4=document.querySelector("#pRed-imp");
    M4.value=M1.value*((100-P4.value)/100);    
}

function calculerSalaire(){
    var salaire=0;
    var salaireBrut=document.querySelector("#sb").value;
    var supp=(salaireBrut*supplement());  //0.20||0.25||0  
    var x1=document.querySelector("#ass").value;    
    var x2=document.querySelector("#reg").value;
    var x3=document.querySelector("#red-imp").value;
    var y=parseFloat(x1)+parseFloat(x2)+parseFloat(x3);
    salaire=parseFloat(salaireBrut)+parseFloat(supp)-parseFloat(y);
    document.querySelector("#sn").value=salaire;
}

document.querySelector("#button3").addEventListener("click", function (event) { 

   // document.querySelector("#button11").style.display="none";
  //  document.querySelector("#button1").style.display="none";
   // document.querySelector("#button2").style.display="none";
  //  document.querySelector("#button3").style.display="none";
    print();
  
  });