import BaseModel from '@models/baseModel';
import Pool from '../config/databaseConfig';

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

    add = async (user, ipAddress) => {
        console.log(user);
        const {
            username,
            firstName,
            lastName,
            birthDate,
            password,
            email,
            avatarSm = '',
            avatarMd = '',
            avatarLg = ''
        } = user;
        const lastLoginIP = ipAddress;
        const sql = `INSERT INTO "${this.getTableName()}" (username, first_name, last_name, birth_date, password, email, avatar_sm, avatar_md, avatar_lg, last_login_ip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

        await this.pool.query(sql, [
            username,
            firstName,
            lastName,
            birthDate,
            password,
            email,
            avatarSm,
            avatarMd,
            avatarLg,
            lastLoginIP
        ]);
        return { ...user, lastLoginIP };
    };

    update = async (id, body) => {
        const user = await this.fetchByID(id);
        if (!user) {
            throw new Error("User doesn't exist");
        }
        console.log('passed the user check');
        const {
            username = user.username,
            firstName = user.first_name,
            lastName = user.last_name,
            birthDate = user.birthdate,
            password = user.password,
            email = user.email,
            avatarLg = user.avatar_lg,
            updatedON = new Date().toISOString()
        } = body;
        const sql = `UPDATE "${this.getTableName()}" SET username = $1, first_name = $2, last_name = $3, birth_date = $4, password = $5, email = $6, avatar_lg = $7, updated_on = $8 WHERE id = $9;`;

        await this.pool.query(sql, [
            username,
            firstName,
            lastName,
            birthDate,
            password,
            email,
            avatarLg,
            updatedON,
            id
        ]);

        return {
            id,
            username,
            firstName,
            lastName,
            birthDate,
            password,
            email,
            avatarLg,
            updatedON
        };
    };

    fetchByEmail = async (email) => {
        const sql = `SELECT * FROM "${this.getTableName()}" WHERE email = $1`;
        const data = await this.pool.query(sql, [email]);
        return data.rows;
    };

    fetchByUsername = async (username) => {
        const sql = `SELECT * FROM "${this.getTableName()}" WHERE username = $1`;
        const data = await this.pool.query(sql, [username]);
        return data.rows;
    };
}

export default new Users(Pool);
