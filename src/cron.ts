import * as  cron from "node-cron"
import axios from "axios"
import * as http from "http"


const server = http.createServer()
const wa_bot = process.env.WA_BOT as string;
const the_keeper = process.env.THE_KEEPER as string;

// Listen to the request event
server.on('request', (request, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
  });

cron.schedule("*/1 * * * *", async ()=>{
    console.log("Hello world")
    try{
      const revive_wa_bot = await axios.get(wa_bot);
      const revive_the_keeper = await axios.get(the_keeper)
    }catch (error){
      console.error(error)
    }
})

server.listen(4000)