import { Router } from 'express';

const router = Router();

/**
 * Returns a list of all users.
 */
router.get('/', (req, res) => {
    res.json([]);
});

export default router;
