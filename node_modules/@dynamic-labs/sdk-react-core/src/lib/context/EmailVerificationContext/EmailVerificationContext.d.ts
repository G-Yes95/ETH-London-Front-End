import { ReactNode, SetStateAction, Dispatch } from 'react';
type EmailVerificationContextProps = {
    email: string | undefined;
    setEmail: Dispatch<SetStateAction<string | undefined>>;
    setVerificationUUID: Dispatch<SetStateAction<string | undefined>>;
    verificationUUID: string | undefined;
};
export declare const EmailVerificationContext: import("react").Context<EmailVerificationContextProps | undefined>;
export declare const EmailVerificationContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useEmailVerificationContext: () => EmailVerificationContextProps;
export {};
