import {exercicio2} from "../src/exercicio2"

describe("Testes de exercicio2.ts", ()=>{
    test("Transformar data americana em data brasileira", ()=>{
        const result = exercicio2("2022-09-26")


        // expect(result).toBeNull()
        // expect(result).toEqual(true)
        // expect(result).toEqual(Number)
        expect(result).toBe("26/09/2022")
    })
})