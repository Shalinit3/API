import { Router } from 'express';
import { add, view } from './controller'

const router =  new Router();
router.route('/user/add').post(add);
router.route('/user/view').get(view);

export default router;