import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Faculdade', description: 'Faculdade BandTec' },
      { id: 4, name: 'Comida', description: 'Almoço e Janta' },
      { id: 5, name: 'VT', description: 'Vale Transporte' },
      { id: 6, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 7, name: 'Salário', description: 'Recebimento de Salário'},
      { id: 8, name: 'Freelas', description: 'Trabalhos como freelancer'},
      { id: 9, name: 'VA', description: 'Vale Alimentação'},
      { id: 10, name: 'VC', description: 'Vale Combustivel'},
      { id: 11, name: 'Financiamento Veiculo', description: 'Financiamento do carro'},
      { id: 12, name: 'Viagens', description: 'Gastos com viagens e passagens.'}
    ];

    return { categories }
  }
}
