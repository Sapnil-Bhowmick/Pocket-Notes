import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    groups: [] ,
    activeGroup: null
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

        addActiveGroup: (state , action) => {
            const {activeGroupId , groupName , colorPreference} = action.payload.data
            state.activeGroup = {
                id: activeGroupId,
                name: groupName,
                color: colorPreference
            }
        }

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
//          id -> grpID
//          message: ,
//          dateTime:
//      }
//     ]

// }


// activeGroup: {
//     activeGroupId ,
//     name ,
//     color
// }

export const {addGroup ,addMessage ,addActiveGroup} = groupSlice.actions
export default groupSlice.reducer