import React, { useEffect, useState } from "react"
// import { PostComponent } from "./post"
// import { tweetComponent } from "./tweet"

function App() {
    const [showTimer, setShowTimer] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setShowTimer(currentValue => !currentValue)
        }, 5000)
    }, [])
    return (
        <div>{showTimer && <Timer />}</div>
    )

    function Timer() {
        const [seconds, setSeconds] = useState(0);

        useEffect(() => {
            const clock = setInterval(() => {
                console.log("from inside clock")
                setSeconds((prevValue) => prevValue + 1)

            }, 1000)
            return ()=>{
                clearInterval(clock)
            }
        }, [])

        return <div>{seconds} seconds elapsed.</div>
    }









    // const [currentTab, setCurrentTab] = useState(1);
    // const [tabData,setTabData]=useState({})
    // const [loading,setLoading]=useState(true)
    // useEffect(() => {
    //     setLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/todos/' + currentTab).then(async (res)=>{
    //         const json=await res.json()
    //         setTabData(json)
    //         setLoading(false)
    //     })

    // }, [currentTab])

    // return <div>
    //     <button style={{ color: currentTab === 1 ? "red" : "black" }}
    //         onClick={() => { setCurrentTab(1) }}>Todo #1</button>
    //     <button style={{ color: currentTab === 2 ? "red" : "black" }}
    //         onClick={() => { setCurrentTab(2) }}>Todo #2</button>
    //     <button style={{ color: currentTab === 3 ? "red" : "black" }}
    //         onClick={() => { setCurrentTab(3) }}>Todo #3</button>
    //     <button style={{ color: currentTab === 4 ? "red" : "black" }}
    //         onClick={() => { setCurrentTab(4) }}>Todo #4</button>
    //     <br></br>
    //     {loading?"Loading...": tabData.title}
    // </div>



















    // const [count, setCount] = useState(0);
    // const [count2, setCount2]=useState(100)
    // function increaseCount() {
    //     setCount((currentvalue) =>{
    //         return currentvalue + 1
    //     } )
    // }
    // function decreaseCount(){
    //     setCount2((currentvalue)=>{
    //         return currentvalue-1
    //     })
    // }
    // useEffect(() => {
    //     console.log("useEffect called above setinteval")
    //     setInterval(increaseCount, 1000)
    //     setInterval(decreaseCount,1000)
    // }, [])
    // useEffect(()=>{
    //     console.log("increased count is"+ count +",decreased count is "+ count2)
    // },[count,count2])
    // return (
    //     <div>
    //         <div style={{ borderRadius: 60, height: 25, width: 25, backgroundColor: "red", marginLeft: 30 }}><b style={{ margin: 7 }}>{count}</b> </div>
    //         <div>
    //             <img style={{ cursor: "pointer" }} src="https://toppng.com/uploads/preview/lease-share-with-others-and-hit-the-bell-icon-next-subscribe-button-with-bell-ico-11562851774ld8r0rogk7.png" height={50} width={50} alt="bell icon" />
    //         </div>

    //     </div>
    // )
}

export default App

















// function App() {
//     const [tweets, setTweets] = React.useState([]);
//     const tweetsComponent = tweets.map(tweet => <tweetComponent
//         user={tweet.user}
//         handle={tweet.handle}
//         time={tweet.time}
//         content={tweet.content}
//         image={tweet.image}
//     />)
//     function addTweet(){
//         setTweets([...tweets,{
//             user:"harkirat",
//             handle:"hakiratsingh100xdevs",
//             time:"2m ago",
//             content:"Elon musk launches a new company called closedAI a direct chatgpt competitor, what are your thoughts will it be able to dethrown openAI and gpt",
//             image:"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
//         }])
//     }
//     return (
//         <div style={<div style={{ background: "#dfe6e9", height: "100vh", }}>
//             <button onClick={addTweet}>Add post</button>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//                 <div>
//                     {tweetsComponent}
//                 </div>
//             </div>
//         </div>}></div>
//     )

// }


























// function App() {
//     return (
//         <div style={{ backgroundColor: "#95a5a6" , width:"50vw", height:"100vh"}}>
//             <ToggleMessage />
//             <ToggleMessage />
//             <ToggleMessage />
//         </div>
//     )


//     //   return (
//     //     <div style={{ backgroundColor: "#95a5a6", height: "100vh", width: "100vw" }}>
//     //       <div style={{ display: "flex", justifyContent: "center" }}>
//     //         <div>
//     //           <div><PostComponent /></div><br />
//     //           <div><PostComponent /></div><br />
//     //           <div><PostComponent /></div></div>
//     //       </div>
//     //     </div>
//     //   )

//     // }
//     // function PostComponent() {
//     //   return <div style={{ width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth: 2 }}>
//     //     <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//     //       <img style={{
//     //         height: 30,
//     //         width: 30,
//     //         borderRadius: 60
//     //       }} src={"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="profile pic" />
//     //       <div style={{ fontSize: 10 }}>
//     //         <b>100xDevs</b>
//     //         <div>40000 followers</div>
//     //         <div>12m</div>
//     //       </div>
//     //     </div>
//     //     <div style={{ fontSize: 14 }}>
//     //       Want to know how these folks won 6000$ in just 3 hours
//     //     </div>

//     //   </div>
// }

// function ToggleMessage() {
//     const [isVisible, setisVisible] = React.useState(false);// defining a newstate variable
//     // when the value of a state variable changes,
//     // the component that uses the state variable re-renders
//     const [Count, setCount] = React.useState(0)

//     return (
//         <div>
//             <button onClick={() => {
//                 setisVisible(!isVisible)
//                 if (!isVisible) {
//                     setCount(Count + 1)
//                 }
//             }}>Toggle Button</button>
//             {isVisible && <p>This message is conditionally rendered and will only be printed if you want to turn it on<b>Message count:{Count}</b></p>}
//         </div>
//     )
// }

// export default App
