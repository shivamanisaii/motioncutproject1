const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

function exchangeCurrency(){
    var selectedCurrency = document.getElementById("currency-type").value;
    var orignalPrice = document.getElementById("value").innerHTML;
    var orginalCurrency = 'USD';


    //alert(selectedCurrency + ' ' + orignalPrice + ' ' + orginalCurrency )
    

    document.getElementById("value").innerHTML = orignalPrice * 80 ;
    document.getElementById("value").innerHTML = orignalPrice * 30 ;
    document.getElementById("value").innerHTML = orignalPrice * 80 ;
    document.getElementById("symbal").innerHTML = selectedCurrency; 

}