/**
 * Created by urukhai on 3/28/15.
 */
function hideInvoiceInformation() {
    var check = document.getElementById('invoice');
    var additional = document.getElementById('additional');
    if(!check.checked){
        additional.style['display'] = 'none';
    } else {
        additional.style['display'] = 'block';
    }

}