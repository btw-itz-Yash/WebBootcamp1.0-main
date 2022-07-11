alert("Welcome")
document.getElementById("b").addEventListener("click",function(){
    var name = document.getElementById("input").value
    var list = name.split(" ")
    if(list[1]== '+'){
        var add = parseInt(list[0])+parseInt(list[2]);
        document.getElementById('h12').innerHTML= 'Result: ${add}'
    }
    if(list[1]=='-'){
        var add = parseInt(list[0])-parseInt(list[2]); 
        document.getElementById('h12').innerHTML= 'Result:${add}'
    }
    if(list[1]=='*'){
        var add=parseInt(list[0])*parseInt(list[2]); 
        document.getElementById('h12').innerHTML = 'Result:${add}'
    }
    if(list[1]=='/'){
        var add = parseInt(list[0])/parseInt(list[2]);
        document.getElementById('h12').innerHTML = 'Result:${add}'
    }
})