// Code could also be written as follows and have full functionality:
 
//   With 2 separate if statements:
  
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
 
//   Or as a switch statement:
 
switch (location) {
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
