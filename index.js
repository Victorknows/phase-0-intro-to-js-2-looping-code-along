//Write code here
function writeCards (par1, par2) {
    const messages =[];
    
    for (let i = 0; i < par1.length; i++) {
      
        messages.push(`Thank you, ${par1[i]}, for the wonderful surprise gift!`)

    }
  
    return messages;
}


function countDown(myNum){
    while (myNum >= 0){
        console.log(myNum--)
    }

}

countDown(10)