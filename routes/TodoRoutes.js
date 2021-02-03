import { compare } from 'bcrypt';
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Todo from '../Models/ToDo.js';
import { isAuth } from '../utils.js'
const TodoRouter = express.Router();

TodoRouter.post(
    '/create',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const td = new Todo({
            content: req.body.content,
            user: req.body.user,

        });
        const newtd = await td.save();
        return res.status(200).send({ message: ' content created successfully' });
    })
);

TodoRouter.post(
    '/update',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        Todo.findByIdAndUpdate({_id: req.body.contentId}, { "content": req.body.content }, function (err, result) {
            if (err) {
                res.send(err)
            }
            else {
                //return res.status(200).json(body);
                return res.status(200).send({ message: ' content updated successfully' });
            }
        })


    })
);

TodoRouter.post(
    '/delete',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        Todo.findByIdAndDelete({_id: req.body.contentId}, function (err, result) {
            if (err) {
                res.send(err)
            }
            else {
                
                return res.status(200).send({ message: ' content deleted successfully' });
            }
        })


    })
);

TodoRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const findCondtion  = {
            user: req.body.user,
            CompletedFlag: 0
        }
        Todo.find(findCondtion, function (err, result) {
            if (err) {
                res.send(err)
            }
            else {
                return res.status(200).send({ result });
            }
        })
    })
);


export default TodoRouter;