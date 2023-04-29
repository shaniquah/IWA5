// Wrapped code with vs 0word wrap for better readability

// define constant global variables

const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0; /* value should be numerical---cannot multiply later with a string */

// moved code closer to beginning of code and declared variables
let customers = 1; /* customers should be recorded in numerals not stored as a string */
let clientLocation = 'RSA'; /* had to change 'location' variable for code to run smoothly */
let currency = null;
let shipping = null;

// defined variables with proper format

const shoes = 300 * 1;
const toys = 100 * 9;   /* changed value of toys variable for mathematical correctness */
const shirts = 150 * NONE_SELECTED;  /* NONE_SELECTED variable should not be a string */
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED; 

// improve readability and modify math operators for functionality
// calcShipping was an undefined variable ∴ could not be fetched---deleted it from code
// Used switch statements for better readability and functionality with nested if statements

switch (clientLocation) {    
    /* had to change 'location variable for code to run smoothly */   case 'RSA':
    shipping = 400;   
    currency = 'R';  
    if (customers === 1 && shoes + toys + batteries + pens + shirts >= 1000) {
        shipping = 0;
        console.log('Price:', currency, shoes + toys + batteries + pens + shirts + shipping);
    }
    break;
    case 'NAM':
    shipping = 600;
    currency = '$';
    if (customers === 1 && shoes + toys + batteries + pens + shirts >= 60) {
        shipping = 0;
        console.log('Price:', currency, shoes + toys + batteries + pens + shirts + shipping);
    }
    break;
    default:
        shipping = 800;
        currency = '$';     
        // WARNING is not a valid variable---fixed strict equality checker in code
        if (shipping === 0 && customers !== 1) { 
            console.log(FREE_WARNING); 
        }
        
        // WARNING variable in console.log cannot be fetched because it was never declared in the code
        // Added strict equality checker in ternary
        
        else {
            clientLocation === 'NK' /* had to change 'location variable for code to run smoothly */ ? console.log(BANNED_WARNING) : console.log('Price:', currency, shoes + toys + batteries + pens + shirts + shipping);
        }
}   /* default case closes statement ∴ 'break;' is unnecessary */

// Display shipping fee along with total calculated price in console

console.log('Shipping:', currency, shipping);



/* 
 * BUG FIXES:
 * 
 * Improved functionality of code
 * Each location has its  own if statement to check for total cost without shipping using && operator
 * Combined the two if statements for each clientLocation into one if statement using || operator
 * 
 */

