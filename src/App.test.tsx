import {describe, it, expect, vitest, beforeEach} from 'vitest';
import { render, screen } from '@testing-library/react';
import { mockProducts } from "@/data/mockStore.ts";
import { Property, PropertyType } from '@/shared';
import App from './App';

describe('App', () => {
	const properties: Property[] = [
		{
			id: 0,
			name: 'Product Name',
			type: PropertyType.String,
		},
		{
			id: 1,
			name: 'material',
			type: PropertyType.Enumerated,
			values: ['plastic', 'metal'],
		},
		{
			id: 2,
			name: 'price',
			type: PropertyType.Number,
		},
	];

	window.datastore.getProducts = vitest.fn().mockReturnValue(mockProducts);
	window.datastore.getProperties = vitest.fn().mockReturnValue(properties);

	beforeEach(() => {
		render(<App />);
	});

	it('renders the title', () => {
		const titleElement = screen.getByText('Condition Editor UI');
		expect(titleElement).toBeInTheDocument();
	});

	it('renders the subtitle', () => {
		const titleElement = screen.getByText('A Coding Exercise for UI Developers');
		expect(titleElement).toBeInTheDocument();
	});

	it('renders the filters for product table', () => {
		const propertySelect = screen.getByTestId('product-table-filters');
		expect(propertySelect).toBeInTheDocument();
	});


	it('renders the product table', () => {
		const productTable = screen.getByTestId('product-table');
		expect(productTable).toBeInTheDocument();
	});
});
