/// <reference types="react" />
import { LoginWidgetProps } from '../LoginWidget';
export declare const EMAIL_REGEX: RegExp;
interface Props extends LoginWidgetProps {
    currentEmail?: string;
}
export declare const LoginEmailForm: React.FC<Props>;
export {};
