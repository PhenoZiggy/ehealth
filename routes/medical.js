import { CreateMedical , getMedical} from '../controller/medical';
import express from 'express';

const router = express.Router();

router.post('/medical', CreateMedical);
router.get('/medical', getMedical);

module.exports = router;