import {getAll , createUser , getUserDetails} from '../controller/user';
import express from 'express';

const router = express.Router();

router.get('/users', getAll);
router.post('/users', createUser);

module.exports = router;