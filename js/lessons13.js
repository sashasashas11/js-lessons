/**
 * Created by sasha on 28.11.13.
 */
(function(){
	var newDate, theDate;
	theDate = new Date(2000, 4, 13);
	console.log(theDate);
	newDate = theDate.setDate(theDate.getDate()+465);
//	rrr = new Date(newDate);
	console.log(new Date(newDate));

})();