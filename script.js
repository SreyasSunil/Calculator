function insert(num) {
    document.form.textview.value = document.form.textview.value + num 
}

var equal = () =>{
    var exp = document.form.textview.value ;
    if(exp){
        document.form.textview.value = eval(exp);
    }

}

var c = ()=>{
    document.form.textview.value = "";
}

var back = () =>{
    var exp = document.form.textview.value ;
    document.form.textview.value = exp.substring(0,exp.length-1)
}