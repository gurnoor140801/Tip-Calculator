function calc__fun(){
    let amt = document.getElementById("amt__input").value;
    let perc = document.getElementById("perc__input").value;
    let totalPerson = document.getElementById("people__input").value;

    // console.log(amt, perc, totalPerson);
    let ans = (amt*perc) / totalPerson;
    

    if(ans){
        ans = ans.toFixed(2);
        ans = '₹' + ans
        document.getElementById("dis").innerHTML = ans
    }else{
        document.getElementById("dis").innerHTML = '₹ 0.00'
    }
}