import express from 'express';
import Reserva from '../model/reserva';
import Cliente from '../model/cliente';
import Cartao from '../model/cartao';

const router = express.Router();

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

        const reservas: Reserva[] = [
            new Reserva(new Cliente(1, "12345678910", "João", "999999999", "Masculino", "Brasileiro", 1), 
                        new Cartao(1, "12345678910", "João", "999999999", 123456789, 123, "Mastercard"), 
                                    1 , "Ativa", "10/10/2021", "12/10/2021", 1, 1),
            new Reserva(new Cliente(2, "98765432100", "Maria", "888888888", "Feminino", "Brasileira", 2),
                        new Cartao(2, "98765432100", "Maria", "888888888", 987654321, 321, "Visa"),
                                    2 , "Ativa", "10/10/2021", "12/10/2021", 2, 2),
            new Reserva(new Cliente(3, "11122334455", "Pedro", "777777777", "Masculino", "Brasileiro", 3),
                        new Cartao(3, "11122334455", "Pedro", "777777777", 111223344, 123, "Mastercard"),
                                    3 , "Ativa", "10/10/2021", "12/10/2021", 3, 3),
        ];

// Rota para criar uma nova reserva
router.post("/reserva/new", (req, res) => {
    try {
        const novaReserva = new Reserva(
            req.body.cliente,
            req.body.cartao,
            req.body.idReserva,
            req.body.statusReserva,
            req.body.dataEntrada,
            req.body.dataSaida,
            req.body.numeroQuarto,
            req.body.andarQuarto
        );
        reservas.push(novaReserva);
        res.status(201).json({ mensagem: "Reserva criado com sucesso!", reservas });
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao cadastrar reserva");
    }
});

// Rota para buscar todas as reservas
router.get('/reserva', (req, res) => {
    const reservass = reservas.map((reserva) => {
        return {
            reserva,
            l: '==========================================',
        };
    });
    res.json(reservass);
});



// Rota para buscar uma reserva por ID
router.get('/reserva/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const reserva = reservas.find((reserva) => reserva.getIdReserva() === id);
    if (reserva) {
        res.send(reserva);
    } else {
        res.status(404).send('Reserva não encontrada!');
    }
});

// Rota para atualizar uma reserva por ID
router.put('/reserva/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = reservas.findIndex((reserva) => reserva.getIdReserva() === id);
        if (index === -1) {
            res.status(404).send('Reserva não encontrada!');
        } else {
            const cliente = new Cliente(1, "Exemplo", "Cliente", "123456789", "Masculino", "Brasileiro", 1); // Substitua pelos dados corretos do cliente
            const reserva = new Reserva(
                cliente, // Aqui passamos a instância de Cliente
                req.body.cartao,
                id,
                req.body.statusReserva,
                req.body.dataEntrada,
                req.body.dataSaida,
                req.body.numeroQuarto,
                req.body.andarQuarto
            );
            reservas[index] = reserva;
            res.status(201).json({ mensagem: "Reserva atualizada com sucesso!", reservas });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar reserva");
    }
});


// Rota para deletar uma reserva por ID
router.delete('/reserva/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = reservas.findIndex((reserva) => reserva.getIdReserva() === id);
        if (index === -1) {
            res.status(404).send('Reserva não encontrada!');
        } else {
            reservas.splice(index, 1);
            res.status(201).json({ mensagem: "Reserva deletada com sucesso!", reservas });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao deletar reserva");
    }
});

export default router;
             