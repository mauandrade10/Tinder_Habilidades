import app from './app.js';
import 'dotenv/config'

app.listen(process.env.PORT, ()=>{
    console.log(`port ${process.env.PORT}`);
})



