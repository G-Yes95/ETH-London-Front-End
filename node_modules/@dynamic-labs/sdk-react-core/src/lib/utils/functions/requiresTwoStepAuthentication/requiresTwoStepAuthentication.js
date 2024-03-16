import { isMobile } from '@dynamic-labs/utils';

const walletsRequiringTwoStepAuthentication = ['Dapper'];
const requiresTwoStepAuthentication = (connector) => (isMobile() && !(connector === null || connector === void 0 ? void 0 : connector.canConnectViaCustodialService)) ||
    walletsRequiringTwoStepAuthentication.includes((connector === null || connector === void 0 ? void 0 : connector.name) || '');

export { requiresTwoStepAuthentication };
