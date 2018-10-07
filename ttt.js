var x = 'Player 2';
var placed = ['', '', '', '', '', '', '', '', '', ''];
var gOver = 0,
	score1 = 0,
	score2 = 0;

function place(i) {
	if (gOver != 1) {
		if ((x == 'Player 1') && (placed[i] == '')) {
			document.getElementById("ci" + i).style.display = 'block';
			document.getElementById("p2").style.opacity='0.2';
			document.getElementById("p1").style.opacity='1';
			placed[i] = 'ci';
			x = 'Player 2';
		} else if ((x == 'Player 2') && (placed[i] == '')) {
			document.getElementById("cr" + i).style.display = 'block';
			document.getElementById("p1").style.opacity='0.2';
			document.getElementById("p2").style.opacity='1';
			placed[i] = 'cr';
			x = 'Player 1';
		}
		if (placed[1] == placed[2] && placed[2] == placed[3] && placed[1] != '') {
			declare(x);
			enhance(1, 2, 3, x);
		} else if (placed[1] == placed[4] && placed[4] == placed[7] && placed[1] != '') {
			declare(x);
			enhance(1, 4, 7, x);
		} else if (placed[1] == placed[5] && placed[5] == placed[9] && placed[1] != '') {
			declare(x);
			enhance(1, 5, 9, x);
		} else if (placed[2] == placed[5] && placed[5] == placed[8] && placed[2] != '') {
			declare(x);
			enhance(2, 5, 8, x);
		} else if (placed[3] == placed[5] && placed[5] == placed[7] && placed[3] != '') {
			declare(x);
			enhance(3, 5, 7, x);
		} else if (placed[3] == placed[6] && placed[6] == placed[9] && placed[3] != '') {
			declare(x);
			enhance(3, 6, 9, x);
		} else if (placed[4] == placed[6] && placed[6] == placed[5] && placed[4] != '') {
			declare(x);
			enhance(4, 5, 6, x);
		} else if (placed[7] == placed[9] && placed[9] == placed[8] && placed[9] != '') {
			declare(x);
			enhance(7, 8, 9, x)
		}
		if (gOver!=1) checkTie();
	}
}

function declare(x) {
	document.getElementById("status").innerHTML = "<h1>" + x + " Wins!</h1>";
	if (x == 'Player 1') {
		updateWinCount("sp1",score1);
	}
	else {
		score2++;
		updateWinCount("sp2",score2);
	}
	document.getElementById("p1").style.opacity='0.2';
	document.getElementById("p2").style.opacity='0.2';	
	gOver = 1;
}

function updateWinCount(classSelector, score){
	score++;
	var elements = document.getElementsByClassName(classSelector);
	for(var i = 0; i < elements.length ; i++ ){
		elements[i].innerHTML = score;
	}

}


function checkTie() {
	var i, flag = 0;
	for (i = 1; i <= 9; i++) {
		if (placed[i] == '') {
			flag = 1;
			break;
		}
	}
	if (flag == 0) {
		document.getElementById("status").innerHTML = "<h1>It's A Draw</h1>";
		gOver = 1;
		document.getElementById("p1").style.opacity = '0.2';
		document.getElementById("p2").style.opacity = '0.2';
	}
}

function enhance(a, b, c, x) {
	if (x == 'Player 1') {
		document.getElementById('cr' + a).setAttribute("class", "crossE");
		document.getElementById('cr' + b).setAttribute("class", "crossE");
		document.getElementById('cr' + c).setAttribute("class", "crossE");
		window.getComputedStyle
	} else {
		document.getElementById('ci' + a).style.borderColor = "#0dd";
		document.getElementById('ci' + b).style.borderColor = "#0dd";
		document.getElementById('ci' + c).style.borderColor = "#0dd";
	}
}

function reset() {
	placed[0] = '';
	for (var i = 1; i <= 9; i++) {
		document.getElementById("cr" + i).style.display = 'none';
		document.getElementById('ci' + i).style.display = 'none';
		document.getElementById('cr' + i).setAttribute("class", "cross");
		document.getElementById('ci' + i).style.borderColor = "#333";
		placed[i] = '';
	}
	gOver = 0;
	document.getElementById("status").innerHTML = "<h1>Tic`Tac`Toe</h1>";
}