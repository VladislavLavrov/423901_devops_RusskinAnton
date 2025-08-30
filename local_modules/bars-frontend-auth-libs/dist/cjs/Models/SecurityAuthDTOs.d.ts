import { FactorType } from "./SecurityEnums";
export type SecurityAuthRequestDTO = {
    username: string;
    password: string;
    factorType: FactorType;
};
export type SecurityAuthResponseDTO = {
    success: boolean;
    message: string;
    errorCode: string;
    user: UserInfoDTO;
    accessToken: AccessTokenInfoDTO;
    refreshToken: RefreshTokenInfoDTO;
};
export type UserInfoDTO = {
    id: number;
    guid: string;
    name?: string | undefined;
};
export type AccessTokenInfoDTO = {
    token: string;
    dateTokenCreate: Date;
    dateTokenExpires: Date;
};
export type RefreshTokenInfoDTO = {
    token: string;
    Created: Date;
    Expires: Date;
};
