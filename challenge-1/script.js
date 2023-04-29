// define constant global variables

const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0; /* value should be numerical---cannot multiply later with a string */

// moved code closer to beginning of code and declared variables
let customers = 1; /* customers should be recorded in numerals not stored as a string */
let location = 'RSA';
let currency = null;
let shipping = null;

// improve readability and modify math operators for functionality
// calcShipping was an undefined variable ∴ could not be fetched---made use of it here

switch (location) {     /* used switch statements for better readability and functionality over if statements */
    case 'RSA':
    const calcShipping = 400;    /* couldn't reassign new values to shipping and currency outside the block-scope */
    const newCurrency = 'R';    /* renamed variables to avoid block-scope syntax error */
    shipping = calcShipping;     /* used new variables as new values of the original variables given */
    currency = newCurrency;     /* used camelCase */
    break;
    case 'NAM':
    shipping = 600;
    currency = '$';
    break;
    default:
        shipping = 800;
        currency = '$';     /* default case closes statement ∴ 'break;' is unnecessary */
}

console.log('Shipping:', currency, shipping);

// defined variables with proper format

const shoes = 300 * 1;
const toys = 100 * 9;
const shirts = 150 * NONE_SELECTED;  /* NONE_SELECTED variable should not be a string */
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED; 

/* 
 * Improved functionality of code
 * Each location has its own if statement to check for total cost without shipping using && operator
 * Combined the two if statements for each location into one if statement using || operator
 * Code could also be written as follows and have full functionality:
 * 
 * With 2 separate if statements:
 * 
   if (location === 'RSA' && customers === 1) {
       if (shoes + toys + batteries + pens + shirts >= 1000) {
           shipping = 0;
       }
   }
 
   if (location === 'NAM' && customers === 1) {
       if (shoes + toys + batteries + pens + shirts >= 60) {
           shipping = 0;
       }
   }
 *
 * Or as a switch statement:
 * 
 * switch (location) {
    case 'RSA':
        if (customers === 1 && shoes + toys + batteries + pens + shirts >= 1000) {
            shipping = 0;
            console.log('Price:', currency, shoes + toys + batteries + pens + shirts);
        }
    break;
    case 'NAM':
        if (customers === 1 && shoes + toys + batteries + pens + shirts >= 60) {
            shipping = 0;
            console.log('Price:', currency, shoes + toys + batteries + pens + shirts);
        }
    break;
    }
 *
 */


// Wrapped code for better readability
// Nested if statements in another if statement that had a common conditional code

if (customers === 1) {
    if ((location === 'RSA' && shoes + toys + batteries + pens + shirts >= 1000) ||
        (location === 'NAM' && shoes + toys + batteries + pens + shirts >= 60)) {
        shipping = 0;
        console.log('Price:', currency, shoes + toys + batteries + pens + shirts);
    }
}

// WARNING is not a valid variable---fixed strict equality checker in code

else if (shipping === 0 && customers !== 1) { 
    console.log(FREE_WARNING); 
}

// WARNING variable in console.log cannot be fetched because it was never declared in the code
// Added strict equality checker in ternary

else {
    location === 'NK' ? console.log(BANNED_WARNING) : console.log('Price:', currency, shoes + toys + batteries + pens + shirts + shipping);
}
