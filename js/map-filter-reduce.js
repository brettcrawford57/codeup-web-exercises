const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter(function(languages){
    return languages.languages.length >= 3;
});

console.log(threeLanguages)

let userEmails = users.map(function(elemail){
    return elemail.email
})

console.log(userEmails);

let totalYears = users.reduce(function(totalYears, user){
    return totalYears + user.yearsOfExperience;
}, 0)

let averageYears = totalYears / users.length;

console.log(averageYears);

let longestEmail = users.reduce(function(longEmail, user){
        if (longEmail.length < user.email.length){
        longEmail = user.email
    } return longEmail
}, "")

console.log(longestEmail);

let userString = users.reduce(function(accum, user){
    return `${accum} ${user.name}`;
}, ''.slice(0, -1) + "")

console.log(userString);

let uniqueLanguage = users.reduce(function(langList, user, index) {
    user.languages.forEach(function(language){
        if (!langList.includes(language)) {
            langList.push(language);
        }
    })
    return langList
}, [])
console.log(uniqueLanguage);