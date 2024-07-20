import { Controller, Get, Param } from '@nestjs/common';

import { PropertyService } from '@stratapro/properties-prisma-client';

@Controller('properties')
export class EstablishmentController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.getPropertyDetails(Number(id));
  }
}
