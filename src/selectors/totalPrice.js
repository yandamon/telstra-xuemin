export default (items) =>{
    return items.map((item)=>parseInt(item.price))
                .reduce((sum,value) => sum + value, 0);
};