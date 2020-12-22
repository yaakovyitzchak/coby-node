var coby = require("./COBY.js")
coby.adanServer({
		server(q,r) {
			r.end("ASD")
		},
		port:770,
		adanFunctions:{
			ho(m,cs) {
				
				cs.send({
					"back": {
						m,
						other:3
					}
				})
			},
		},
		onOpen(wss,cs){
			cs.send({
				"opened": {
					"d":123,
					other:3
				}
			})
			console.log("NEW!");
			
		},
		onBinaryMessage(m,cs) {
			console.log("bine",m[0])
		},
		onMessage(m, cs) {
		//	console.log("wel come?!", m, typeof(m), m.constructor)
		}
		
})
