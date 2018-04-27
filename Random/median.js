function median(list) {
    list.sort(function(a, b) {
        return (a - b)
    });
    var list_length = list.length;

    if ((list_length % 2) == 1) {
        return list[Math.floor(list_length) / 2];
    } else {
        return list(([Math.round(list_length) / 2 - 1] + list(list_length) / 2) / 2);
    }

}


// Test driver 
var myList1 = [8, 3, 9, 1, 4, 7];
var myList2 = [10, -2, 0, 5, 3, 1, 7];
var med = median(myList1);

// not complete 
console.log(med);
//med = median(myList2);
//console.log(myList2);
// document.write("Median of [", myList1, "] is : ", med, "<br />");

// document.write("Median of [", myList2, "] is : ", med, "<br />");ss