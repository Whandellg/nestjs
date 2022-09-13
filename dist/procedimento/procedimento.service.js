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
exports.ProcedimentoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const procedimento_entity_1 = require("./entities/procedimento.entity");
let ProcedimentoService = class ProcedimentoService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createProcedimentoDto) {
        const procedimento = this.repository.create(createProcedimentoDto);
        return this.repository.save(procedimento);
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOne(id);
    }
    async update(id, updateProcedimentoDto) {
        const procedimento = await this.repository.preload(Object.assign({ id: id }, updateProcedimentoDto));
        if (!procedimento) {
            throw new common_1.NotFoundException(`Procedimento ${id} not found`);
        }
        return this.repository.save(procedimento);
    }
    async remove(id) {
        const procedimento = await this.findOne(id);
        return this.repository.remove(procedimento);
    }
};
ProcedimentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(procedimento_entity_1.Procedimento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProcedimentoService);
exports.ProcedimentoService = ProcedimentoService;
//# sourceMappingURL=procedimento.service.js.map