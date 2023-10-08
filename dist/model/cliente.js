"use strict";
/**
 *
 * SISTEMA RESERVA DE HOTEL

Um hotel deseja registrar os dados de reservas feitas por telefone, então resolveu criar um sistema
para isso;

• Para cada clientes devem ser registrados CPF, nome, telefone e sexo. Deve ser registrado também
a quantidade de pessoas que participaram da reserva.
• É interessante registrar a nacionalidade do Cliente.

• Os clientes podem reservar um tipo de quarto do hotel para uma determinada data e por uma
certa quantidade de dias.

• Os quartos são cadastrados por número, andar e tipo.

• Para a confirmação da reserva é necessário fazer um pagamento de no mínimo 50% do valor,
através de cartão de crédito. Devem ser registrados os dados da operadora com código e nome da
operadora. Do cliente basta o número do cartão de crédito.

• As reservas devem apresentar um status, indicando se a reserva foi confirmada, cancelada ou
utilizada.
 *

    CLIENTE = Do cliente basta o número do cartão de crédito.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// cliente.ts
const pessoa_1 = __importDefault(require("./pessoa"));
class Cliente extends pessoa_1.default {
    constructor(idCliente, cpf, nome, telefone, sexo, nacionalidade, qtdPessoas) {
        super(cpf, nome, telefone);
        this.idCliente = idCliente;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.qtdPessoas = qtdPessoas;
    }
    get getCpf() {
        return this.cpf;
    }
    get getNome() {
        return this.nome;
    }
    get getTelefone() {
        return this.telefone;
    }
    getIdCliente() {
        return this.idCliente;
    }
    getSexo() {
        return this.sexo;
    }
    getNacionalidade() {
        return this.nacionalidade;
    }
    getQtdPessoas() {
        return this.qtdPessoas;
    }
    setIdCliente(idCliente) {
        this.idCliente = idCliente;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    setNacionalidade(nacionalidade) {
        this.nacionalidade = nacionalidade;
    }
    setQtdPessoas(qtdPessoas) {
        this.qtdPessoas = qtdPessoas;
    }
    set setCpf(cpf) {
        this.cpf = cpf;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    set setTelefone(telefone) {
        this.telefone = telefone;
    }
    toString() {
        return super.toString() +
            "\nID Cliente: " + this.idCliente +
            "\nSexo: " + this.sexo +
            "\nNacionalidade: " + this.nacionalidade +
            "\nQuantidade de Pessoas: " + this.qtdPessoas;
    }
}
exports.default = Cliente;
