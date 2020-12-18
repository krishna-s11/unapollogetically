const q_one_no = document.getElementById("q_one_no");
const q_one_yes = document.getElementById("q_one_yes");
const q_one_most = document.getElementById("q_one_most");
const q_two_no = document.getElementById("q_two_no");
const q_two_yes = document.getElementById("q_two_yes");
const q_two_most = document.getElementById("q_two_most");
const q_three_no = document.getElementById("q_three_no");
const q_three_yes = document.getElementById("q_three_yes");
const q_three_most = document.getElementById("q_three_most");
const q_four_no = document.getElementById("q_four_no");
const q_four_yes = document.getElementById("q_four_yes");
const q_four_most = document.getElementById("q_four_most");
const q_five_no = document.getElementById("q_five_no");
const q_five_yes = document.getElementById("q_five_yes");
const q_five_most = document.getElementById("q_five_most");
const q_six_no = document.getElementById("q_six_no");
const q_six_yes = document.getElementById("q_six_yes");
const q_six_most = document.getElementById("q_six_most");
const q_seven_no = document.getElementById("q_seven_no");
const q_seven_yes = document.getElementById("q_seven_yes");
const q_seven_most = document.getElementById("q_seven_most");
const q_eight_no = document.getElementById("q_eight_no");
const q_eight_yes = document.getElementById("q_eight_yes");
const q_eight_most = document.getElementById("q_eight_most");
const q_nine_no = document.getElementById("q_nine_no");
const q_nine_yes = document.getElementById("q_nine_yes");
const q_nine_most = document.getElementById("q_nine_most");
const q_ten_no = document.getElementById("q_ten_no");
const q_ten_yes = document.getElementById("q_ten_yes");
const q_ten_most = document.getElementById("q_ten_most");
const score_btn = document.getElementById("score_btn");
const display_score = document.getElementById("display_score");
const zero = document.getElementById("zero");
const onetosix = document.getElementById("onetosix");
const seventotwelve = document.getElementById("seventotwelve");
const thirteentosixteen = document.getElementById("thirteentosixteen");
const seventeentotwenty = document.getElementById("seventeentotwenty");

var score = 0;
var q_one_correct = "rgba(235, 252, 3, 0.5)";
var q_one_yes_color;
var q_one_most_color;

var transColore = "rgba(0, 0, 0, 0)";
var num_yes = 0;
var num_most = 0;

function getStyle(x,styleProp) {
    if (x.currentStyle)
        var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
    return y;
}


q_one_no.addEventListener("click", () =>{
	q_one_no.classList.toggle("selected");
 	q_one_yes.classList.remove("selected");
 	q_one_most.classList.remove("selected");
});
q_one_yes.addEventListener("click", () =>{
	q_one_yes.classList.toggle("selected");
 	q_one_no.classList.remove("selected");
 	q_one_most.classList.remove("selected");
});
q_one_most.addEventListener("click", () =>{
	q_one_most.classList.toggle("selected");
 	q_one_yes.classList.remove("selected");
 	q_one_no.classList.remove("selected");
});

q_two_no.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_one_yes, 'background-color');
	q_one_most_color = getStyle(q_one_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_two_no.classList.toggle("selected");
	q_two_yes.classList.remove("selected");
 	q_two_most.classList.remove("selected");
});
q_two_yes.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_one_yes, 'background-color');
	q_one_most_color = getStyle(q_one_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_two_yes.classList.toggle("selected");
	q_two_no.classList.remove("selected");
 	q_two_most.classList.remove("selected");
});
q_two_most.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_one_yes, 'background-color');
	q_one_most_color = getStyle(q_one_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_two_most.classList.toggle("selected");
	q_two_yes.classList.remove("selected");
 	q_two_no.classList.remove("selected");
});

