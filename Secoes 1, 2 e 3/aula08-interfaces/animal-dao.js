"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./../aula07-classes/animal");
var AnimalDao = (function () {
    function AnimalDao() {
        this.tableName = '';
    }
    AnimalDao.prototype.insert = function (Object) {
        console.log('Inserindo...');
        Object.mover(50);
        return true;
    };
    AnimalDao.prototype.update = function (Object) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new animal_1.Animal('Rex')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal-dao.js.map