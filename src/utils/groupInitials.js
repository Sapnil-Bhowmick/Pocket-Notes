
export const groupInitials = (groupName) => {

    const nameArr = groupName.split(" ")

    // 1 word
    if(nameArr.length === 1){
        const firstAplhabet = [...nameArr[0]][0]
        return `${firstAplhabet}`
    } else {
        const initial = [...nameArr[0]][0] + [...nameArr[1]][0]
        return `${initial}`
    }
}