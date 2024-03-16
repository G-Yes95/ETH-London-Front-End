import { FC, ReactElement, ReactNode } from 'react';
import { Iconic } from '@dynamic-labs/iconic';
import { Icon } from '../../../../shared';
type Props = {
    children: ReactNode;
    className?: string;
    dataTestId?: string;
    icon?: Icon | Iconic | ReactElement;
    showCloseButton?: boolean;
    title?: string;
};
export declare const DefaultPromptModal: FC<Props>;
export {};
