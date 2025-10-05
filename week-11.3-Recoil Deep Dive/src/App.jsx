import { RecoilRoot, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './store/atoms/counter'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const notificationsCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <button>Home</button>
      <button>My Network({notificationsCount.network})</button>
      <button>Jobs({notificationsCount.jobs})</button>
      <button>Messaging({notificationsCount.messaging})</button>
      <button>Notifications({notificationsCount.notifications})</button>
      <button>Me({totalNotificationCount})</button>
    </>

  )
}
export default App

















// import React, { useState } from 'react'
// import { RecoilRoot, useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
// import { networkAtom, notificationsAtom, jobsAtom, messagingAtom, sumOfAtomCount } from './store/atoms/counter'

// function App() {
//   return (
//     <RecoilRoot>
//       <MainApp />
//     </RecoilRoot>
//   )

// }
// function MainApp() { 
//   return (
//     <div>
//       <button>Home</button>
//       <Network />
//       <Jobs />
//       <Messaging />
//       <Notifications />
//       <TotalNotification/>
//       <ClearButton/>
//     </div>
//   )
// }


// function Network() {
//   const [networkNotificationsCount, setNetworkCount] = useRecoilState(networkAtom);
//   function increasenetwork() {
//     setNetworkCount(c => c + 1)
//   }
//   return (
//     <button onClick={increasenetwork}>My newtwork({networkNotificationsCount >= 100 ? "99+" : networkNotificationsCount})</button>

//   )
// }
// function Jobs() {
//   const [jobsAtomCount, setJobsCount] = useRecoilState(jobsAtom);
//   function increaseJobs() {
//     setJobsCount(c => c + 1)
//   }

//   return (
//     <button onClick={increaseJobs}>Jobs({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
//   )
// }
// function Messaging() {
//   const [messagesAtomCount, setMessagesCount] = useRecoilState(messagingAtom);
//   function increaseMessages() {
//     setMessagesCount(c => c + 1)
//   }
//   return (
//     <button onClick={increaseMessages}>Messaging({messagesAtomCount >= 100 ? "99+" : messagesAtomCount})</button>
//   )

// }

// function Notifications() {
//   const [notificationsAtomCount, setNotificationCount] = useRecoilState(notificationsAtom);
//   function increasenotifications() {
//     setNotificationCount(c => c + 1)
//   }

//   return (
//     <button onClick={increasenotifications}>Notifications({notificationsAtomCount >= 100 ? "99+" : notificationsAtomCount})</button>
//   )
// }
// function TotalNotification(){
//   const totalNotificationCount=useRecoilValue(sumOfAtomCount);
//   return <button>Me({totalNotificationCount})</button>
// }
// function ClearButton(){
//   const resetNetwork = useResetRecoilState(networkAtom);
//   const resetJobs = useResetRecoilState(jobsAtom);
//   const resetMessages = useResetRecoilState(messagingAtom);
//   const resetNotifications = useResetRecoilState(notificationsAtom);

//   function handleClearAll() {
//     resetNetwork();
//     resetJobs();
//     resetMessages();
//     resetNotifications();
//   }

//   return <button onClick={handleClearAll}>Clear Notifications</button>

// }

// export default App
