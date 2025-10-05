import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "networkAtom",
        get: async () => {
            const res = await axios.get("http://localhost:3000/counts")
            return res.data
        }
    })
});



export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notifications);
        return allNotifications.network + allNotifications.jobs + allNotifications.messaging + allNotifications.notifications;
    }
})













// import { atom, selector } from "recoil";

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 104
// })
// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 0
// })
// export const notificationsAtom = atom({
//     key: "notificationsAtom",
//     default: 12
// })
// export const messagingAtom = atom({
//     key: "messagingAtom",
//     default: 0
// })

// export const sumOfAtomCount = selector({
//     key: "sumofatomcount",
//     get: ({ get }) => {
//         let networkAtomCount = get(networkAtom);
//         let jobsAtomCount = get(jobsAtom);
//         let notificationAtomCount = get(notificationsAtom);
//         let messageAtomCount = get(messagingAtom);

//         const finalCount=networkAtomCount+jobsAtomCount+notificationAtomCount+messageAtomCount;

//         return finalCount
//     }
// })