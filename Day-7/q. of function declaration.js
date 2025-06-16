//JavaScript Function-Based Practical Questions & Real-Life Projects 

//1.  Basic Function Scenarios

//Q.1 => Create a function to format a user's full name.
        // Input: ("Kuldeep", "Jaat")
        // Output: "Kuldeep Jaat"
function fullName(firstName , lastName){
    return `"${firstName} ${lastName}"`;
}
let result = fullName("Kuldeep", "Jaat");
console.log(result)