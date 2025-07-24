import { describe, it, expect, vitest, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AutocompleteControl } from './index';

describe('AutocompleteControl', () => {
	const options: string[] = ['Option 1', 'Option 2', 'Option 3'];
	const onChange = vitest.fn();

	beforeEach(() => {
		render(
			<AutocompleteControl
				id="test-id"
				label="Test Label"
				options={options}
				onChange={onChange}
			/>
		);
	});

	it('should render the Autocomplete component', () => {
		const autocomplete: HTMLElement = screen.getByTestId('autocomplete-control');
		expect(autocomplete).toBeInTheDocument();
	});

	it('should call onChange with selected values in the correct format', () => {
		const openButton: HTMLElement = screen.getByRole('button', { name: 'Open' });
		fireEvent.click(openButton);

		const options: HTMLElement[] = screen.getAllByRole('option');
		const option1: HTMLElement | undefined = options.find(option => option.textContent === 'Option 1');
		const option2: HTMLElement | undefined = options.find(option => option.textContent === 'Option 2');
		const option3: HTMLElement | undefined = options.find(option => option.textContent === 'Option 3');

		if (option1) fireEvent.click(option1);
		if (option2) fireEvent.click(option2);
		if (option3) fireEvent.click(option3);

		expect(onChange).toHaveBeenCalledWith('Option 1, Option 2, Option 3');
	});
});