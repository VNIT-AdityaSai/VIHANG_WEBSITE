import mongoose from "mongoose";
import dotenv from "dotenv";
import { Teams, Events, Points } from "./schemas.js";

const EVENT_LIST = [
    
]

dotenv.config({
    path: '.env.local'
});

async function preloadData() {
    let connection_string = `mongodb+srv://mt23mcs002:`+ process.env.DB_PASSWORD + `@cluster0.r5tkr.mongodb.net/vihang?retryWrites=true&w=majority&appName=Cluster0`
    await mongoose.connect(connection_string);
    console.log('Connected to MongoDB');

    try {
        
        const TerraTitans = new Teams({
            id: 1,
            name: "Terra Titans",
            code: "TT"
        });
        await TerraTitans.save();

        const FieryPhoenix = new Teams({
            id: 2,
            name: "Fiery Phoenix",
            code: "FP"
        });
        await FieryPhoenix.save();

        const VerdantMavericks = new Teams({
            id: 3,
            name: "Verdant Mavericks",
            code: "VM"
        });
        await VerdantMavericks.save();

        const ThunderStrikers = new Teams({
            id: 4,
            name: "Thunder Strikers",  
            code: "TS"
        });
        await ThunderStrikers.save();

        const KineticKairos = new Teams({
            id: 5,
            name: "Kinetic Kairos",
            code: "KK"
        });
        await KineticKairos.save();

        const event1 = new Events({
            id: "1",
            name: "Cricket"
        });
        await event1.save();

        const event2 = new Events({
            id: "2",
            name: "Hockey"
        });
        await event2.save();

        const point1 = new Points({
            id: 1,
            eventId: 1,
            teamId: 1,
            medal: 1,
            points: 10
        });
        await point1.save();

        const point2 = new Points({
            id: 2,
            eventId: 1,
            teamId: 2,
            medal: 2,
            points: 8
        });
        await point2.save();

        const point3 = new Points({
            id: 3,
            eventId: 2,
            teamId: 1,
            medal: 1,
            points: 10
        });
        await point3.save();

        console.log('Data loaded successfully');
    } catch (error) {
        console.log('Data loading failed', error);
    }

}

preloadData()