export default (items) => {
    return items.filter(item => item.isPublished === "true")
                .sort((a,b)=> parseInt(b.price) - parseInt(a.price))
}