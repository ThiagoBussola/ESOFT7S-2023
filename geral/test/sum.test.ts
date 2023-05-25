import {describe, expect, test} from '@jest/globals'
import { Matemagica } from '../src/atividades/TDD/Matemagica'
import { ErrorMessages } from '../src/atividades/TDD/errorMessages.enum'

describe('Sum', () => {
    test('Should be sum two numbers', () => {
        const matemagica = new Matemagica()
        matemagica.setA(1)
        matemagica.setB(2)
        
        expect(matemagica.getSomatoria()).toBe(3)
    })

    test('Deve retornar um erro ao tentar realizar uma soma passando uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setA(1)
        // @ts-ignore
        matemagica.setB('oi')
        expect(matemagica.getSomatoria()).toBe(ErrorMessages.SUM_OPERATOR_ERROR)
    })

})
