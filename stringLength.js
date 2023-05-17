const stringLength = (string) => {
    const newString = string.length;
    if(newString >= 1 && newString <= 10){
        return newString;
    } else {
        return "String length must be between 1 to 10";
    }
};

module.exports = stringLength;