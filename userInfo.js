import { words, strings } from "./arrayManipulation.js";
const createUserProfiles = (names, modifiedNames) => {
    let id = 1;
    return names.map((name, index) => {
        return{
            originalName: name, 
            modifiedName: modifiedNames[index],
            id: id++
        };
    });
}

const profiles = createUserProfiles(words, strings);
console.log(profiles);