// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)

}
function destructivelyRemoveLastCat(){
    cats.pop() 
}    

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const addcat =[ ...cats,name];
    return addcat; //addding cat to the front hint where cat is in the name
}
function prependCat(name){
    const catadd=[name, ...cats]
    return catadd; //adding cat to the end hint where cat is in the name
}
function removeLastCat(){
    cats.slice(0,2);
    return cats.slice(0,2);
}
function removeFirstCat(){
    cats.slice(1);
    return cats.slice(1);
}