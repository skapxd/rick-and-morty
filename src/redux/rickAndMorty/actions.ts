import { Action } from "./reducer";
import { TypeReducerRickAndMorty } from "./types";
import { Character } from '../../api/rickAndMorty/interface';
import request, { TypeRequstRickAndMorty } from "../../api/rickAndMorty/request";

export const getData = () => {
    return async (dispatch: any) => {

        const resp = await request({
            typeOfRequest: TypeRequstRickAndMorty.GetAllCharacter
        })
        dispatch(
            getCharacter(resp)
        )
    }
}

const getCharacter = (payload: Character[]): Action => ({
    type: TypeReducerRickAndMorty.GetCharacters,
    payload
})