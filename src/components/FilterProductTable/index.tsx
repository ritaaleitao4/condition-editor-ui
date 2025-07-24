import { useMemo } from "react";
import { MenuItem, Button, Stack } from '@mui/material';
import { SelectFormControl, ValueFilterControl } from "@/components";
import { useFilterStore } from "@/data/filterStore.ts";
import { Operator, OperatorType, Property } from "@/shared";
import { OperatorId } from "@/shared/operator.ts";

export const FilterProductTable = ({ properties, operators } : { properties: Property[], operators: Operator[] }) => {
    const { clearFilter, filter, setFilter } = useFilterStore();
    const isFilterVisible: boolean | null = useMemo((): boolean | null => {
        return (
            filter.propertyId !== null &&
            filter.operatorId &&
            ![OperatorType.HasAnyValue, OperatorType.HasNoValue].includes(filter.operatorId as OperatorType)
        );
    }, [filter]);

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="flex-start" gap={3} sx={{ mb: 2 }}  data-testid="product-table-filters">
            <>
                <SelectFormControl
                    id="property-select"
                    data-testid="property-select"
                    labelId="property-select-label"
                    label="Property"
                    placeholder="Select a Property"
                    value={filter.propertyId ?? ''}
                    onChange={(event) => {
                        setFilter({ propertyId: event.target.value as number, operatorId: null, value: '' });
                    }}
                    children={properties.map(property => (
                        <MenuItem key={property.id} value={property.id}>
                            {property.name}
                        </MenuItem>
                    ))}
                />

                <SelectFormControl
                    id="operator-select"
                    labelId="operator-select-label"
                    data-testid="operator-select"
                    label="Operator"
                    placeholder="Select an Operator"
                    value={filter.operatorId ?? ''}
                    onChange={(event) =>
                        setFilter({ ...filter, operatorId: event.target.value as OperatorId, value: '' })
                    }
                    children={operators.map(operator => (
                        <MenuItem key={operator.id} value={operator.id}>
                            {operator.text}
                        </MenuItem>
                    ))}
                    disabled={filter.propertyId === null}
                />

                {isFilterVisible && (
                    <ValueFilterControl data-testid="value-filter-control" />
                )}
            </>

            <Button
                variant="contained"
                sx={{ flexGrow: { xs: 1, md: 0 }, marginLeft: { xs: 0, md: 'auto' } }}
                onClick={clearFilter}
                disabled={filter.propertyId === null}
                data-testid="clear-button"
            >
                Clear
            </Button>
        </Stack>
    );
};
