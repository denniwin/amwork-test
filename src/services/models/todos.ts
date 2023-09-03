export interface Todos {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface Pagination {
    _limit: number
    _page: number
}

export const defaultPagination = { _limit: 10, _page: 1 };