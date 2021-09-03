import { Action } from "./reducer";
import { TypeReducerRickAndMorty } from "./types";
import { Character } from '../../api/rickAndMorty/interface';

export const getCharacter = ({ payload }: { payload: Character[] }): Action => ({
    type: TypeReducerRickAndMorty.GetCharacters,
    payload,
})