// --------------------------------------------------------------- TASK 1 --------------------------------------------------------------
// Create a function "delayedLog" that takes an array of strings
//  and logs each string to the console after a delay. The delay for each 
// subsequent string should increase by 1 second.
// ---------------------------------------------------------------------------------------------------------------------------------------


// Example usage:
delayedLog(['Hello', 'World', 'This', 'Is', 'JavaScript']);


// function Lol(messages) {
//     setTimeout(()=>{
//     }, 1000)
// }

function delayedLog(messages) {
    messages.forEach((message, index) => {
        setTimeout(() => {
            console.log(message);
        }, index *1000);
    });
}
// --------------------------------------------------------------- TASK 2 --------------------------------------------------------------
// Write a function "processData" that takes an array of 
// integers. The function should return a promise that resolves to an array
//  with each integer squared if all integers are positive. If any integer 
// is negative, the promise should reject with an error message "Negative 
// number found".
// ---------------------------------------------------------------------------------------------------------------------------------------

// function processData(data) {
//     // implement here
// }

// // Example usage:
// processData([1, 2, 3]).then((val) => console.log(val)).catch((err) => console.error(err));
// processData([1, 2, -5, 3]).then((val) => console.log(val)).catch((err) => console.error(err));

// --------------------------------------------------------------- TASK 3 --------------------------------------------------------------
// Create a function "complexOperation" that processes an array 
// of data points. For each data point, the function should wait for a 
// random time between 1 to 5 seconds before processing it using a promise 
// that resolves to the square of the data point. The function should print
//  the result  after ALL processes is complete and ensure all
//  promises resolve in the order they were created regardless of 
// given order.
// ---------------------------------------------------------------------------------------------------------------------------------------

// function complexOperation(dataPoints) {
    
// }

// // Example usage:
// complexOperation([1, 2, 3, 4, 5]);