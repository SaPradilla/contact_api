import 'dotenv/config';
import {get} from 'env-var'

export const envs ={

    PORT: get('PORT').required().asPortNumber(),
    DB_CNN_STRING : get('DB_CNN_STRING').required().asString(),
    JWT_KEY: get('JWT_KEY').required().asString(),
    API_SECRET: get('API_SECRET').required().asString(),
    API_KEY: get('API_KEY').required().asString(),
    CLOUD_NAME: get('CLOUD_NAME').required().asString(),
}