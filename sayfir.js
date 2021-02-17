
var Sayfor = new (
function() {
	var zoyss = this;
	var shtareem = {},
		goofeem = {},
		prs = new DOMParser(),
		k, kr, vntz,
		koychoyss = {}
		
		
	
	addEventListener("load", function() {
		var mawf = "shtar@"
		var hoyshh = location.hash
						.indexOf(mawf)
		if(hoyshh > -1) {
			var sb = location
				.hash
				.substring(hoyshh + mawf.length)
			Sayfor.koyray(sb)
		} else {
			Sayfor.koyray("bayiss")
		}
	})	
	Object.defineProperties(this, {
		shtareem: {
			get: function() {
				return shtareem
			}
		},
		koychoyss: {
			get: function() {
				return koychoyss
			}
		},
		yasharKoyach: {
			get: function() {
				return function(k) {
					koychoyss = {
						...koychoyss,
						...k
					}
				}
			}
		},
		hawstayr: {
			set: function(v) {
				(function(g) {
					if(!g) return;
					if(typeof(
						g.hst
					) == "function") 
						g.hst(g)
				
					g
					.style
					.display = "none"
				})(goofeem[v])
			}
		},
		migaleh: {
			set: function(v) {
				zoyss.migawleh = v
			}
		},
		migawleh: {
			set: function(v) {
				(function(g) {
					if(!g) return;
					if(typeof(
						g.gl
					) == "function") 
						g.gl(g)
				
					g
					.style
					.display = ""
				})(goofeem[v])
			}
		},
		meeduh: {
			get: function() {
				return function(
					m,
					v
				) {
					console.log(m,v)
				}
			}
		},
		goofeem: {
			get: function() {
				return goofeem
			}
		},
		goof: {
			get: function() {
				return function(g) {
					return goofeem[g] || {}
				}
			}
		}
		
	})
	this.shtarify = function(s) {
		if(typeof(s) != "object")
			s = {}

		
		for(k in s) {
			shtareem[k] = s[k]
			zoyss.koysayvShtar({
				style: {
					display: "none"
				},
				siyum(el) {
					
					shtareem[k]
					.guf = el
					
					
					shtareem[k]
					.guf
					.koyray = (function(t) {
						if(typeof(t) == "function")
							return t
						return function(){}
					})(
						s[k].koyray ||
						s[k].koyrayd ||
						s[k].alKoyray
					)
				},
				toldos: [
					shtareem[k]
				]
			})
		}
	}
	
	this.koyray = function(str) {
		for(k in shtareem) {
			shtareem[k]
			.guf
			.style
			.display = "none"
		}
		if(shtareem[str]) {
			shtareem[str]
			.guf
			.style
			.display = ""
			
			shtareem[str]
			.guf
			.koyray(
				shtareem[str]
				.guf
			)
			
			location.hash = "shtar@" + str
		}
		return shtareem[str]
	}

	this.koysayvShtar = function (g) {

		if(!g) g = {}
		var t = typeof(g.tag) == "string" 
				? g.tag 
				: "div",
			self = this,
			shm =(function(a) {
				if(
					typeof(a) == "string"
				) return a
			}) (
				g.shaym ||
				g.shem
			),
			p = (function(a) {
				if(
					typeof(a) == "object" &&
					typeof(a.appendChild) == 
					"function"
				) return a
				return (document.body || document.head)
				
			}) (
				g.awv ||
				g.av ||
				g.parent
			),
			ap = g.hoyld || g.hoyseef || true,
			el = document.createElement(t),
			chl = (function(t) {
				if(typeof(t) == "object")
					return Array.apply(0,t);
				return []
			})(
				g.children ||
				g.toldos ||
				g.toyldoyss
			),
			toyld = (function(t) {
				if(typeof(t) == "object") {
					chl = chl.concat(t)
					console.log(chl, t)
					return (chl)
				}
				return []
			})(
				g.toldah ||
				g.toyldah ||
				g.toylda ||
				g.tolda
			),
			thngs = "style dataList".split(" "),
			attrs = (function(t) {
				if(typeof(t) == "object")
					return t
				return null
			})(
				g.meedos ||
				g.meedoys ||
				g.attributes ||
				g.attr || 
				g.attrs
			),
			dn = (function(t) {
				if(typeof(t) == "function")
					return t
				return function(){}
			})(
				g.done ||
				g.finished ||
				g.gimar ||
				g.seeuhm || 
				g.siyum
			),
			hst = (function(t) {
				if(typeof(t) == "function")
					return t
				return function(){}
			})(
				g.alHester ||
				g.hawstayrd ||
				g.hawstayrAwstayr ||
				g.biHester || 
				g.ester ||
				g.laweeluh
			),
			gl = (function(t) {
				if(typeof(t) == "function")
					return t
				return function(){}
			})(
				g.alGiloy ||
				g.alGeeloy ||
				g.alMigawleh ||
				g.alMigaleh ||
				g.migawlehd ||
				g.migawleh || 
				g.geelooyHawatzmoos ||
				g.geelooy ||
				g.yoym
			)
			
		for(var k in g) {
			el[k] = g[k]
			if(
				thngs.includes(k) &&
				typeof(g[k]) == "object"
			) {
				for(var kk in g[k]) {
					el[k][kk] = g[k][kk]
				}
			}
		}
		
		if(attrs) {
			var k;
			for(k in attrs) {
				el.setAttribute(
					k,
					attrs[k]
				)
			}
		}
		
		if(
			g.hester
		) {
			el.style.display = "none"
		}
		
		if(typeof(
			hst
		) == "function") {
			el.hst = hst
		}
		
		if(typeof(
			gl
		) == "function") {
			el.gl = gl
		}
		
		if(ap)
			p.appendChild(el)
		
		if(shm) {
			goofeem[shm] = el
		}
		chl.forEach(function(c) {
			var obj = c
			
			if(typeof(obj) != "object")
				obj = {}
				
			if(
				typeof(c) == "string"
			) {
				var dc = prs.parseFromString(
					c,
					"text/html"
				),
					tg = dc
					.body
					.children[0]
				
				if(tg) obj.tag = tg.tagName
				
				else obj.innerHTML = c
			}
			
		
			obj["av"] = el

			zoyss.koysayvShtar(obj)
		})
		
			
		dn(el)
	}
})

WebSocket.prototype.shoymayuh = function(ob,fn) {
	this.addEventListener("message", function(e) {
		try {
			var p = JSON.parse(e.data)
			for(var k in p) {
				if(ob[k]) {
					ob[k](p[k])
				}
			}
		} catch(e) {
			if(typeof(fn) == "function") {
				fn(e)
			}
		}
	})
}

WebSocket.prototype.shawlawch = function(js,bk) {
	var sl = this
	var fnc = function() {
		
		try {
			sl.send(JSON.stringify(js))
			if(typeof(bk)  == "function") {
				for(var k in js) {
					var ob = {}
					ob[k] = bk
					this.shoymayuh(ob)
				}
			}
		} catch(e) {
			console.log(e)
		}
	}
	
	if(this.readyState == 1) {
		fnc()
	} else {
		if(!this.vnts) {
			this.vnts = []
		}
		this.vnts.push(function() {
			fnc()
		})
		
		
		
		this.addEventListener("open", function(e) {
			sl.vnts.forEach(function(a) {
				a()
			})
		})
	}
}
