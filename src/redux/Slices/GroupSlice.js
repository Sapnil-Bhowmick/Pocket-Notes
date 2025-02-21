import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    groups: []
}

const groupSlice = createSlice({
    name: "group",
    initialState,

    reducers: {
        addGroup: (state, action) => {

            const { groupName, preferredColor } = action.payload.data

            let groupID

            if (state.groups.length === 0) {
                groupID = 1
            } else {
                groupID = state.groups[state.groups.length - 1].id + 1
            }

            state.groups.push({
                id: groupID,
                groupInfo: {
                    name: groupName,
                    color: preferredColor
                },

                groupMessages: []

            })
        },

        addMessage: (state, action) => {
            const { groupID, messageData, messageCreationTime } = action.payload.data

            const updatedState = state.groups.map((group) => {
                if (group.id === groupID) {
                    let messageID
                    if (group.groupMessages.length === 0) {
                        messageID = 1
                    }
                    else {
                        messageID = group.groupMessages[group.groupMessages.length - 1].id + 1
                    }

                    group.groupMessages.push({
                        id: messageID,
                        message: messageData,
                        dateTime: messageCreationTime
                    })
                }
            })

        } ,

    }
})


// {
//     id -> grp ID ,
//     groupInfo: {
//         name: ,
//         color:
//     } ,

//     groupMessages: [
//         {
//          id -> msgID
//          message: ,
//          dateTime:
//      }
//     ]

// }



export const {addGroup ,addMessage} = groupSlice.actions
export default groupSlice.reducer