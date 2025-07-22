import { useMemo, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import './data/datastore';
import { ProductTable } from './components';
import { getProducts, getProperties, getProperty } from './api';
import { OperatorType } from './types';

function App() {
	const [selectedPropertyId, setSelectedPropertyId] = useState<string>('');
	const [selectedOperatorId, setSelectedOperatorId] = useState<string>('');
	const [filter, setFilter] = useState<string>('');

	const properties = getProperties();

	const selectedProperty = useMemo(() => getProperty(selectedPropertyId), [selectedPropertyId]);

	const products = useMemo(
		() => getProducts(selectedOperatorId as OperatorType, selectedProperty, filter),
		[selectedProperty, selectedOperatorId, filter]
	);

	return (
		<Container maxWidth="md">
			<Box sx={{ my: 4 }}>
				<Typography variant="h1">Condition Editor UI</Typography>
				<Typography variant="h2">A Coding Exercise for UI Developers</Typography>
				<ProductTable products={products} properties={properties} />
			</Box>
		</Container>
	);
}

export default App;
