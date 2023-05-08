export const exercicio2 = (data: string): string| null => {

    let data_brasileira = data.split('-').reverse().join('/')
    return data_brasileira

}