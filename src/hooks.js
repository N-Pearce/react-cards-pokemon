import {useState} from 'react'
import {v1 as uuid} from "uuid";
import axios from "axios";

function useFlip() {
    const [isFacingUp, setIsFacingUp] = useState(true)

    const toggle = () => {
        setIsFacingUp(isUp => !isUp)
    }
    return [isFacingUp, toggle];
}

function useAxios(url) {
    const [array, setArray] = useState([]);

    const addElem = async (addedUrl='') => {
        console.log(url)
        const response = await axios.get(`${url}${addedUrl}`);
        setArray(data => [...data, { ...response.data, id: uuid() }]);
    };
    return [array, addElem];
}

export {useFlip, useAxios}