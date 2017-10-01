angular.module("DomaciApp").filter("ratingFilter", function(){
    return function (data) {
        var data = parseInt(data);
        console.log(data)
        if (data >= 1 && data <= 5) {
            return "smece";
        } else if (data >= 6 && data <= 8) {
            return "skoro pa nije smece";
        } else if (data >= 9 && data <= 10) {
            return "nije smece";
        } else {
            return "CHMAR";
        }
    }
})