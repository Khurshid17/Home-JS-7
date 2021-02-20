const comands = [];
for (let i = 0; i < Infinity; i++) {
    let a = prompt('Введите команду (add, del, stop)', 'add, Иван');
    if (a=='stop') {
        break;
    }
    else if (a.split(", ")[0] == "del") {
        for (let j = 0; j < comands.length; j++) {
            if(comands[j]==a.split(", ")[1]){
                comands.splice(j,1);
            }
        }
    }
    else if (a.split(", ")[0] == "add") {
        comands.push(a.split(", ")[1]);
    }
}
console.log(comands);