	
var col=0x000000;

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}
function displaycolors(){
var res="";
while(col>=0x000000 && col<=0xF0F0f0){

	res = decimalToHex(col,6);

	col=col+0x000008;		
	break;
}



res="#"+res;
postMessage(res);
setTimeout("displaycolors()",1);

}
displaycolors();

