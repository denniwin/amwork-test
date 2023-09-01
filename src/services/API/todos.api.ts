import axios from "axios";
import { Todos } from "../models/todos";


export const GetTodos = async ():Promise<Todos[]> => {
    const response = await axios.get<Todos[]>("https://jsonplaceholder.typicode.com/todos");
    return response.data;
}

