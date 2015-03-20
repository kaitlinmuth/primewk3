function daysToGo(targetDate){
	var today = new Date();
	//Find the difference in milliseconds between the two dates and convert to days
	//number of milliseconds per day thanks to TNi, http://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
	return (Math.round((targetDate.valueOf()-today.valueOf())/(1000*3600*24)))
}

var classroomStart = new Date(2015, 03, 13, 08, 00, 00, 00);
var primeStart = new Date(2015, 02, 02, 00, 00, 00, 00)
console.log("There are "+daysToGo(classroomStart)+" days remaining before the classroom portion of beta cohort begins!");
console.log("Beta cohort preload began "+Math.abs(daysToGo(primeStart))+" days ago.");