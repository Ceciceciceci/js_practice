// Given a date in string format "mm/dd/yyyy"
// Change the format to yyyymmdd.

function formatDate(userDate){

    //--- doing it using Date library
    // var k = userDate;
    // var dt = new Date(k);
    // var yyyy = dt.getFullYear();
    // var mm = (dt.getMonth() + 1 < 10) ? ("0" + (dt.getMonth() + 1)) : (dt.getMonth() + 1);
    // var dd = (dt.getDate() + 1 < 10) ? ("0" + dt.getDate()) : (dt.getDate());


    //--- doing using .split -> array style
    var dateArray = userDate.split("/");
    // turns into [12,13,2014]
    var yyyy = dateArray[2]; 
    var mm = (dateArray[0] < 10) ? ("0" + (dateArray[0])) : (dateArray[0]);
    var dd = (dateArray[1] < 10) ? ("0" + (dateArray[1])) : (dateArray[1]);

    return yyyy + "" + mm + "" + dd;
}

console.log(formatDate("12/13/2014"));