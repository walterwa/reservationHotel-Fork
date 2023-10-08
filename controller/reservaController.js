"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reserva_1 = require("../model/reserva");
var cliente_1 = require("../model/cliente");
var cartao_1 = require("../model/cartao");
var router = express_1.default.Router();
// ==========> CRIANDO Reserva <=============
/**
 * {
    "cliente": {
        "cpf": "11122334455",
        "nome": "Pedro",
        "telefone": "777777777",
        "idCliente": 3,
        "sexo": "Masculino",
        "nacionalidade": "Brasileiro",
        "qtdPessoas": 3
    },
    "cartao": {
        "cpf": "11122334455",
        "nome": "Pedro",
        "telefone": "777777777",
        "idCartao": 3,
        "numero": 111223344,
        "codigo": 123,
        "operadora": "Mastercard"
    },
    "idReserva": 3,
    "statusReserva": "Ativa",
    "dataEntrada": "10/10/2021",
    "dataSaida": "12/10/2021",
    "numeroQuarto": 3,
    "andarQuarto": 3
}
 */
var reservas = [
    new reserva_1.default(new cliente_1.default(1, "12345678910", "João", "999999999", "Masculino", "Brasileiro", 1), new cartao_1.default(1, "12345678910", "João", "999999999", 123456789, 123, "Mastercard"), 1, "Ativa", "10/10/2021", "12/10/2021", 1, 1),
    new reserva_1.default(new cliente_1.default(2, "98765432100", "Maria", "888888888", "Feminino", "Brasileira", 2), new cartao_1.default(2, "98765432100", "Maria", "888888888", 987654321, 321, "Visa"), 2, "Ativa", "10/10/2021", "12/10/2021", 2, 2),
    new reserva_1.default(new cliente_1.default(3, "11122334455", "Pedro", "777777777", "Masculino", "Brasileiro", 3), new cartao_1.default(3, "11122334455", "Pedro", "777777777", 111223344, 123, "Mastercard"), 3, "Ativa", "10/10/2021", "12/10/2021", 3, 3),
];
// Rota para criar uma nova reserva
router.post("/reserva/new", function (req, res) {
    try {
        var novaReserva = new reserva_1.default(req.body.cliente, req.body.cartao, req.body.idReserva, req.body.statusReserva, req.body.dataEntrada, req.body.dataSaida, req.body.numeroQuarto, req.body.andarQuarto);
        reservas.push(novaReserva);
        res.status(201).json({ mensagem: "Reserva criado com sucesso!", reservas: reservas });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Erro ao cadastrar reserva");
    }
});
// Rota para buscar todas as reservas
router.get('/reserva', function (req, res) {
    var reservass = reservas.map(function (reserva) {
        return {
            reserva: reserva,
            l: '==========================================',
        };
    });
    res.json(reservass);
});
// Rota para buscar uma reserva por ID
router.get('/reserva/:id', function (req, res) {
    var id = parseInt(req.params.id);
    var reserva = reservas.find(function (reserva) { return reserva.getIdReserva() === id; });
    if (reserva) {
        res.send(reserva);
    }
    else {
        res.status(404).send('Reserva não encontrada!');
    }
});
// Rota para atualizar uma reserva por ID
router.put('/reserva/:id', function (req, res) {
    try {
        var id_1 = parseInt(req.params.id);
        var index = reservas.findIndex(function (reserva) { return reserva.getIdReserva() === id_1; });
        if (index === -1) {
            res.status(404).send('Reserva não encontrada!');
        }
        else {
            var cliente = new cliente_1.default(1, "Exemplo", "Cliente", "123456789", "Masculino", "Brasileiro", 1); // Substitua pelos dados corretos do cliente
            var reserva = new reserva_1.default(cliente, // Aqui passamos a instância de Cliente
            req.body.cartao, id_1, req.body.statusReserva, req.body.dataEntrada, req.body.dataSaida, req.body.numeroQuarto, req.body.andarQuarto);
            reservas[index] = reserva;
            res.status(201).json({ mensagem: "Reserva atualizada com sucesso!", reservas: reservas });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar reserva");
    }
});
// Rota para deletar uma reserva por ID
router.delete('/reserva/:id', function (req, res) {
    try {
        var id_2 = parseInt(req.params.id);
        var index = reservas.findIndex(function (reserva) { return reserva.getIdReserva() === id_2; });
        if (index === -1) {
            res.status(404).send('Reserva não encontrada!');
        }
        else {
            reservas.splice(index, 1);
            res.status(201).json({ mensagem: "Reserva deletada com sucesso!", reservas: reservas });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Erro ao deletar reserva");
    }
});
exports.default = router;
