import { Operator, OperatorType, Product, Property, PropertyType } from '@/shared';

export const mockProperties: Property[] = [
    { id: 0, type: PropertyType.String, name: 'Product Name' },
    { id: 1, type: PropertyType.Enumerated, name: 'material', values: ['plastic', 'metal'] },
    { id: 2, type: PropertyType.Number, name: 'price' },
];

export const mockOperators: Operator[] = [
    { id: OperatorType.Equals, text: 'Equals' },
    { id: OperatorType.IsAnyOf, text: 'Is any of' },
    { id: OperatorType.GreaterThan, text: 'Is greater than' },
    { id: OperatorType.Contains, text: 'Contains' },
];

export const mockProducts: Product[] = [
    {
        id: 0,
        property_values: [
            {
                property_id: 0,
                value: 'Mouse',
            },
            {
                property_id: 1,
                value: 'plastic',
            },
            {
                property_id: 2,
                value: 10,
            },
        ],
    },
    {
        id: 1,
        property_values: [
            {
                property_id: 0,
                value: 'Webcam',
            },
            {
                property_id: 1,
                value: 'plastic',
            },
            {
                property_id: 2,
                value: 20,
            },
        ],
    },
    {
        id: 2,
        property_values: [
            {
                property_id: 0,
                value: 'Bottle',
            },
            {
                property_id: 1,
                value: 'metal',
            },
            {
                property_id: 2,
                value: 5,
            },
        ],
    },
];
