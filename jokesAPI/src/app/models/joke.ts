interface JokeFlags{
    religious: boolean;
    political: boolean;
}

export interface Joke{
    joke: string;
    category: string;
    id: number;
    type: string;
    error: boolean;
    flags: JokeFlags;
}