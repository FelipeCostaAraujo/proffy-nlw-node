import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'NLW proffy',
        description:'nodejs com typescript',
        version: '1.0.0'
    })
});

export default indexRouter;