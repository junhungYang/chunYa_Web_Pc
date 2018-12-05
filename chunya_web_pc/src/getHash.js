const getHash = function() {
    if (window.location.hash.includes('#/goodsList?')) {
        let arr = window.location.hash.split('=')
        return Number(arr[1])
    }
    return undefined
}
export { getHash };