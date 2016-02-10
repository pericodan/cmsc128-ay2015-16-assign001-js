function numToWords(num){
	var divider = 1000000;
	var word = "";
	
	while(num>0){
		
		if(Math.floor(num/divider)>0 && (divider==10000 || divider==10)){
			
			switch(Math.floor(num/divider)){
				case 1:
					
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
					num = num - (Math.floor(num/divider)*divider);
					divider = divider / 10;
					if(divider==1000) word = word + "thousand ";
					break;
				case 2:
					word = word + "twenty ";
					break;
				case 3:
					word = word + "thirty ";
					break;
				case 4:
					word = word + "fourty ";
					break;
				case 5:
					word = word + "fifty ";
					break;
				case 6:
					word = word + "sixty ";
					break;
				case 7:
					word = word + "seventy ";
					break;
				case 8:
					word = word + "eighty ";
					break;
				case 9:
					word = word + "ninety ";
					break;
				
			}
			num = num - (Math.floor(num/divider)*divider);
		}
		
		
		else if(Math.floor(num/divider)>0){
			
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
			num = num - (Math.floor(num/divider)*divider);
			if(divider==1000000) word = word + "milion ";
			else if(divider==100000) word = word + "hundred thousand ";
			else if(divider==1000) word = word + "thousand ";
			else if(divider==100) word = word + "hundred ";
			else word = word +" ";
		}
		
		
		divider = divider/10;
	}
	
	return word;
}

function wordsToNum(word){
	var words = word.split(" ");
	var num = 0;
	var i;
	var temp = 0;
	
	for(i=0; i<words.length; i++){
		switch(words[i]){
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
				break;
			case "thirty":
				temp = 30;
				break;
			case "fourty":
				temp = 40;
				break;
			case "fifty":
				temp = 50;
				break;
			case "sixty":
				temp = 60;
				break;
			case "seventy":
				temp = 70;
				break;
			case "eighty":
				temp = 80;
				break;
			case "ninety":
				temp = 90;
				break;
			default:
				temp = 0;
		}
		if(i+1<words.length){
			switch(words[i+1]){
				case "million":
					temp = temp * 1000000;
					i++;
					break;
				case "hundred":
					if(i+2<words.length && (words[i+2]=="thousand"||words[i+3]=="thousand")){
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
	return currency + wordsToNum(word);
}


