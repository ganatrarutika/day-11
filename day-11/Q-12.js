
function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If divisible by 100, check if it's also divisible by 400
        if (year % 100 === 0) {
            // Divisible by 400 is a leap year
            return year % 400 === 0;
        } else {
            // Divisible by 4 but not by 100 is a leap year
            return true;
        }
    } else {
        // Not divisible by 4, hence not a leap year
        return false;
    }
}

console.log(isLeapYear(2020)); 

