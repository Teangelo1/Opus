import * as MySQL from 'mysql'
import sequelize from '../config/connection';

import books from './bookDatabase'

export const Connection = MySQL.createConnection(sequelize.MySQL)

Connection.connect(err => {
    if(err) console.log(err)
})

export default {
    books
}