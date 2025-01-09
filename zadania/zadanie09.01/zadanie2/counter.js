let count = 0

function increment() {
    return count + 1
}
 
function decrement() {
    return count - 1
}
 
function getCount() {
    return count
}

module.exports = {
    increment: increment,
    decrement: decrement,
    getCount: getCount
}