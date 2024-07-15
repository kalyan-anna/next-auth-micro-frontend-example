import { Injectable } from '@nestjs/common';
import { Property } from './types';

@Injectable()
export class AccountService {
  getPropertiesByUser(): Property[] {
    return [
      {
        id: '1',
        propertyName: 'CityCenter Plaza',
        propertyType: 'commercial',
        noOfUnits: 23,
      },
      {
        id: '2',
        propertyName: 'Prime Commerce Building',
        propertyType: 'commercial',
        noOfUnits: 7,
      },
      {
        id: '3',
        propertyName: 'Sunnyvale Apartments',
        propertyType: 'residential',
        noOfUnits: 17,
      },
      {
        id: '4',
        propertyName: 'Parkview Condominiums',
        propertyType: 'residential',
        noOfUnits: 11,
      },
    ];
  }
}
