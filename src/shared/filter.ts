import { OperatorId } from "@/shared/operator.ts";

export type Filter = {
    propertyId: number | null;
    operatorId: OperatorId | null;
    value: string | number | string[] | null;
};
