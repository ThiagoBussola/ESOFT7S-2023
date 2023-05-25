import { ProductType } from "./Types/productType.type"

export class ArrayRandomValue {

    private produtos: Array<ProductType>
    private numberOfRandomValues: Number

    private getRandomObjects(array, numberOfRandomValues) {
        let result: any = []
        while (result.length < numberOfRandomValues) {
            let randomIndex = Math.floor(Math.random() * array.length)
            let randomObject: any = array[randomIndex]
            if (!result.includes(randomObject)) {
                result.push(randomObject)
            }
        }
        return result
    }

    public setProdutos(produtos: Array<ProductType>): void {
        this.produtos = produtos
    }

    public setNumberOfRandomValues(num: Number): void {
        this.numberOfRandomValues = num
    }

    public getProdutos(): Array<ProductType> {
       return this.produtos
    }

    public getNumberOfRandomValues(): Number {
        return this.numberOfRandomValues
    }
}