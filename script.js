const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "UcdG5prg8VfvGuYnkmTHJQ==0NsabCn3cNy14qA9";


const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try{
        jokeEl.innerText = "Updating...";
        btnEl.ariaDisabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL,options);
        const data = await response.json();
    
        btnEl.ariaDisabled = false;
        btnEl.innerText = "Tell me a joke";
    
        jokeEl.innerText = data[0].joke;
    }
    catch(error){
        jokeEl.innerText = "An error happened, try again later";
        btnEl.ariaDisabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }
}

btnEl.addEventListener("click",getJoke);