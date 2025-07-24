async function getUser(userid) {
    try {
        if (isNaN(userid)) {
            throw new Error("UserId must be a Number");
        }
        else {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
            if (!response.ok) { 
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        }

    }
    catch(err){
        console.error(err);

    }
    
}