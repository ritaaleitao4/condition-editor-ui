import { OperatorType, Product, Property, PropertyType } from '@/shared';

type Operand = string | string[] | undefined;

const compare = (propType: PropertyType, operatorType: OperatorType, a: Operand, b: Operand): boolean => {
	switch (propType) {
		case PropertyType.String:
			switch (operatorType) {
				case OperatorType.Equals:
					return a === b;
				case OperatorType.HasAnyValue:
					return (a as string).length > 0;
				case OperatorType.HasNoValue:
					return a === null || a === undefined || (a as string).length === 0;
				case OperatorType.IsAnyOf:
					return (b as string[]).includes(a as string);
				case OperatorType.Contains:
					return (a as string).toLowerCase().includes((b as string).toLowerCase());
			}
			break;
		case PropertyType.Number:
			switch (operatorType) {
				case OperatorType.Equals:
					return Number(a) === Number(b);
				case OperatorType.GreaterThan:
					return Number(a) > Number(b);
				case OperatorType.LessThan:
					return Number(a) < Number(b);
				case OperatorType.HasAnyValue:
					return !!a || Number(a) >= 0;
				case OperatorType.HasNoValue:
					return a === null || a === undefined;
				case OperatorType.IsAnyOf:
					b = (b as string).split(',').map(value => value.trim().toLowerCase());
					return !!b && !!a && Array.isArray(b) && b.includes(a as string);
			}
			break;
		case PropertyType.Enumerated:
			switch (operatorType) {
				case OperatorType.Equals:
					return !!a && a.includes((b as string).toLowerCase());
				case OperatorType.HasAnyValue:
					return !!a && a.length > 0;
				case OperatorType.HasNoValue:
					return a === null || a === undefined || a.length === 0;
				case OperatorType.IsAnyOf:
					b = (b as string).split(',').map(value => value.trim().toLowerCase());
					return !!a && Array.isArray(b) && b.some(value => a.includes(value));
			}
			break;
	}

	return true;
};

const hasNoValue = (product: Product, propertyId: number): boolean => {
	return !product.property_values.find(propertyValue => propertyValue.property_id === propertyId);
};

const matchesPropertyValue = (
	propertyValue: { property_id: number | string; value: Operand },
	property: Property,
	operatorId: OperatorType,
	value?: Operand
): boolean => {
	const compareTo: Operand = String(propertyValue.value);
	return propertyValue.property_id === property.id && compare(property.type as PropertyType, operatorId, compareTo, value);
};

const getProductFilter = (property: Property, operatorId: OperatorType, value?: Operand): (product: Product) => boolean => {
	return (product: Product) => {
		if (operatorId === OperatorType.HasNoValue) {
			return hasNoValue(product, property.id);
		}

		return product.property_values.some(propertyValue =>
			matchesPropertyValue(
				{ ...propertyValue, value: String(propertyValue.value) },
				property,
				operatorId,
				value
			)
		);
	};
};


export const getProducts = (
	operatorId: OperatorType,
	property?: Property,
	value?: string | number | string[] | null
): Product[] => {
	if (!property || !operatorId) {
		return window.datastore.getProducts();
	}

	const productFilter = getProductFilter(property, operatorId, String(value!));
	return window.datastore.getProducts().filter(productFilter);
};