// string is umutable === not change

// const capitl = "Dhaka";
// console.log(capitl.length);
// console.log(capitl[1]);


// const school = "Rima Sultana";

// console.log(school);
// console.log(school.toLowerCase());
// console.log(school.toUpperCase());

const subject = "Chemisty";
const book = "ChemisTy";

if(subject.toLowerCase() == book.toLowerCase()){
    console.log("i am reading book");
}else{
    console.log("hudai amon korchi");
}


const drink = " water";
const liquit = "   water";

if(drink.trim() === liquit.trim()){
    console.log("pani er opur name jibon");
}
else{
    console.log("somudre pani ase");
}