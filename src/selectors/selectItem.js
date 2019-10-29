export const selectItemByPublished = (items,filterVariable = 'true') => {
    return items.filter(item => item.isPublished === filterVariable);
}

export const sortItem = (items, sortBy = "price") =>{
    return items.sort((a,b) => parseInt(b.sortBy) - parseInt(a.sortBy))
}



