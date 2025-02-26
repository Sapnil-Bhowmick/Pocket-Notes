
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


export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
  
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options); // Example: "9 March 2023"
  
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
  
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`; // Example: "10:00 pm"

    // console.log("date" , formattedDate)
    // console.log("time" , formattedTime)
  
    return { formattedDate, formattedTime };
  };