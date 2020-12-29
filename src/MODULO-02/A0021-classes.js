/* eslint-disable */
"use strict";
exports.__esModule = true;
exports.Colaborador = exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    //Inicializando o valor
    function Empresa(nome, cnpj) {
        this.colaboradores = []; // não posso alterar o valor, mas posso enviar valores
        this.nome = nome;
        this.cnpj = cnpj;
    }
    Empresa.prototype.addColaborador = function (colaboradores) {
        var _this = this;
        colaboradores.forEach(function (colaborador) {
            _this.colaboradores.push(colaborador);
        });
    };
    Empresa.prototype.mostrarColaboradores = function () {
        for (var _i = 0, _a = this.colaboradores; _i < _a.length; _i++) {
            var colaborador = _a[_i];
            console.log(colaborador);
        }
    };
    return Empresa;
}());
exports.Empresa = Empresa;
// posso usar classes como tipos
var Colaborador = /** @class */ (function () {
    function Colaborador(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Colaborador;
}());
exports.Colaborador = Colaborador;
var empresa1 = new Empresa('Insomnia Devs', '11.111.111/0001-11');
var colaborador1 = new Colaborador('Júlio', 'Ferreira');
var colaborador2 = new Colaborador('Davi', 'Feitosa');
var colaborador3 = new Colaborador('Fernanda', 'Carvalho');
empresa1.addColaborador([colaborador1, colaborador2, colaborador3]);
empresa1.mostrarColaboradores();
