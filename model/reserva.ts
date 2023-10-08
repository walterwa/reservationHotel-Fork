import Cliente from "./cliente";
import Cartao from "./cartao";

// Classe Reserva
class Reserva {
   private cliente: Cliente; // Associar a reserva a um cliente
   private cartao: Cartao;
   private idReserva: number;
   private statusReserva: string;
   private dataEntrada: string;
   private dataSaida: string;
   private numeroQuarto: number;
   private andarQuarto: number;
   //private tipoQuarto: string;

    constructor(
        cliente: Cliente,
        cartao: Cartao,
        idReserva: number,
        statusReserva: string,
        dataEntrada: string,
        dataSaida: string,
        numeroQuarto: number,
        andarQuarto: number
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

    public getIdReserva(): number {
        return this.idReserva;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

    public getCartao(): Cartao {
        return this.cartao;
    }

    public getStatusReserva(): string {
        return this.statusReserva;
    }

    public getDataEntrada(): string {
        return this.dataEntrada;
    }

    public getDataSaida(): string {
        return this.dataSaida;
    }

    public getNumeroQuarto(): number {
        return this.numeroQuarto;
    }

    public getAndarQuarto(): number {
        return this.andarQuarto;
    }

    set setIdReserva(idReserva: number) {
        this.idReserva = idReserva;
    }

    set setCliente(cliente: Cliente) {
        this.cliente = cliente;
    }

    set setCartao(cartao: Cartao) {
        this.cartao = cartao;
    }

    set setStatusReserva(statusReserva: string) {
        this.statusReserva = statusReserva;
    }

    set setDataEntrada(dataEntrada: string) {
        this.dataEntrada = dataEntrada;
    }

    set setDataSaida(dataSaida: string) {
        this.dataSaida = dataSaida;
    }

    set setNumeroQuarto(numeroQuarto: number) {
        this.numeroQuarto = numeroQuarto;
    }

    set setAndarQuarto(andarQuarto: number) {
        this.andarQuarto = andarQuarto;
    }

    public toString(): string {
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

export default Reserva;
