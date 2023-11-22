export type Episode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type EpisodeOrString = Episode | string;

/**
 * Film dans ma ludothèque
 */
export interface Film {
    title: string,
    episodeId: Episode,
    openingCrawl ?: string,
    director ?: string,
    producer ?: string,
    releaseDate: Date
}
export interface FilmComplet extends Film {
    description: string
}

// export type Film = {
//     title: string,
//     episodeId: Episode,
//     openingCrawl ?: string,
//     director ?: string,
//     producer ?: string,
//     releaseDate: Date
// }
// export type FilmComplet = Film & {
//     description: string
// }

export function createFilm(id: Episode, title: string, release: Date): Film {
    return {
        episodeId: id,
        releaseDate: release,
        title: title
    }
}

/**
 * 
 */
export type Films = Film[];
