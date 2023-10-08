"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe Reserva
class Reserva {
    //private tipoQuarto: string;
    constructor(cliente, cartao, idReserva, statusReserva, dataEntrada, dataSaida, numeroQuarto, andarQuarto
    //tipoQuarto: string
    ) {
        this.cliente = cliente;
        this.cartao = cartao;
        this.idReserva = idReserva;
        this.statusReserva = statusReserva;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
        this.numeroQuarto = numeroQuarto;
        this.andarQuarto = andarQuarto;
        //this.tipoQuarto = tipoQuarto;
    }
    getIdReserva() {
        return this.idReserva;
    }
    getCliente() {
        return this.cliente;
    }
    getCartao() {
        return this.cartao;
    }
    getStatusReserva() {
        return this.statusReserva;
    }
    getDataEntrada() {
        return this.dataEntrada;
    }
    getDataSaida() {
        return this.dataSaida;
    }
    getNumeroQuarto() {
        return this.numeroQuarto;
    }
    getAndarQuarto() {
        return this.andarQuarto;
    }
    set setIdReserva(idReserva) {
        this.idReserva = idReserva;
    }
    set setCliente(cliente) {
        this.cliente = cliente;
    }
    set setCartao(cartao) {
        this.cartao = cartao;
    }
    set setStatusReserva(statusReserva) {
        this.statusReserva = statusReserva;
    }
    set setDataEntrada(dataEntrada) {
        this.dataEntrada = dataEntrada;
    }
    set setDataSaida(dataSaida) {
        this.dataSaida = dataSaida;
    }
    set setNumeroQuarto(numeroQuarto) {
        this.numeroQuarto = numeroQuarto;
    }
    set setAndarQuarto(andarQuarto) {
        this.andarQuarto = andarQuarto;
    }
    toString() {
        return "\nCliente: " + this.cliente.toString() +
            "\nCartão: " + this.cartao.toString() +
            "\nStatus da Reserva: " + this.statusReserva +
            "\nData de Entrada: " + this.dataEntrada +
            "\nData de Saída: " + this.dataSaida +
            "\nNúmero do Quarto: " + this.numeroQuarto +
            "\nAndar do Quarto: " + this.andarQuarto;
        //"\nTipo do Quarto: " + this.tipoQuarto;
    }
}
exports.default = Reserva;
