"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcedimentoController = void 0;
const common_1 = require("@nestjs/common");
const procedimento_service_1 = require("./procedimento.service");
const create_procedimento_dto_1 = require("./dto/create-procedimento.dto");
const update_procedimento_dto_1 = require("./dto/update-procedimento.dto");
let ProcedimentoController = class ProcedimentoController {
    constructor(procedimentoService) {
        this.procedimentoService = procedimentoService;
    }
    create(createProcedimentoDto) {
        return this.procedimentoService.create(createProcedimentoDto);
    }
    findAll() {
        return this.procedimentoService.findAll();
    }
    findOne(id) {
        return this.procedimentoService.findOne(id);
    }
    update(id, updateProcedimentoDto) {
        return this.procedimentoService.update(id, updateProcedimentoDto);
    }
    remove(id) {
        return this.procedimentoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_procedimento_dto_1.CreateProcedimentoDto]),
    __metadata("design:returntype", void 0)
], ProcedimentoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProcedimentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProcedimentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_procedimento_dto_1.UpdateProcedimentoDto]),
    __metadata("design:returntype", void 0)
], ProcedimentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProcedimentoController.prototype, "remove", null);
ProcedimentoController = __decorate([
    (0, common_1.Controller)('procedimento'),
    __metadata("design:paramtypes", [procedimento_service_1.ProcedimentoService])
], ProcedimentoController);
exports.ProcedimentoController = ProcedimentoController;
//# sourceMappingURL=procedimento.controller.js.map