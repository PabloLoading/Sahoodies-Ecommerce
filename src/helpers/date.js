export const getTime=()=>{
    let date  = new Date();
    let dateOptions = { weekday: 'long', year: 'numeric',
     month: 'long', day: 'numeric',hour:'numeric',minute:'2-digit' };
    return date.toLocaleDateString('en-US',dateOptions)
}