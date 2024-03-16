import { FC } from 'react';
export type DynamicBridgeWidgetVariant = 'modal' | 'dropdown';
export type DynamicBridgeWidgetProps = {
    className?: string;
    variant?: DynamicBridgeWidgetVariant;
};
export declare const DynamicBridgeWidget: FC<DynamicBridgeWidgetProps>;
