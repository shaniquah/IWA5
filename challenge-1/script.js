// define constant global variables

const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0 /* value should be numerical---cannot multiply later with a string */

// moved code closer to beginning of code and declared variables
const customers = 1 /* customers should be recorded in numericals not stored as a string */
let location = 'RSA'
let currency = null

// improve readability and modify math operators for functionality

if (location === 'RSA') { 
    shipping = 400;
    currency = 'R';
}

if (location === 'NAM') {
    shipping = 600;
    currency = '$';
} else {
    shipping = 800;
    currency = '$';
}

// defined variables with proper format

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;  /* NONE_SELECTED variable should not be a string */
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED; 

const shipping = null;
let currency = '$';

if (shoes + batteries + pens + shirts > 1000 ) {
	if (location === 'NAM' && customers < 2) {
			if (location === 'RSA'){
		    shipping = 0 || calcShipping
		}
	}
}

// WARNING is not a valid variable---fixed strict equality checker in code

if (shipping === 0 && customers !== 1) { 
    console.log(FREE_WARNING) 
}

// WARNING variable in console.log cannot be fetched because it was never declared in the code

let location = ('NK' ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping))

