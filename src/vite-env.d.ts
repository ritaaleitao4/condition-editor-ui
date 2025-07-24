import { Operator, Product, Property } from './shared';

declare global {
	interface Window {
		datastore: {
			getOperators: () => Operator[];
			getProducts: () => Product[];
			getProperties: () => Property[];
		};
	}
}
