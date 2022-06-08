
import axios from 'axios';
import { coctelApi } from '../../../api/coctelApi';
import { startCoctels, setCoctels } from './CoctelSlice';

export const getCoctels = ( categoria = 'Gin' ) => {
    return async (dispatch) => {
        dispatch( startCoctels() );

        //llamado a la api
        const { data } = await coctelApi.get(`?i=${categoria}`);
        console.log(data.drinks)

        dispatch( setCoctels( data.drinks ))
    }
}
