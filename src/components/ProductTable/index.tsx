import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    styled,
    TableRowOwnProps
} from '@mui/material';
import { Product, Property } from '@/types';
import { StyledComponent } from "@emotion/styled";
import { themePalette } from "@/theme/palette.ts";

const StyledTableHeaderRow: StyledComponent<TableRowOwnProps> = styled(TableRow)(({ theme }) => ({
    '&:first-of-type': {
        position: 'sticky',
        left: 0,
        zIndex: 2,
        backgroundColor: theme.palette.primary.dark,
    },
}));

const StyledTableBodyRow: StyledComponent<TableRowOwnProps> = styled(TableRow)(({ theme }) => ({
    color: themePalette.text?.primary,
    backgroundColor: themePalette.background?.default,

    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
    },

    '&:first-of-type': {
        position: 'sticky',
        left: 0,
        zIndex: 2,
    },
}));

const StyledTableCell: StyledComponent<TableRowOwnProps> = styled(TableCell)(({theme}) => ({
    textAlign: 'right',
    textTransform: 'capitalize',

    '&:first-of-type': {
        position: 'sticky',
        left: 0,
        zIndex: 2,
        textAlign: 'left',
        backgroundColor: theme.palette.primary.dark,
    },
}));

interface IProductTableProps {
    products: Product[];
    properties: Property[];
}

export const ProductTable = ({ products, properties }: IProductTableProps) => {
    return (
        <TableContainer component={Paper} data-testid="product-table">
            <Table>
                <TableHead>
                    <StyledTableHeaderRow>
                        {properties.map((property) => (
                                <StyledTableCell key={`th-${property.id}`}>
                                    {property.name}
                                 </StyledTableCell>
                         ))}
                     </StyledTableHeaderRow>
                 </TableHead>

                <TableBody>
                    {products.map(product => (
                        <StyledTableBodyRow key={`tr-${product.id}`}>
                            {properties.map((property) => (
                                <StyledTableCell key={`td-${product.id}-${property.id}`}>
                                    {product.property_values.find(pv => pv.property_id === property.id)?.value}
                                </StyledTableCell>
                            ))}
                        </StyledTableBodyRow>
                    ))}
                </TableBody>
            </Table>
         </TableContainer>
    );
};
