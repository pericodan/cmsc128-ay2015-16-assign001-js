function numToWord(num){
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
