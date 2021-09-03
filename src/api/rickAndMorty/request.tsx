import baseUrl from "./baseUrl"
import { Character, RickAndMortyResponse } from "./interface";

export enum TypeRequstRickAndMorty {
    GetAllCharacter = '/character'
}

interface Props {
    typeOfRequest: TypeRequstRickAndMorty
}

export default async ({ typeOfRequest }: Props): Promise<Character[]> => {

    const resp = await baseUrl.get<RickAndMortyResponse>(typeOfRequest)

    return resp.data.results;

}