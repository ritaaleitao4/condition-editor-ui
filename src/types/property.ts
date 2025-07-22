import { PropertyType } from './propertyType.enum.ts';

export interface SimpleProperty {
	id: number;
	name: string;
	type: PropertyType.String | PropertyType.Number;
}

export interface EnumeratedProperty {
	id: number;
	name: string;
	type: PropertyType.Enumerated;
	values: string[];
}

export type Property = SimpleProperty | EnumeratedProperty;

