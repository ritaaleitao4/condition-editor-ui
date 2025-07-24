import {describe, it, expect, vitest, beforeEach} from 'vitest';
import { render, screen } from '@testing-library/react';
import { TextFieldFormControl } from './index';

describe('TextFieldFormControl', () => {
	beforeEach(() => {
		const defaultProps = {
			label: 'Test Label',
			value: 'Test Value',
			onChange: vitest.fn(),
		};
		render(<TextFieldFormControl {...defaultProps} />);
	});

	it('should render TextField with given props', () => {
		const textField: HTMLElement = screen.getByLabelText('Test Label');

		expect(textField).toBeInTheDocument();
		expect(textField).toHaveValue('Test Value');
	});
});
