function fn(){
    var Name = document.getElementById('name').value;
  var year = document.getElementById('year').value;
    document.getElementById('url').innerHTML += '<br>'+"https://localhost:8080/"+"Name="   +Name+"&"+"Year="+year ;
}