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

    addUser = async (user, ipAddress) => {
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
}

export default new Users(Pool);
