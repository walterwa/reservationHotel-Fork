"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe Reserva
class Reserva {
    //private tipoQuarto: string;
    //add tipoQuarto no constructor
    constructor(cliente, cartao, idReserva, statusReserva, dataEntrada, dataSaida, numeroQuarto, andarQuarto, tipoQuarto
    ) {
        this.cliente = cliente;
        this.cartao = cartao;
        this.idReserva = idReserva;
        this.statusReserva = statusReserva;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
        this.numeroQuarto = numeroQuarto;
        this.andarQuarto = andarQuarto;
        this.tipoQuarto = tipoQuarto; //add this.tipoQuarto
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
    //add get getDataEntrada
    getDataEntrada() {
        return this.dataEntrada;
    }
    //add get getDataSaida
    getDataSaida() {
        return this.dataSaida;
    }
    getNumeroQuarto() {
        return this.numeroQuarto;
    }
    getAndarQuarto() {
        return this.andarQuarto;
    }
    //add get getTipoQuarto
    getTipoQuarto() {
        return this.tipoQuarto;
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
    //add set setDataEntrada
    set setDataEntrada(dataEntrada) {
        this.dataEntrada = dataEntrada;
    }
    //add set setDataEntrada
    set setDataSaida(dataSaida) {
        this.dataSaida = dataSaida;
    }
    set setNumeroQuarto(numeroQuarto) {
        this.numeroQuarto = numeroQuarto;
    }
    set setAndarQuarto(andarQuarto) {
        this.andarQuarto = andarQuarto;
    }
    //add set setTipoQuarto
    set setTipoQuarto(tipoQuarto) {
        this.tipoQuarto = tipoQuarto;
    }
    //add totalDias
    totalDias(){
        const tempoMilisegundos = this.dataSaida.getTime() - this.dataEntrada.getTime();    
        const totalDias = Math.ceil(tempoMilisegundos / (1000 * 3600 * 24));
        return totalDias;
    }
    //add CalcularValorTotalReserva
    calcularValorTotalReserva() {
        let taxa;

        switch(this.tipoQuarto) {
            case "luxo":
                taxa = 150;
                break;
            case "padrão":
                taxa = 100;
                break;
            case "econômico":
                taxa = 80;
                break;
            default:
                throw new Error("Tipo de quarto desconhecido!")
        }

        const totalDias = this.totalDias();
        const valorTotalReserva = totalDias * taxa;
        return valorTotalReserva
    }
    toString() {
        return "\nCliente: " + this.cliente.toString() +
            "\nCartão: " + this.cartao.toString() +
            "\nStatus da Reserva: " + this.statusReserva +
            "\nData de Entrada: " + this.dataEntrada +
            "\nData de Saída: " + this.dataSaida +
            "\nNúmero do Quarto: " + this.numeroQuarto +
            "\nAndar do Quarto: " + this.andarQuarto +
            "\nTipo do Quarto: " + this.tipoQuarto +
            `\nValor da reserva: R$${this.calcularValorTotalReserva()}`;
    }
}
exports.default = Reserva;
