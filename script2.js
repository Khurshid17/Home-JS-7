function vowels(s) {
    arr = s.split("")
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() == "a" || arr[i].toLowerCase() == "у" || arr[i].toLowerCase() == "о" || arr[i].toLowerCase() == "ы" || arr[i].toLowerCase() == "и" || arr[i].toLowerCase() == "э" || arr[i].toLowerCase() == "я" || arr[i].toLowerCase() == "ю" || arr[i].toLowerCase() == "ё" || arr[i].toLowerCase() == "е") {
            a += 1; 
        }   
    }
    return a
}

let b = prompt('Введите строку');
console.log(vowels(b)); 