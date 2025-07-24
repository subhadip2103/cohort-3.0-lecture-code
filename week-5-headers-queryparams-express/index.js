
let container=document.querySelector(".display");
async function getRecentPost() {
    /* fetch version */
    // let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    // let data=await response.json();
    // container.innerHTML=data.body;


    //axios version
    let response= await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    container.innerHTML=response.data.body
    

}

getRecentPost()