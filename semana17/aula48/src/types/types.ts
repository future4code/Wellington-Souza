enum types  {
    TEACHER = "Teacher",
    OPERATIONS = "Operations",
    CX = "CX"
}


export type user = {
    id: number;
    name: string;
    email: string,
    type: types
}