/*
	Perico Dan B. Dionisio
	2013-13692
	CMSC 128 AB-1L
*/

function numToWords(num){
/*
	this function will return the number in words form
*/
	var divider = 1000000;
	var word = ""; //accumulator of the words
	var thousands = false;
	
	if(num==0){ //special case
		return "zero ";
	}
	while(num>0){
		
		if(Math.floor(num/divider)>0 && (divider==10000 || divider==10)){ // tens or ten thousands case
			
			switch(Math.floor(num/divider)){ //to know the number in the tens or ten thousands place
				case 1: //if number one it will check the following number for the right term
					
					switch(Math.floor((num - (Math.floor(num/divider)*divider))/(divider/10))){
						case 0:
							word = word + "ten ";
							break;
						case 1:
							word = word + "eleven ";
							break;
						case 2:
							word = word + "twelve ";
							break;
						case 3:
							word = word + "thirteen ";
							break;
						case 4:
							word = word + "fourteen ";
							break;
						case 5:
							word = word + "fifteen ";
							break;
						case 6:
							word = word + "sixteen ";
							break;
						case 7:
							word = word + "seventeen ";
							break;
						case 8:
							word = word + "eighteen ";
							break;
						case 9:
							word = word + "ninetten ";
							break;
					}
					num = num - (Math.floor(num/divider)*divider); //to update the number
					divider = divider / 10; //to update the divider
					if(divider==1000) thousands = true;
					break;
				case 2:
					word = word + "twenty ";
					if (divider==10000) thousands = true;
					break;
				case 3:
					word = word + "thirty ";
					if (divider==10000) thousands = true;
					break;
				case 4:
					word = word + "fourty ";
					if (divider==10000) thousands = true;
					break;
				case 5:
					word = word + "fifty ";
					if (divider==10000) thousands = true;
					break;
				case 6:
					word = word + "sixty ";
					if (divider==10000) thousands = true;
					break;
				case 7:
					word = word + "seventy ";
					if (divider==10000) thousands = true;
					break;
				case 8:
					word = word + "eighty ";
					if (divider==10000) thousands = true;
					break;
				case 9:
					word = word + "ninety ";
					if (divider==10000) thousands = true;
					break;
				
			}
			num = num - (Math.floor(num/divider)*divider); //to update the number
		}
		
		
		else if(Math.floor(num/divider)>0){ // if it is not the case of tens or ten thousands
			
			switch(Math.floor(num/divider)){
				case 1:
					word = word + "one ";
					break;
				case 2:
					word = word + "two ";
					break;
				case 3:
					word = word + "three ";
					break;
				case 4:
					word = word + "four ";
					break;
				case 5:
					word = word + "five ";
					break;
				case 6:
					word = word + "six ";
					break;
				case 7:
					word = word + "seven ";
					break;
				case 8:
					word = word + "eight ";
					break;
				case 9:
					word = word + "nine ";
					break;
				
			}
			num = num - (Math.floor(num/divider)*divider); //to update the divider
			if(divider==1000000) word = word + "milion "; 
			else if(divider==100000) {
				word = word + "hundred ";
				thousands = true
			}
			else if(divider==1000) thousands = true;
			else if(divider==100) word = word + "hundred ";
			else word = word +" ";
		}
		
		if (thousands && divider==1000) word = word + "thousand ";
		divider = divider/10;
	}
	
	return word;
}

function wordsToNum(word){
/*
	this function will return the number in digit form
*/
	var words = word.split(" "); //to put each word in an array
	var num = 0;
	var i;
	var temp = 0;//accumulator
	
	if(words[0]=="zero" && words.length==1){ //special case of zero
		return 0;
	}
	
	for(i=0; i<words.length; i++){
		switch(words[i]){ //to identify each number
			case "one":
				temp = 1;
				break;
			case "two":
				temp = 2;
				break;
			case "three":
				temp = 3;
				break;
			case "four":
				temp = 4;
				break;
			case "five":
				temp = 5;
				break
			case "six":
				temp = 6;
				break;
			case "seven":
				temp = 7;
				break;
			case "eight":
				temp = 8;
				break;
			case "nine":
				temp = 9;
				break;
			case "ten":
				temp = 10;
				break;
			case "eleven":
				temp = 11;
				break;
			case "twelve":
				temp = 12;
				break;
			case "thirteen":
				temp = 13;
				break;
			case "fourteen":
				temp = 14;
				break;
			case "fifteen":
				temp = 15;
				break;
			case "sixteen":
				temp = 16;
				break;
			case "seventeen":
				temp = 17;
				break;
			case "eighteen":
				temp = 18;
				break;
			case "nineteen":
				temp = 19;
				break;
			case "twenty":
				temp = 20;
				if(words [i+2]=="thousand")
					temp = temp*1000;
				break;
			case "thirty":
				temp = 30;
				if(words [i+2]=="thousand")
					temp = temp*1000;
				break;
			case "fourty":
				temp = 40;
				if(words [i+2]=="thousand")
					temp = temp*1000;
				break;
			case "fifty":
				temp = 50;
				if(words [i+2]=="thousand")
					temp = temp*1000;
				break;
			case "sixty":
				temp = 60;
				if(words [i+2]=="thousand")
					temp = temp*1000;
				break;
			case "seventy":
				temp = 70;
				if(words [i+2]=="thousand")
					temp = temp*1000;
				break;
			case "eighty":
				temp = 80;
				if(words [i+2]=="thousand")
					temp = temp*1000;
				break;
			case "ninety":
				temp = 90;
				if(words [i+2]=="thousand")
					temp = temp*1000;
				break;
			default:
				temp = 0;
		}
		if(i+1<words.length){ // this will make adjustments in the number by multiplying it by the right number
			switch(words[i+1]){
				case "million":
					temp = temp * 1000000;
					i++;
					break;
				case "hundred":
					if(i+2<words.length && (words[i+2]=="thousand"||words[i+3]=="thousand")||words[i+4]=="thousand"){
						temp = temp * 100000;
						i++;
					}
					else{
						temp = temp * 100;
						i++;
					}
					break;
				case "thousand":
					temp = temp * 1000;
					i++;
					break;
			}
		}
		num = num + temp;
	}
	
	return num;
}

function wordsToCurrency(word, currency){
/*
	this function will return the number with currency
*/
	return currency +" "+ wordsToNum(word); //to return the concatinated currency nd numbers
}

function numberDelimited(num, delimiter, limit){
/*
	this function will delimit the number with the specified delimiter and with the specific length
*/
	var numbers = num.toString().split("");//this will put the numbers in an array
	var i = numbers.length - 1;
	var a = 1;
	var answer = "";//accumulator
	
	while (i>-1){ //this will traverse the array and will add the delimiter
		if (a % limit == 0 && i != 0){
			answer = delimiter + numbers[i] + answer;
		}
		else{
			answer = numbers[i] + answer;
		}
		i--;
		a++;
	}
	
	return answer;
	
}
