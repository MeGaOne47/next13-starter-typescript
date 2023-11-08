interface IBlog {
    id:  number; 
    content: string;
    author: string;
    title: string;
}

interface IUser {
    id: number;
    email: string | null;
    picture: string | null;
    username: string | null;
}
