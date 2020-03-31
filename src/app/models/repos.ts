// The results list should contain the repo name; the author’s name; the repo image; number of
// stars & watchers. The list should be sorted by the number of stars. When the user clicks on a
// result item; they should be taken to a new page where you display more info about the
// repository and author (like when was it last updated; which programming language is used; the
// author’s avatar etc.)


export interface RepoList {
    total_count: number;
    items: Array<RepoDetails>;
}

export interface Owner {
    login: string;
    id: number;
    avatar_url: string;
}

export interface RepoDetails {
    id: number;
    name: string;
    full_name: string;
    owner: Owner;
    watchers_count: number;
    language: string;
    created_at: string;
    updated_at: string;
    description: string;
}
