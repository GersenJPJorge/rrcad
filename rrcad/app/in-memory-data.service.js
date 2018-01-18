"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var clientes = [
            { id: 1, codigo: 10, nome: 'Broker 1', dtinclusao: '01/01/2000', dtalteracao: '01/01/2001' },
            { id: 2, codigo: 20, nome: 'Broker 2', dtinclusao: '01/01/2002', dtalteracao: '01/01/2002' },
            { id: 3, codigo: 30, nome: 'Broker 3', dtinclusao: '01/01/2004', dtalteracao: '01/01/2003' },
            { id: 4, codigo: 40, nome: 'Broker 4', dtinclusao: '01/01/2006', dtalteracao: '01/01/2004' },
            { id: 5, codigo: 50, nome: 'Broker 5', dtinclusao: '01/01/2008', dtalteracao: '01/01/2005' },
        ];
        return { clientes: clientes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map