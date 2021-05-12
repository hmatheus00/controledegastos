export type Compra = {
    id: number;
    comprador: string;
    vendedor: string;
    produto: string;
    data: Date;
    isParcelado: boolean;
    parcelasPagas: number;
    totalParcelas: number;
    valor: number;

}