var totalRows = 5;
var cellsInRow = 5;
var min = 1;
var max = 100;
var numArr = [];
var randomArr = [];
 var censor =0;

    function drawTable() {
        var div1 = document.getElementById('div1');
        var tbl = document.createElement("table");
        for (var r = 0; r < totalRows; r++) {
            var row = document.createElement("tr");
             for (var c = 0; c < cellsInRow; c++) {
                var cell = document.createElement("td");
                

                getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                var cellText = document.createTextNode(getRandom);
				numArr.push(getRandom);
				cell.setAttribute('value', getRandom);
				cell.setAttribute('name' , 'tableCell');
                cell.appendChild(cellText);
				cell.setAttribute('onclick', hd);
                row.appendChild(cell);
            }           
            
    tbl.appendChild(row); 
    div1.appendChild(tbl);
    }
	//bind on click function on table cell
	bindOnClick();
	//sort the numArr
	 numArr.sort(function(a, b){return a - b});
	 
	 
}
    window.onload=drawTable; 

    function hd(e){
		//get the element clicked ie. table cell clicked
		 var srcEle = e.target ? e.target : e.srcElement;
		 //get table cell value
		 var val = srcEle.getAttribute('value');
    
	//if the value in the array is equal to the correct sorted value
	//set display none
		if(numArr[censor] == val){
			//if equal increment the counter, so now the next value to be clicked is the next ascending value in the array
			censor++;
			srcEle.style.backgroundColor = "green";color="green";
		}
	}

function bindOnClick(){
var tableCell = document.getElementsByName("tableCell");
tableCell.onclick=hd;
	var cells = document.getElementsByTagName("td"); 
	for (var i = 0; i < cells.length; i++) { 
	   cells[i].onclick = hd;
	}
}


var sec=0;
var min=0;

var ID=setInterval(function ti(){
    sec++;
    if(sec==60){
        sec=00;
        min=min+1;
        
    }
    
    
},1000);

document.getElementById("cen").innerHTML="min:"+ min+"sec:"+sec;

setTimeout(ti,6000);

if(censor==25){
    clearInterval(ID);
}


	

        

