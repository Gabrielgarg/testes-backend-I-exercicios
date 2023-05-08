export const exercicio1 = (n1: string): number| null => {

    const tranformaemnumero = Number(n1)
    if(typeof tranformaemnumero === "number"){
        return tranformaemnumero
    }
    else{
        return null
    }

}