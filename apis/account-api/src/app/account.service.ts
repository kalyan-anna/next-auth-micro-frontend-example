import { Injectable } from '@nestjs/common';
import { Property } from './types';

@Injectable()
export class AccountService {
  getPropertiesByUser(): Property[] {
    return [
      {
        propertyName: 'CityCenter Plaza',
        propertyType: 'commercial',
        noOfUnits: 23,
      },
      {
        propertyName: 'Prime Commerce Building',
        propertyType: 'commercial',
        noOfUnits: 7,
      },
      {
        propertyName: 'Sunnyvale Apartments',
        propertyType: 'residential',
        noOfUnits: 17,
      },
      {
        propertyName: 'Parkview Condominiums',
        propertyType: 'residential',
        noOfUnits: 11,
      },
    ];
  }
}
