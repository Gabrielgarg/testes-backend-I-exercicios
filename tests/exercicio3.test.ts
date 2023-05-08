import {User, exercicio3} from "../src/exercicio3"

describe("Testes de exercicio3.ts", ()=>{
    test("Verificar se existe algum certo dado dentro de 1 array de objetos", ()=>{

        const arraydeobjt:User[] = [
            { id: "u001", name: "Gabriel" },
            { id: "u002", name: "Astrodev" }
        ]

        const result = exercicio3(arraydeobjt)

        expect(result).toBe("Astrodev")


    })
})