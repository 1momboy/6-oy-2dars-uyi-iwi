export const getUser = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : false
};
export const getProducts = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
};