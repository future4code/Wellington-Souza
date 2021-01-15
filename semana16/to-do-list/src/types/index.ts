export type users = {
    id: number,
    name: string,
    nickname: string,
    email: string
}

export enum status {
    TODO = "To-do",
    DOING = "Doing",
    DONE = "Done"
}

export type task = {
    id: number,
    title: string,
    description: string,
    limitDate: Date,
    status: status,
    
}