q_three_no.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_two_yes, 'background-color');
	q_one_most_color = getStyle(q_two_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_three_no.classList.toggle("selected");
	q_three_yes.classList.remove("selected");
 	q_three_most.classList.remove("selected");
});
q_three_yes.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_two_yes, 'background-color');
	q_one_most_color = getStyle(q_two_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_three_yes.classList.toggle("selected");
	q_three_no.classList.remove("selected");
 	q_three_most.classList.remove("selected");
});
q_three_most.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_two_yes, 'background-color');
	q_one_most_color = getStyle(q_two_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_three_most.classList.toggle("selected");
	q_three_yes.classList.remove("selected");
 	q_three_no.classList.remove("selected");
});
q_four_no.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_three_yes, 'background-color');
	q_one_most_color = getStyle(q_three_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_four_no.classList.toggle("selected");
	q_four_yes.classList.remove("selected");
 	q_four_most.classList.remove("selected");
});
q_four_yes.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_three_yes, 'background-color');
	q_one_most_color = getStyle(q_three_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_four_yes.classList.toggle("selected");
	q_four_no.classList.remove("selected");
 	q_four_most.classList.remove("selected");
});
q_four_most.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_three_yes, 'background-color');
	q_one_most_color = getStyle(q_three_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_four_most.classList.toggle("selected");
	q_four_yes.classList.remove("selected");
 	q_four_no.classList.remove("selected");
});
q_five_no.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_four_yes, 'background-color');
	q_one_most_color = getStyle(q_four_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_five_no.classList.toggle("selected");
	q_five_yes.classList.remove("selected");
 	q_five_most.classList.remove("selected");
});
q_five_yes.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_four_yes, 'background-color');
	q_one_most_color = getStyle(q_four_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_five_yes.classList.toggle("selected");
	q_five_no.classList.remove("selected");
 	q_five_most.classList.remove("selected");
});
q_five_most.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_four_yes, 'background-color');
	q_one_most_color = getStyle(q_four_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_five_most.classList.toggle("selected");
	q_five_yes.classList.remove("selected");
 	q_five_no.classList.remove("selected");
});
q_six_no.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_five_yes, 'background-color');
	q_one_most_color = getStyle(q_five_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_six_no.classList.toggle("selected");
	q_six_yes.classList.remove("selected");
 	q_six_most.classList.remove("selected");
});
q_six_yes.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_five_yes, 'background-color');
	q_one_most_color = getStyle(q_five_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_six_yes.classList.toggle("selected");
	q_six_no.classList.remove("selected");
 	q_six_most.classList.remove("selected");
});
q_six_most.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_five_yes, 'background-color');
	q_one_most_color = getStyle(q_five_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_six_most.classList.toggle("selected");
	q_six_yes.classList.remove("selected");
 	q_six_no.classList.remove("selected");
});
q_seven_no.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_six_yes, 'background-color');
	q_one_most_color = getStyle(q_six_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_seven_no.classList.toggle("selected");
	q_seven_yes.classList.remove("selected");
 	q_seven_most.classList.remove("selected");
});
q_seven_yes.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_six_yes, 'background-color');
	q_one_most_color = getStyle(q_six_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_seven_yes.classList.toggle("selected");
	q_seven_no.classList.remove("selected");
 	q_seven_most.classList.remove("selected");
});
q_seven_most.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_six_yes, 'background-color');
	q_one_most_color = getStyle(q_six_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_seven_most.classList.toggle("selected");
	q_seven_yes.classList.remove("selected");
 	q_seven_no.classList.remove("selected");
});
q_eight_no.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_seven_yes, 'background-color');
	q_one_most_color = getStyle(q_seven_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_eight_no.classList.toggle("selected");
	q_eight_yes.classList.remove("selected");
 	q_eight_most.classList.remove("selected");
});
q_eight_yes.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_seven_yes, 'background-color');
	q_one_most_color = getStyle(q_seven_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_eight_yes.classList.toggle("selected");
	q_eight_no.classList.remove("selected");
 	q_eight_most.classList.remove("selected");
});
q_eight_most.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_seven_yes, 'background-color');
	q_one_most_color = getStyle(q_seven_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_eight_most.classList.toggle("selected");
	q_eight_yes.classList.remove("selected");
 	q_eight_no.classList.remove("selected");
});
q_nine_no.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_eight_yes, 'background-color');
	q_one_most_color = getStyle(q_eight_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_nine_no.classList.toggle("selected");
	q_nine_yes.classList.remove("selected");
 	q_nine_most.classList.remove("selected");
});
q_nine_yes.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_eight_yes, 'background-color');
	q_one_most_color = getStyle(q_eight_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_nine_yes.classList.toggle("selected");
	q_nine_no.classList.remove("selected");
 	q_nine_most.classList.remove("selected");
});
q_nine_most.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_eight_yes, 'background-color');
	q_one_most_color = getStyle(q_eight_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_nine_most.classList.toggle("selected");
	q_nine_yes.classList.remove("selected");
 	q_nine_no.classList.remove("selected");
});
q_ten_no.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_nine_yes, 'background-color');
	q_one_most_color = getStyle(q_nine_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_ten_no.classList.toggle("selected");
	q_ten_yes.classList.remove("selected");
 	q_ten_most.classList.remove("selected");
});
q_ten_yes.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_nine_yes, 'background-color');
	q_one_most_color = getStyle(q_nine_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_ten_yes.classList.toggle("selected");
	q_ten_no.classList.remove("selected");
 	q_ten_most.classList.remove("selected");
});
q_ten_most.addEventListener("click", () =>{
	q_one_yes_color = getStyle(q_nine_yes, 'background-color');
	q_one_most_color = getStyle(q_nine_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	q_ten_most.classList.toggle("selected");
	q_ten_yes.classList.remove("selected");
 	q_ten_no.classList.remove("selected");
});
score_btn.addEventListener("click", ()=>{
	q_one_yes_color = getStyle(q_ten_yes, 'background-color');
	q_one_most_color = getStyle(q_ten_most, 'background-color');
	if(q_one_most_color === q_one_correct){
		score = score + 2;
	}else if(q_one_yes_color === q_one_correct){
		score++
	}
	console.log(score);
	if(score === 0){
		zero.style.display = "block";
	}else if(score>0 && score<7){
		onetosix.style.display = "block";
	}else if(score>6 && score<13){
		seventotwelve.style.display = "block";
	}else if(score>12 && score<17){
		thirteentosixteen.style.display = "block";
	}else if(score>16 && score<21){
		seventeentotwenty.style.display = "block";
	}else{
		seventotwelve.style.display = "block";
	}
});

