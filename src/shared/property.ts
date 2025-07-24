export type PropertyType = "string" | "number" | "enumerated";

export interface SimpleProperty {
	id: number;
	name: string;
	type: 'string' | 'number';
}

export interface EnumeratedProperty {
	id: number;
	name: string;
	type: 'enumerated';
	values: string[];
}

export type Property = SimpleProperty | EnumeratedProperty;


