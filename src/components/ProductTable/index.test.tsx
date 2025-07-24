import {describe, it, expect, beforeEach} from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductTable } from './index';
import { mockProducts, mockProperties } from "@/data/mockStore.ts";

describe('ProductTable', () => {
	beforeEach(() => {
		render(<ProductTable products={mockProducts} properties={mockProperties} />);
	});

	it('should render table headers correctly', () => {
		const tableHeaders = screen.getAllByRole('columnheader');
		expect(tableHeaders).toHaveLength(mockProperties.length);
		expect(tableHeaders[0]).toHaveTextContent('Product Name');
		expect(tableHeaders[1]).toHaveTextContent('material');
	});

	it('should render table headers correctly', () => {
		const tableRows = screen.getAllByRole('row');
		expect(tableRows).toHaveLength(mockProducts.length + 1);
		expect(tableRows[1].querySelectorAll('td')[0]).toHaveTextContent('Mouse');
		expect(tableRows[1].querySelectorAll('td')[1]).toHaveTextContent('plastic');
		expect(tableRows[2].querySelectorAll('td')[0]).toHaveTextContent('Webcam');
		expect(tableRows[2].querySelectorAll('td')[1]).toHaveTextContent('plastic');
	});
});
