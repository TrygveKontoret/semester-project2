
export const fetchProducts = async (url) => {
    const response = await fetch(url);
    return await response.json();
};