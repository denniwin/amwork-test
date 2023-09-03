import axios from "axios";
import { defaultPagination, Pagination, Todos } from "../models/todos";


export const GetTodos = async (params : Partial<Pagination> = defaultPagination):Promise<Todos[]> => {
    const response = await axios.get<Todos[]>("https://jsonplaceholder.typicode.com/todos", {params} );
    return response.data;
}

