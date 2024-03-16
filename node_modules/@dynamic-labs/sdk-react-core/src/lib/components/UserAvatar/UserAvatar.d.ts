/// <reference types="react" />
import { UserProfile } from '../../shared';
type UserAvatarProps = {
    user: UserProfile | undefined;
};
export declare const UserAvatar: ({ user }: UserAvatarProps) => JSX.Element;
export {};
