import { writeFile, readFile } from 'fs/promises'

type produto = {
    nome: string
    qtde: number
    preco: number
    data_compra?: Date
    data_entrega?: Date
}

class ProductService{

    async createProductList(data: string){
        try{
            console.log('Criando lista de produtos')
            await writeFile('products.json', JSON.stringify(data, null, 2))

        }catch(err){
            throw new Error('Falha ao salvar a lista de produtos')
        }
    }

    async lendoArquivo () {
        try{
            console.log('Lendo o arquivo')
            return  JSON.parse(await readFile('products.json', 'utf-8'))
        }catch (err) {
            throw new Error('Falha ao ler o arquivo');
        }
    }

    async fazendoMap(){
        try {
            const file = await this.lendoArquivo()
            const a = file.map((item: { nome: any; qtde: number; preco: number }) => {
                const obj = {
                    nome: item.nome,
                    qtde: item.qtde,
                    preco: item.preco, 
                    _valorestoque: item.qtde * item.preco
                }
                return obj
            })
            console.log(a)
            return a
        } catch (error) {
            throw new Error('Falha ao fazer o map');
        }
    }
}

export default new ProductService()     