const axios = require('axios')
let urlFormated = ''
let ppassword = ''
class main {
	constructor(ip, port, password) {
		this.ip = ip
		this.port = port
		ppassword = password
	}
	get(property) {
		urlFormated = this.ip + ':' + this.port + '?get=' + property
		return returnObject()
	}
	set(property, value) {
		return new Promise((resolve) => {
					axios({
						url: this.ip + ':' + this.port,
						headers: {
							Authorization: ppassword
						},
						method: 'POST',
						data: [property, value]
						}).then(response => {
							resolve(response.data)
						})
		})
	}
	remove(property) {
		return new Promise(resolve => {
		axios({
			url: this.ip + ':' + this.port + '?delete=' + property,
			headers: {
				Authorization: ppassword
			},
			method: 'DELETE'
		}).then(response => {
			resolve(response.data)
		})
	})
	}
	all() {
		return new Promise(resolve => {
		axios({
			url: this.ip + ':' + this.port,
			headers: {
				Authorization: ppassword
			},
			method: 'GET'
		}).then(response =>{
			resolve( response.data)
		})
	})
	}
}

function returnObject() {
	return {
		this: () => {
			return new Promise(resolve => {
			axios({
				url: urlFormated,
				headers: {
					Authorization: ppassword
				},
				method: 'GET'
			}).then(response => {
				resolve( response.data)
			})
		})
		},
		get(property) {
			urlFormated = urlFormated + '&get=' + property
			return returnObject()
		},
		set(property, value) {
			return new Promsie(resolve => {
			axios({
				url: urlFormated,
				headers: {
					Authorization: ppassword
				},
				method: 'POST',
				data: [property, value]
			}).then(response => {
				resolve(response.data)
			})
		})
		},
		delete(property){
			return new Promise(resolve => {
			axios({
				url: urlFormated + '&delete=' + property,
				headers: {
					Authorization: ppassword
				},
				method: 'DELETE'
			}).then(response => {
				resolve( response.data)
			})
		})
		}
	}
}

module.exports = main