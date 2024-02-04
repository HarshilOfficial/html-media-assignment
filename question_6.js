/*pre proceesing fee = var fee*/

var fee;
var key = 'credit';
switch (key) {
    case 'credit':
        fee = '2%'

        break;

    case 'debit':
        fee = '1.5%'
        break;

    case 'paypal':
        fee = '3%'
        break;

    default:
        fee = '0%'
        break;

}
console.log(fee)