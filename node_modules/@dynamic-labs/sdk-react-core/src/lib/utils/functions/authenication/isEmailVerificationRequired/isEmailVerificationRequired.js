import { NextViewEnum } from '@dynamic-labs/sdk-api';

const isEmailVerificationRequired = (updateSelfResponse) => updateSelfResponse.nextView === NextViewEnum.VerifyEmail;

export { isEmailVerificationRequired };
