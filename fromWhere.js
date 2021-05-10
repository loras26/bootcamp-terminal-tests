module.exports=function (regNum){
    if(regNum.startsWith("CY")){return "Bellville"}
       else if(regNum.startsWith("CJ")){return "Paarl"}
    else if(regNum.startsWith("CA")){return "Cape Town"}
            else{return "Some other place!"}
  }