/**
 * Parent class for database models.
 */
class BaseModel {
    /**
     * Constructor
     *
     * @param {Pool} pool
     */
    constructor(pool) {
        this.pool = pool;
    }

    /**
     * Returns the name of the model table
     */
    getTableName = () => {
        throw new Error('getTableName not defined in child class.');
    };

    /**
     * Returns all rows from the table
     *
     * @returns {Promise<*>}
     */
    fetchAll = async () => {
        const sql = `SELECT * FROM "${this.getTableName()}"`;
        const data = await this.pool.query(sql);

        return data.rows;
    };

    /**
     * Returns the row for the given ID
     *
     * @param {number} id
     * @returns {Promise<*>}
     */
    fetchByID = async (id) => {
        const sql = `SELECT * FROM "${this.getTableName()}" WHERE id = $1  LIMIT 1`;
        const data = await this.pool.query(sql, [id]);
        if (data.rows.length > 0) {
            return data.rows[0];
        }

        return null;
    };

    /**
     * Deletes the row for the given ID
     *
     * @param {number} id
     * @returns {Promise<boolean>}
     */
    deleteByID = async (id) => {
        const sql = `DELETE FROM ${this.getTableName()} WHERE id = ? LIMIT 1`;
        await this.pool.query(sql, [id]);

        return true;
    };
}

export default BaseModel;
