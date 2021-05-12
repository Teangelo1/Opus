import { resolve } from 'path';
import {Connection} from './database';

export const all = async () => {
return new Promise ((resolve, reject) => {
    Connection.query('SELECT * FROM books', (err, results) => {
        if (err) {
            return reject(err);
        }
        resolve(results)
    })
})

}

export default {
    all
}