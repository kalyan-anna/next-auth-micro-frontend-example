export type Property = {
  id: string;
  propertyName: string;
  propertyType: 'residential' | 'commercial';
  noOfUnits: number;
};

export type PropertyWithUsers = Property & {
  userEmails?: string[];
};
