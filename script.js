function Show(){
    var name = document.getElementById('name').value;
    if(document.getElementById('name').value==""){
        alert('please type your Name');
    }
    else{
        document.getElementById('addname').innerHTML=name;

    document.getElementById('m1').style.display="none";
    document.getElementById('c1').style.display="block";
    }
}