import { describe, it, expect, vitest } from 'vitest';

import { products } from './products.ts';

import { OperatorType, Product } from '@/types';
import { mockProducts, mockProperties } from "@/data/mockstore.ts";

describe('getProducts', () => {
	window.datastore.getProducts = vitest.fn().mockReturnValue(mockProducts);
	window.datastore.getProperties = vitest.fn().mockReturnValue(mockProperties);

	it('should return return all products when no property or value are provided', () => {
		const result: Product[] = products(OperatorType.Equals, undefined, undefined);

		expect(result).toBe(mockProducts);
	});

	it.each([
		{
			property: mockProperties[1],
			operator: OperatorType.Equals,
			value: 'metal',
			expected: [mockProducts[2]],
		},
		{
			property: mockProperties[2],
			operator: OperatorType.GreaterThan,
			value: '5',
			expected: [mockProducts[0], mockProducts[1]],
		},
		{
			property: mockProperties[2],
			operator: OperatorType.LessThan,
			value: '10',
			expected: [mockProducts[2]],
		},
		{
			property: mockProperties[0],
			operator: OperatorType.HasAnyValue,
			expected: [mockProducts[0], mockProducts[1], mockProducts[2]],
		},
		{
			property: mockProperties[1],
			operator: OperatorType.HasNoValue,
			expected: [],
		},
		{
			property: mockProperties[0],
			operator: OperatorType.IsAnyOf,
			value: 'Mouse, Bottle',
			expected: [mockProducts[0], mockProducts[2]],
		},
		{ property: mockProperties[0], operator: OperatorType.Contains, value: 'ouse', expected: [mockProducts[0]] },
	])(
		'should return products for: property: $property.name, operator: $operator and value $value',
		({ property, operator, value, expected }) => {
			const result = products(operator, property, value);

			expect(result).toStrictEqual(expected);
		}
	);
});
