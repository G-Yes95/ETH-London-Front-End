import { FC, PropsWithChildren } from 'react';
export type AccordionItemProps = {
    className?: string;
    dataTestId?: string;
    isOpen: boolean;
    dimOnHide?: boolean;
};
export type AccordionItemComponent = FC<PropsWithChildren<AccordionItemProps>>;
