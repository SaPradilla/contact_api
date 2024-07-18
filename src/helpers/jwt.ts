
import { verify,Secret } from "jsonwebtoken";
import dotenv from 'dotenv'
import { envs } from '../config/envs';

export function comprobarJWT( token:string = '' ): [boolean,string | null]{

    try {
        
        const { username } = verify(token, envs.JWT_KEY as Secret) as { username: string };


        return [true,username]

    } catch (error) {

        return [false,null]
    }

}
