import { OperatorType } from './operatorType.enum.ts';

export type OperatorId =
	| "equals"
	| "greater_than"
	| "less_than"
	| "any"
	| "none"
	| "in"
	| "contains";

export type Operator = {
	id: OperatorType;
	text: string;
};
