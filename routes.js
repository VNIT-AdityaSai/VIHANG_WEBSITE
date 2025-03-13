import express from 'express';
import { Points } from './schemas.js';

const pointRouter = express.Router();

// Create a new point entry
pointRouter.post('/points', async (req, res) => {
    try {
        const point = new Points(req.body);
        await point.save();
        res.status(201).send(point);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all points
pointRouter.get('/points', async (req, res) => {
    try {
        const points = await Points.find({});
        res.status(200).send(points);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read a single point entry by ID
pointRouter.get('/points/:id', async (req, res) => {
    try {
        const point = await Points.findById(req.params.id);
        if (!point) {
            return res.status(404).send();
        }
        res.status(200).send(point);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a point entry by ID
pointRouter.patch('/points/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['eventId', 'teamId', 'medal', 'points'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const point = await Points.findById(req.params.id);

        if (!point) {
            return res.status(404).send();
        }

        updates.forEach((update) => point[update] = req.body[update]);
        await point.save();
        res.status(200).send(point);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get medal counts and total points for each team
pointRouter.get('/summary', async (req, res) => {
    try {
        const summary = await Points.aggregate([
            {
            $group: {
                _id: '$teamId',
                gold: { $sum: { $cond: { if: { $eq: ['$medal', 1] }, then: 1, else: 0 } } },
                silver: { $sum: { $cond: { if: { $eq: ['$medal', 2] }, then: 1, else: 0 } } },
                bronze: { $sum: { $cond: { if: { $eq: ['$medal', 3] }, then: 1, else: 0 } } },
                total: { $sum: '$points' }
            }
            },
            {
            $lookup: {
                from: 'teams',
                localField: '_id',
                foreignField: 'id',
                as: 'team'
            }
            },
            {
            $unwind: '$team'
            },
            {
            $project: {
                _id: 0,
                teamId: '$team.id',
                club: '$team.name',
                gold: 1,
                silver: 1,
                bronze: 1,
                total: 1
            }
            },
            {
            $sort: { total: -1 }
            }
        ]);

        summary.forEach((team, index) => {
            team.rank = index + 1;
        });

        res.status(200).send(summary);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

// Delete a point entry by ID
pointRouter.delete('/points/:id', async (req, res) => {
    try {
        const point = await Points.findByIdAndDelete(req.params.id);

        if (!point) {
            return res.status(404).send();
        }

        res.status(200).send(point);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default pointRouter;