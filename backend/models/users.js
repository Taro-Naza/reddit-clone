import BaseModel from '@models/baseModel';
import pool from '../config/databaseConfig';

/**
 * Model for the user table.
 */
class Users extends BaseModel {
    /**
     * Returns the name of the model table
     */
    getTableName = () => {
        return 'user';
    };
}

export default new Users(pool);

/* const getUsers = 'SELECT * FROM "user";';
const getUserByID = 'SELECT * FROM "user" WHERE id = $1;';
const addUser = `
INSERT INTO "user" (username, first_name, last_name, birth_date, password, email, avatar_sm, avatar_md, avatar_lg, created_on, updated_on, last_login_ip, is_deleted) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
const checkEmailExist = 'SELECT *  FROM "user" WHERE email = $1';

module.exports = { getUsers, getUserByID, addUser, checkEmailExist }; */
