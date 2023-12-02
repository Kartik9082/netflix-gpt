
export const checkValidData = (email, password, name) => {

    // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const isEmailValid = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isNameValid) return "Name is Not valid"
    if(!isEmailValid) return "Email ID is not Valid"
    if(!isPasswordValid) return "Password is not Valid"

    return null;

};