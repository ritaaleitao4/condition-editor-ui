import { describe, it, expect, vitest } from 'vitest';

import { getOperators } from './operators.ts';

import { OperatorType, PropertyType } from '@/types';
import { mockOperators } from "@/data/mockstore.ts";

describe('getOperators', () => {
	window.datastore.getOperators = vitest.fn(() => mockOperators);
	window.datastore.getProducts = vitest.fn();
	window.datastore.getProperties = vitest.fn();

	it('should return an array of operators for the given property type', () => {
		const result = getOperators(PropertyType.String);

		expect(result).toEqual([
			{ id: OperatorType.Equals, text: 'Equals' },
			{ id: OperatorType.IsAnyOf, text: 'Is any of' },
			{ id: OperatorType.Contains, text: 'Contains' },
		]);
	});
});
