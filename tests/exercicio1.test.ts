import {exercicio1} from "../src/exercicio1"

describe("Testes de exercicio1.ts", ()=>{
    test("Transformar string em numero", ()=>{
        const result = exercicio1("10")


        // expect(result).toBeNull()
        // expect(result).toEqual(true)
        // expect(result).toEqual(Number)
        expect(result).toBe(Number(result))
    })
})