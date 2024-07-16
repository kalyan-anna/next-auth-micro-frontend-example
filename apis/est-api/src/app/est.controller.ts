import { Controller, Get, Param } from '@nestjs/common';

import { EstablishmentService } from './est.service';

@Controller('properties')
export class EstablishmentController {
  constructor(private readonly appService: EstablishmentService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.getPropertyById(id);
  }
}
