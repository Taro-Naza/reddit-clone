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
    } catch (err) {
        console.error(err);
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
    } catch (err) {
        console.error(err);
        res.status(500);
    }
});

/**
 * adds a user.
 */
router.post('/', async (req, res) => {
    const user = req.body;
    const { ip } = req;

    const emailExists = await Users.fetchByEmail(user.email);
    if (emailExists.length > 0) {
        return res
            .status(409)
            .json('There is already an account with this email');
    }

    const usernameExists = await Users.fetchByUsername(user.username);
    if (usernameExists.length > 0) {
        return res
            .status(409)
            .json('There is already a user with this username');
    }

    try {
        const newUser = await Users.addUser(user, ip);
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
    return null;
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Users.deleteByID(id);
        res.json('User Deleted');
    } catch (err) {
        console.error(err);
        res.status(500);
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedUser = await Users.update(id, body);
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;
