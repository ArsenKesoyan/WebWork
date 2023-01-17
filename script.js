 
var cl = 0
var ok = document.getElementById('ok')
 function chekbox(argument) {
	cl++
	if (cl%2==0) {
		ok.style.display='none'
	}else{
		ok.style.display='unset'
	}
}
