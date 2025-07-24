import { render, screen } from '@testing-library/react';
import { describe, it, expect, vitest, vi } from 'vitest';
import { ValueFilterControl } from './index';
import { OperatorType, PropertyType } from '@/types';
import { useFilterStore } from "@/data/filterStore.ts";
import { getProperty } from "@/api";

vi.mock('@/data/filterStore.ts', () => ({
	useFilterStore: vi.fn(() => ({
		filter: { propertyId: null, operatorId: null, value: '' },
		setFilter: vi.fn(),
		clearFilter: vi.fn(),
	})),
}));

vi.mock('@/api', () => ({
	getProperty: vitest.fn(),
}));

describe('ValueFilterControl', () => {
	const mockFilterStore = {
		filter: { propertyId: 1, operatorId: OperatorType.IsAnyOf, value: '' },
	};

	it('should render AutocompleteControl when selectedProperty is Enumerated and operator is IsAnyOf', () => {
		vi.mocked(useFilterStore).mockReturnValue({
			...mockFilterStore,
			filter: { propertyId: 1, operatorId: OperatorType.IsAnyOf, value: '' },
		});
		vi.mocked(getProperty).mockReturnValue({
			id: 1,
			name: 'Mock Property',
			type: PropertyType.Enumerated,
			values: ['Option 1', 'Option 2'],
		});

		render(<ValueFilterControl />);

		const autocompleteControl: HTMLElement = screen.getByTestId('autocomplete-control');
		expect(autocompleteControl).toBeInTheDocument();
	});

	it('should render SelectFormControl when selectedProperty is Enumerated and operator is not IsAnyOf', () => {
		vi.mocked(useFilterStore).mockReturnValue({
			...mockFilterStore,
			filter: { propertyId: 1, operatorId: OperatorType.Equals, value: '' },
		});
		vi.mocked(getProperty).mockReturnValue({
			id: 1,
			name: 'Mock Property',
			type: PropertyType.Enumerated,
			values: ['Option 1', 'Option 2'],
		});

		render(<ValueFilterControl />);

		const selectFormControl: HTMLElement = screen.getByTestId('filter-select-control');
		expect(selectFormControl).toBeInTheDocument();
	});

	it('should render TextFieldFormControl when selectedProperty is not Enumerated', () => {
		vi.mocked(useFilterStore).mockReturnValue({
			...mockFilterStore,
			filter: { propertyId: 2, operatorId: OperatorType.Equals, value: '' },
		});
		vi.mocked(getProperty).mockReturnValue({
			id: 2,
			name: 'Mock Property',
			type: PropertyType.String,
		});

		render(<ValueFilterControl />);

		const textFieldFormControl: HTMLElement = screen.getByTestId('filter-text-control');
		expect(textFieldFormControl).toBeInTheDocument();
	});
});