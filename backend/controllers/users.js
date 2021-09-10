import { Router } from 'express';
import Users from '@models/users';

const router = Router();

/**
 * Returns a list of all users.
 */
router.get('/', async (req, res) => {
    try {
        const rows = await Users.fetchAll();
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

/**
 * Returns a user by id.
 */
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const row = await Users.fetchByID(id);
        res.json(row);
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

/**
 * adds a user.
 */
router.post('/', async (req, res) => {
    const user = req.body;
    const { ip } = req;
    try {
        const newUser = await Users.addUser(user, ip);
        console.log('out of model');
        res.json(newUser);
    } catch (error) {
        res.status(500);
    }
});

export default router;
