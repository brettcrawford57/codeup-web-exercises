

function getLastPushDate(githubUsername){
let url = `https://api.github.com/users/${githubUsername}/events`;
let GHrespond = fetch(url, {headers: {'Authorization': `token ${GHpromiseToken}`}});
    return GHrespond
        .then((response)=>{
            return response.json();
        })
        .then((githubEventData)=>{
            for (let githubEvent of githubEventData){
                if(githubEvent.type === "PushEvent"){
                    return new Date(githubEvent.created_at);
                }
            }
        });
}

getLastPushDate("brettcrawford57").then((date)=>console.log(date));