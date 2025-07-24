import { useMemo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import './data/datastore';
import { FilterProductTable, ProductTable } from '@/components';
import { getProducts, getProperties, getProperty, getOperators } from '@/api';
import { Operator, OperatorType, Product, Property } from '@/shared';
import { useFilterStore } from "@/data/filterStore.ts";

function App() {
	const { filter } = useFilterStore();

	const properties: Property[] = getProperties();

	const selectedProperty: Property | null = useMemo(() => getProperty(filter.propertyId), [filter]);

	const operators: Operator[] = useMemo(() => selectedProperty ? getOperators(selectedProperty.type) : [], [selectedProperty]);

	const products: Product[] = useMemo(
		() => getProducts(filter.operatorId as OperatorType, selectedProperty!, filter.value),
		[filter.operatorId, filter.value, selectedProperty]
	);

	return (
		<Container maxWidth="md">
			<Box sx={{ my: 4 }}>
				<Typography variant="h1">Condition Editor UI</Typography>
				<Typography variant="h2">A Coding Exercise for UI Developers</Typography>
			</Box>
			<Box sx={{ my: 4 }}>
				<FilterProductTable properties={properties} operators={operators} />
				<ProductTable products={products} properties={properties} />
			</Box>
		</Container>
	);
}

export default App;
