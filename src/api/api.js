import axios from "axios";

const url = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => {
    try {
        const {data} = await axios.get(url);
        return data
    } catch (error) {
        console.log(error);
    }
};