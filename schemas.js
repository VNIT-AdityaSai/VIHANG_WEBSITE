import mongoose, { Schema } from 'mongoose';

const teamSchema = new Schema({
    id: {type: String, required: true, unique: true},
    name: { type: String, required: true },
    code: { type: String, required: true }
});

const eventSchema = new Schema({
    id: {type: String, required: true, unique: true},
    name: { type: String, required: true },
})

const pointsSchema = new Schema({
    eventId: { type: String, required: true },
    teamId: { type: String, required: true },
    medal: { type: Number, required: true },
    points: { type: Number, required: true }
})

const Teams = mongoose.model('Teams', teamSchema);
const Events = mongoose.model('Events', eventSchema);   
const Points = mongoose.model('Points', pointsSchema);

export { Teams, Events, Points }