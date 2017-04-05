	var x = 'Player 2';
	var placed = ['','','','','','','','','',''];
	var gOver = 0;

	function place(i) {
		if (gOver != 1){
			if ((x == 'Player 1')&&(placed[i]=='')) {
				document.getElementById("ci"+i).style.display='block';
				document.getElementById("p2").style.opacity='0.2';
				document.getElementById("p1").style.opacity='1';
				placed[i] = 'ci';
				x = 'Player 2';
			}
			else if ((x == 'Player 2')&&(placed[i]=='')){
				document.getElementById("cr"+i).style.display='block';
				document.getElementById("p1").style.opacity='0.2';
				document.getElementById("p2").style.opacity='1';
				placed[i] = 'cr';
				x = 'Player 1';
			}
		}
		if (placed[1]==placed[2]&&placed[2]==placed[3]&&placed[1]!='') {
			declare(x);
			enhance(1,2,3,x);
		} else if (placed[1]==placed[4]&&placed[4]==placed[7]&&placed[1]!='') {
			declare(x);
			enhance(1,4,7,x);
		} else if (placed[1]==placed[5]&&placed[5]==placed[9]&&placed[1]!='') {
			declare(x);
			enhance(1,5,9,x);
		} else if (placed[2]==placed[5]&&placed[5]==placed[8]&&placed[2]!='') {
			declare(x);
			enhance(2,5,8,x);
		} else if (placed[3]==placed[5]&&placed[5]==placed[7]&&placed[3]!='') {
			declare(x);
			enhance(3,5,7,x);
		} else if (placed[3]==placed[6]&&placed[6]==placed[9]&&placed[3]!='') {
			declare(x);
			enhance(3,6,9,x);
		} else if (placed[4]==placed[6]&&placed[6]==placed[5]&&placed[4]!='') {
			declare(x);
			enhance(4,5,6,x);
		} else if (placed[7]==placed[9]&&placed[9]==placed[8]&&placed[9]!='') {
			declare(x);
			enhance(7,8,9,x)
		}
		checkTie();
	}

function declare(x){
    document.getElementById("status").innerHTML = x + " Wins!";
    gOver = 1;
	document.getElementById("p1").style.opacity='0.2';
	document.getElementById("p2").style.opacity='0.2';	
}

function checkTie(){
	var i, flag = 0;
	for (i = 1; i<=9; i++){
		if (placed[i]==''){
			flag = 1; 
			break;
		}
	}
	if (flag==0) {
    	document.getElementById("status").innerHTML = "It's A Draw";		
		gOver = 1;
		document.getElementById("p1").style.opacity='0.2';
		document.getElementById("p2").style.opacity='0.2';	
	}
}

function enhance(a,b,c,x){
	if (x == 'Player 1') {
		document.getElementById('cr'+a).setAttribute("class", "crossE");
		document.getElementById('cr'+b).setAttribute("class", "crossE");
		document.getElementById('cr'+c).setAttribute("class", "crossE");
		window.getComputedStyle
	} else {
		document.getElementById('ci'+a).style.borderColor="#0dd";
		document.getElementById('ci'+b).style.borderColor="#0dd";
		document.getElementById('ci'+c).style.borderColor="#0dd";
	}
}