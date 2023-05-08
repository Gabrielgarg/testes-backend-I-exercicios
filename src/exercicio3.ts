export type User ={
    id: string,
    name:string
}

export const exercicio3 = (vetor:User[]): boolean| string => {

    for(let x = 0; x<vetor.length; x++){
        if(vetor[x].name === "Astrodev"){
            const name = vetor[x].name
            return name
        }
    }

    return false

}