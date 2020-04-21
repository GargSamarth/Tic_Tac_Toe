
var fill = document.querySelectorAll(".box");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var header = document.querySelector("#header");
var reset = document.querySelector("#reset");

var chance = "p1";
var count = 0;

for(var i=0; i<fill.length;i++){
	fill[i].addEventListener("click", function(){
		
	if(chance==="p1")
		{
			this.textContent = "X";
			chance = "p2";
			player1.classList.remove("selected");
			player2.classList.add("selected");
			this.classList.add("X");
			this.classList.remove("E");
			check();
			if(count===1){
				header.style.backgroundColor = "green";
				header.style.color = "white";
				player1.classList.remove("selected");
				player2.classList.remove("selected");
				header.textContent = "PLAYER 1 WINS!!";
			}
		}
		
	else{
			this.textContent = "O";
			chance = "p1";
			player2.classList.remove("selected");
			player1.classList.add("selected");
			this.classList.add("O");
			this.classList.remove("E");
			check();
			if(count===1){
				header.style.backgroundColor = "green";
				header.style.color = "white";
				player1.classList.remove("selected");
				player2.classList.remove("selected");
				header.textContent = "PLAYER 2 WINS!!";
			}
		}
	})
}



function check(){
	if((fill[0].textContent !== "") && (fill[0].textContent === fill[1].textContent) && (fill[1].textContent === fill[2].textContent)){
		for(var i=0;i<3;i++){
			fill[i].style.backgroundColor = "darkgreen";
		}
		count = 1;
	}
	
	if((fill[3].textContent !== "") && (fill[3].textContent === fill[4].textContent) && (fill[4].textContent === fill[5].textContent)){
		for(var i=3;i<6;i++){
			fill[i].style.backgroundColor = "darkgreen";
		}
		count = 1;
	}
	
	if((fill[6].textContent !== "") && (fill[6].textContent === fill[7].textContent) && (fill[8].textContent === fill[7].textContent)){
		for(var i=6;i<=8;i++){
			fill[i].style.backgroundColor = "darkgreen";
		}
		count = 1;
	}
	
	if((fill[0].textContent !== "") && (fill[0].textContent === fill[3].textContent) && (fill[3].textContent === fill[6].textContent)){
		for(var i=0;i<=6;i+=3){
			fill[i].style.backgroundColor = "darkgreen";
		}
		count = 1;
	}
	
	if((fill[1].textContent !== "") && (fill[1].textContent === fill[4].textContent) && (fill[4].textContent === fill[7].textContent)){
		for(var i=1;i<=7;i+=3){
			fill[i].style.backgroundColor = "darkgreen";
		}
		count = 1;
	}
	
	if((fill[2].textContent !== "") && (fill[2].textContent === fill[5].textContent) && (fill[5].textContent === fill[8].textContent)){
		for(var i=2;i<=8;i+=3){
			fill[i].style.backgroundColor = "darkgreen";
		}
		count = 1;
	}
	
	if((fill[0].textContent !== "") && (fill[0].textContent === fill[4].textContent) && (fill[4].textContent === fill[8].textContent)){
		for(var i=0;i<=8;i+=4){
			fill[i].style.backgroundColor = "darkgreen";
		}
		count = 1;
	}
	
	if((fill[2].textContent !== "") && (fill[2].textContent === fill[4].textContent) && (fill[4].textContent === fill[6].textContent)){
		for(var i=2;i<=6;i+=2){
			fill[i].style.backgroundColor = "darkgreen";
		}
		count = 1;
}
}

reset.addEventListener("click", function(){
	for(var i=0;i<=8;i+=1){
			fill[i].style.backgroundColor = "black";
			fill[i].textContent = "";
			header.style.backgroundColor = "lightblue";
			header.style.color = "white";
			player1.classList.remove("selected");
			player2.classList.remove("selected");
			player1.classList.add("selected");
			header.textContent = "TIC TAC TOE";
			chance = "p1";
		}
})
	
