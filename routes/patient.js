import { getUserDetails , getPatients} from '../controller/user';
import express from 'express';

const router = express.Router();

router.get('/patient/:email', getUserDetails);
router.get('/patient/', getPatients);


module.exports = router;