function summary (text,char){
    const sum=text.substr(0,char);
    return `${sum}...`;
}
console.log(summary("hello darling",11));

function secretCard(cardnum){
    const card=String(cardnum).substring(0,12);
    return `${card}****`;
}
console.log(secretCard(98765432122222));


function censor (text,word){
    const censoredTex=text.replace(word,"*".repeat(word.length));
    return censoredTex;
}
console.log(censor("how are you today","today"));


function level(years){
    if (years<=2){
        return "you are junior";
    }
    if (years>=3 , years<=5) {
        return "you are middlevel";
    } else {
        return "you are a senior.."
    }
}
console.log(level(8));

// return years<=2 ? "you are junior" : years<=5 ? "middlevel" : "senior";
// }
// console.log(level(6));