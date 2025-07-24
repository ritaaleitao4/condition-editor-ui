import { describe, expect, it, vitest } from 'vitest';

import { getProperties, getProperty } from './properties.ts';

import { mockProperties } from "@/data/mockStore.ts";

describe('getProperties', () => {
	it('returns the list of properties from the datastore', () => {
		window.datastore = {
			getProperties: vitest.fn(() => mockProperties),
			getOperators: vitest.fn(),
			getProducts: vitest.fn(),
		};

		const result = getProperties();

		expect(result).toBe(mockProperties);
	});
});

describe('getProperty', () => {
	it('returns the property that matches the given id', () => {
		window.datastore = {
			getProperties: () => mockProperties,
			getOperators: vitest.fn(),
			getProducts: vitest.fn(),
		};

		expect(getProperty(2)).toEqual(mockProperties[2]);
	});

	it('should return null when no property matches the given id', () => {
		window.datastore = {
			getOperators: () => [],
			getProducts: () => [],
			getProperties: () => mockProperties,
		};

		expect(getProperty(4)).toBeNull();
	});
});