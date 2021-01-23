
const http = require("restana")();
const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiter = new RateLimiterMemory({
	points: 5, // 5 points
	duration: 1 // per second
  });

async function CreateWebServer() {
	rateLimiter.consume(5) // consume 1 point per event
    .then(() => {
		http.post("/growtopia/server_data.php", function(req, res) {
			res.send(`server|13.92.44.140\nport|17091\ntype|1\n#maint|Growtopia\n\nbeta_server|13.92.44.140\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`)
		})
	});


	await http.start(80);
}
CreateWebServer()