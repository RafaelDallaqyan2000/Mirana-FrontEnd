export function phoneRegEx(phone) {
    let reg = new RegExp("^[0-9]{8}$");
    if (reg.test(phone))
        return true;
    else return false;
}
