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
      data: 'I am alive!',
    }));
  });

cron.schedule("*/1 * * * *", async ()=>{
    // console.log("Hello world")
    try{
      const revive_wa_bot = await axios.get(wa_bot);
      console.log(`wa_bot says ${revive_wa_bot.data}`)

      const revive_the_keeper = await axios.get(the_keeper);
      console.log(`the keeper says ${revive_the_keeper.data}`);
    }catch (error){
      console.error(error)
    }
})

server.listen(4000)