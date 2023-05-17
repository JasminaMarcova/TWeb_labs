export interface IFilm {
    name: string,
    description: string,
    imageUrl: string,
    ticketPrice: number
}

export interface IFilmDetailed extends IFilm {
    actors?: string[],
    genres?: string[],
    year?: number
}

export const filmsList: IFilmDetailed[] = [
    {
        name: 'The Timekeeper\'s Odyssey',
        description: 'In a world where time travel is possible, a brilliant physicist invents a device that can alter the course of history. When his creation falls into the wrong hands, a young archaeologist embarks on a thrilling journey through time to retrieve it, facing dangerous paradoxes and unexpected allies along the way.',
        imageUrl: 'https://m.media-amazon.com/images/I/51pBjOuG5JL.jpg',
        ticketPrice: 5.99
    },
    {
        name: 'Whispers in the Wind',
        description: 'In a small coastal town, a mysterious force begins to possess the locals, compelling them to share their deepest secrets with strangers. As the community unravels, a skeptical journalist teams up with a psychic medium to uncover the origins of these eerie whispers and save the town from its haunting past.',
        imageUrl: 'https://m.media-amazon.com/images/I/51pBjOuG5JL.jpg',
        ticketPrice: 5.99
    },
    {
        name: 'Legacy of the Moon',
        description: 'Set in a futuristic lunar colony, a determined astronaut discovers a hidden chamber beneath the moon\'s surface containing ancient artifacts and an encoded message from an extraterrestrial civilization. With time running out, she must decipher the enigmatic message and confront the dark secrets that threaten humanity\'s existence.',
        imageUrl: 'https://m.media-amazon.com/images/I/51pBjOuG5JL.jpg',
        ticketPrice: 5.99
    },
    {
        name: 'Shattered Realms',
        description: 'In a post-apocalyptic world torn apart by warring factions, a skilled warrior is tasked with retrieving a legendary artifact that holds the key to restoring balance and ending the chaos. Alongside a diverse group of survivors, she embarks on a perilous journey across treacherous landscapes, encountering formidable adversaries and discovering her own hidden powers.',
        imageUrl: 'https://m.media-amazon.com/images/I/51pBjOuG5JL.jpg',
        ticketPrice: 5.99
    }
]