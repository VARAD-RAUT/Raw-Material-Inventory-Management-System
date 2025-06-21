import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());   // convert any data recieved to JSON

app.listen(process.env.PORT, () => {
    console.log(`Server is running on  http://localhost:3000`);
})

// Database 
