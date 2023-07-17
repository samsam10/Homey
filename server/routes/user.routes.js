// import all controllers so u can utilize them inside of ur routes

import express from 'express'

import { getAllUsers, createUser, getUserInfoByID } from '../controllers/user.controller.js'

const router = express.Router()


router.route('/').get(getAllUsers)
router.route('/').post(createUser)
router.route('/:id').get(getUserInfoByID)

export default router

