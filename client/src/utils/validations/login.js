export function validateEmail(email){
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

export function validatePassword(password){
    const regex = /^[A-Za-z\d]{5,15}$/;
    return regex.test(password);
}