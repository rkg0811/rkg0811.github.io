var names=new Array();
names[0]="Rishav";
names[1]="John";
names[2]="jerry";
names[3]="Jalim";
names[4]="joel";
names[5]="rahul";
names[6]="Pratik";
names[7]="paula";
names[8]="larry";
names[9]="jem";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}