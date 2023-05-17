export interface IUser {
    login: string,
    password: string,
    firstname?: string,
    lastname?: string
}

export const userDatabase: IUser[] = [
    {
        login: 'user1',
        password: 'user1',
        firstname: 'Jasmina',
        lastname: 'Marcova'
    },
    {
        login: 'user2',
        password: 'user2',
        firstname: 'Jasmina',
        lastname: 'Marcova'
    },
    {
        login: 'user3',
        password: 'user3',
        firstname: 'Jasmina',
        lastname: 'Marcova'
    },
    {
        login: 'user4',
        password: 'user4',
        firstname: 'Jasmina',
        lastname: 'Marcova'
    },
    {
        login: 'user5',
        password: 'user5',
        firstname: 'Jasmina',
        lastname: 'Marcova'
    }
]