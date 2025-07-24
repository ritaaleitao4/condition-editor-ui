import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterProductTable } from './index';
import { mockProperties, mockOperators } from "@/data/mockStore.ts";
import { useFilterStore } from "@/data/filterStore.ts";

vi.mock('@/data/filterStore.ts', () => ({
    useFilterStore: vi.fn(() => ({
        filter: { propertyId: null, operatorId: null, value: '' },
        setFilter: vi.fn(),
        clearFilter: vi.fn(),
    })),
}));

describe('FilterProductTable', () => {
    let mockSetFilter: ReturnType<typeof vi.fn>;
    let mockClearFilter: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        const filterStore = useFilterStore();
        mockSetFilter = filterStore.setFilter as ReturnType<typeof vi.fn>;
        mockClearFilter = filterStore.clearFilter as ReturnType<typeof vi.fn>;

        render(
            <FilterProductTable
                properties={mockProperties}
                operators={mockOperators}
            />
        );
    });

    describe('when component init', () => {
        it('should render property select dropdown', () => {
            const propertySelect: HTMLElement = screen.getByTestId('property-select');
            expect(propertySelect).toBeInTheDocument();
        });

        it('should render property select placeholder', () => {
            const propertySelectLabels: HTMLElement[] = screen.getAllByTestId('property-select-label');
            const propertySelectLabel: HTMLElement | undefined = propertySelectLabels.find(label => label.textContent === 'Select a Property');
            expect(propertySelectLabel).toBeDefined();
            expect(propertySelectLabel).toHaveTextContent('Select a Property');
        });

        it('should disable operator select when no property is selected', () => {
            const operatorSelects: HTMLElement[] = screen.getAllByTestId('operator-select');
            const disabledSelect: HTMLElement | undefined = operatorSelects.find(el => el.querySelector('input')?.disabled);
            expect(disabledSelect).toBeDefined();
        });

        it('should render operator select dropdown', () => {
            const operatorSelect: HTMLElement = screen.getByTestId('operator-select');
            expect(operatorSelect).toBeInTheDocument();
        });

        it('should render operator select placeholder', () => {
            const operatorSelectLabels: HTMLElement[] = screen.getAllByTestId('operator-select-label');
            const operatorSelectLabel: HTMLElement | undefined = operatorSelectLabels.find(label => label.textContent === 'Select an Operator');
            expect(operatorSelectLabel).toBeDefined();
            expect(operatorSelectLabel).toHaveTextContent('Select an Operator');
        });

        it('should render clear button disabled', () => {
            const clearButton: HTMLElement = screen.getByTestId('clear-button');
            expect(clearButton).toBeDisabled();
        });
    });

    it('should call clearFilter when clear button is clicked', () => {
        vi.mocked(useFilterStore).mockReturnValue({
            filter: {
                propertyId: mockProperties[0].id,
                operatorId: mockOperators[0].id,
                value: 'test-value',
            },
            setFilter: mockSetFilter,
            clearFilter: mockClearFilter,
        });

        render(
            <FilterProductTable
                properties={mockProperties}
                operators={mockOperators}
            />
        );

        const clearButtons: HTMLElement[] = screen.getAllByTestId('clear-button');
        const clearButton: HTMLElement | undefined = clearButtons.find(button => !(button as HTMLButtonElement).disabled);
        expect(clearButton).toBeDefined();
        fireEvent.click(clearButton!);
        expect(mockClearFilter).toHaveBeenCalled();
    });
});
