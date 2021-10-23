/*
 			SDBJ-Server Igniter
 	Criado por Gulherme Renato - Renatin
 Favor não repostar o mesmo repositório no github, npm ou yarn
 	Uso livre para melhorias e uso comum
 Para aqueles que gostam de um banco de dados em nuvem usado como JSON, aqui está a sua biblioteca!
Lembrando que precisa de uma "vps" para rodar o banco.
*/

//Express necessário pra fazer a comunicação
const express = require('express')
const app = express()
const SDBJ = require('simple-db-json')
const Default = require('sdbj-default')

app.use(express.json())

const db = new SDBJ('sdbj', '\t')
function openToWorld(port, password) {
app.listen(port, () => {
	console.log('[SDBJ-Server Igniter] Rodando!')
})
app.get('/', (req, res) => {
	if (req.headers.authorization !== password) return res.status(401).send({status: 401, error: 'Password Incorrect'})
	console.log(req.query.get)
	if (require('isarray')(req.query.get)) {
		let returned = db
		for (const i in req.query.get) {
			console.log(req.query.get[i])
			returned = returned.get(req.query.get[i])
		}
		console.log(returned.this)
		res.status(200).send(returned.this)
	} else if (req.query.get) {
		res.status(200).send(db.get(req.query.get).this)
	} else {
		res.status(200).send(db.all().this)
	}
})
app.post('/', (req, res) => {
	if (req.headers.authorization !== password) return res.status(401).send({status: 401, error: 'Password Incorrent'})
	console.log(req)
	if (require('isarray')(req.query.get)) {
		let returned = db
		for (const i in req.query.get) {
			returned = returned.get(req.query.get[i])
		}
		returned.set(req.body[0], req.body[1])
		res.status(200).send({status: 200, message: 'saved.'})
	} else if (req.query.get) {
		db.get(req.query.get).set(req.body[0], req.body[1])
		res.status(200).send({status: 200, message: 'saved.'})
	} else {
		db.set(req.body[0], req.body[1])
		res.status(200).send({status: 200, message: 'saved.'})
	}
})
app.delete('/', (req, res) => {
	if (req.headers.authorization !== password) return res.status(401).send({status: 401, error: 'Password Incorrent'})
	if (require('isarray')(req.query.get)) {
		let returned = db
		for (const i in req.query.get) {
			returned = returned.get(req.query.get[i])
		}
		returned.remove(req.query.delete)
		res.status(200).send({status: 200, message: 'saved.'})
	} else if (req.query.get) {
		db.get(req.query.get).remove(req.query.delete)
		res.status(200).send({status: 200, message: 'saved.'})
	} else {
		db.remove(req.query.delete)
		res.status(200).send({status: 200, message: 'saved.'})
	}
})
}

module.exports.openToWorld = openToWorld