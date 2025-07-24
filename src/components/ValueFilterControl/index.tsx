import { MenuItem } from '@mui/material';
import { useMemo } from "react";
import { getProperty } from "@/api";
import { useFilterStore } from "@/data/filterStore.ts";
import { OperatorType, Property, PropertyType } from '@/types';
import { SelectFormControl, TextFieldFormControl, AutocompleteControl } from '@/components';
import { EnumeratedProperty } from "@/types/property.ts";

export const ValueFilterControl = () => {
    const { filter, setFilter } = useFilterStore();
    const selectedProperty: Property | null = useMemo(() => getProperty(filter.propertyId as number), [filter]);
    const isEnumeratedType: boolean = selectedProperty?.type === PropertyType.Enumerated;
    const isAnyOfOperator: boolean = filter.operatorId === OperatorType.IsAnyOf;

    if (isEnumeratedType) {
        if (isAnyOfOperator) {
            return (
                <AutocompleteControl
                    id="filter-multi-select"
                    data-testid="autocomplete-control"
                    label="Filter"
                    options={selectedProperty?.type === PropertyType.Enumerated ? (selectedProperty as EnumeratedProperty).values : []}
                    onChange={(value: string): void =>
                        setFilter({ ...filter, value: value })
                    }
                />
            );
        }

        return (
            <SelectFormControl
                id="filter-select"
                data-testid="filter-select-control"
                label="Filter"
                placeholder="Select a Filter"
                value={filter.value ?? ''}
                onChange={(event): void =>
                    setFilter({ ...filter, value: event.target.value as number })
                }
                children={(selectedProperty as EnumeratedProperty)?.values?.map(value => (
                    <MenuItem key={value} value={value}>
                        {value}
                    </MenuItem>
                ))}
            />
        );
    }

    return (
        <TextFieldFormControl
            id="filter-text"
            data-testid="filter-text-control"
            label="Filter"
            placeholder="Enter a filter"
            value={filter.value ?? ''}
            onChange={(event): void => setFilter({ ...filter, value: event.target.value })}
        />
    );
};