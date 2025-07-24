import { Operator, PropertyType } from '@/shared';
import { isValidOperator } from '@/helpers';

export const getOperators = (propertyType: PropertyType): Operator[] => {
	return window.datastore.getOperators().filter(operator => isValidOperator(propertyType, operator.id));
};
