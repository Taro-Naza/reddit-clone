import { Router } from 'express';
import pool from '../database';
import {
    addUser,
    checkEmailExist,
    getUserByID,
    getUsers
} from '../models/users';

const router = Router();

/**
 * Returns a list of all users.
 */
router.get('/', (req, res) => {
    pool.query(getUsers)
        .then((data) => res.json({ success: true, data: data.rows }))
        .catch(() =>
            res.status(500).json({ success: false, error: 'INTERNAL ERROR' })
        );
});

/**
 * Returns a user by id.
 */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    pool.query(getUserByID, [id])
        .then((data) => res.json({ success: true, data: data.rows }))
        .catch(() =>
            res.status(500).json({ success: false, error: 'INTERNAL ERROR' })
        );
});

/**
 * adds a user.
 */

router.post('/', (req, res) => {
    const {
        username,
        firstName = null,
        lastName = null,
        birthDate = null,
        password,
        email,
        avatarSm = null,
        avatarMd = null,
        avatarLg = null,
        createdOn = Date.now(),
        updatedOn = null,
        lastLoginIP = req.ip,
        isDeleted = false
    } = req.body;

    pool.query(checkEmailExist, [email])
        .then((data) => {
            if (data.rows.length > 0) {
                return res.send("There's already a user with this email");
            }
            return pool.query(addUser, [
                username,
                firstName,
                lastName,
                birthDate,
                password,
                email,
                avatarSm,
                avatarMd,
                avatarLg,
                createdOn,
                updatedOn,
                lastLoginIP,
                isDeleted
            ]);
        })
        .then((data) => res.json({ success: true, data: data.rows }))
        .catch((error) => res.send(error.stack));
});
export default router;
