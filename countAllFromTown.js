module.exports= function (regNumber, strStarts){
    let fromTown=0;
    var arr= regNumber.split(",")
    for(var i =0;i< arr.length;i++){
      var two=arr[i];
   
      if(two.startsWith("CL")){
    
      fromTown++;}
    }
    return fromTown;
    
  }