// regular if...else  statement

let value;

if (1 === 1) {
    value = 'z'
} else {
    value = 'x'
}
console.log(value);

// readable ternary used as shorthand for if...else inline evaluation

let value = (1 === 1 ? 'z' : 'x')
console.log(value);

// logical AND operator (&&) 

console.log(1 === 1 && 5 === 5 ? 'test' : 'not-true');  /* test returns true */

console.log(1 === 1 && 5 === 4 ? 'test' : 'not-true');  /* test returns not true */

const result = (1 === 1 && 5 === 4);    /* both statements have to be true */
console.log(result === true ? 'z' : 'x')
// both statements are false, result = x

const result = (1 === 1 && 5 === 5);    /* both statements have to be true */
console.log(result === true ? 'z' : 'x')
// both statements are true, result = z


// logical OR operator (||)

const result = (1 === 1 || 5 === 4);    /* either one of the statements has to be true */
console.log(result === true ? 'z' : 'x')
// one statement is true(1===1), result = z

const result = (1 === 2 || 5 === 4);    /* either statement has to be true */
console.log(result === true ? 'z' : 'x')
// neither statement is true, result = x


/* Math Operators in JavaScript:
 *
 * + addition
 * - subtraction
 * / division
 * * multiplication
 * ** to the power of(aka to the exponent)
 * % remainder
 * < less than
 * > greater than
 * <= less than or equal to
 * >= greater than or equal to
 * === strict equality checker
 * !== strict inequality checker
 * == normal equality checker
 * != normal inequality checker
 * 
 */