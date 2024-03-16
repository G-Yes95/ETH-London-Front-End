'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../../shared/utils/functions/lastAuthenticatedAccount/index.cjs');

const createUserProfile = (decodedJwt) => {
    var _a;
    const wallet = index.lastAuthenticatedAccount(decodedJwt);
    const kyc = {
        alias: decodedJwt.alias,
        btcWallet: decodedJwt.btcWallet,
        ckbWallet: decodedJwt.ckbWallet,
        country: decodedJwt.country,
        discordNotification: decodedJwt.discordNotification,
        dogeWallet: decodedJwt.dogeWallet,
        email: decodedJwt.email,
        emailNotification: decodedJwt.emailNotification,
        firstName: decodedJwt.givenName,
        jobTitle: decodedJwt.jobTitle,
        kasWallet: decodedJwt.kasWallet,
        kdaWallet: decodedJwt.kdaWallet,
        lastName: decodedJwt.familyName,
        ltcWallet: decodedJwt.ltcWallet,
        newsletterNotification: decodedJwt.newsletterNotification,
        phoneNumber: decodedJwt.phoneNumber,
        policiesConsent: decodedJwt.policiesConsent,
        tShirtSize: decodedJwt.tShirtSize,
        team: decodedJwt.team,
        username: decodedJwt.username,
    };
    const userProfile = Object.assign({ chain: wallet === null || wallet === void 0 ? void 0 : wallet.chain, ens: wallet === null || wallet === void 0 ? void 0 : wallet.nameService, environmentId: decodedJwt.environmentId, isAuthenticatedWithAWallet: ((_a = index.lastAuthenticatedAccount(decodedJwt)) === null || _a === void 0 ? void 0 : _a.format) === 'blockchain', lastVerifiedCredentialId: decodedJwt.lastVerifiedCredentialId, lists: decodedJwt.lists, metadata: decodedJwt.metadata, newUser: decodedJwt.newUser, scope: decodedJwt.scope, sessionId: decodedJwt.sid, userId: decodedJwt.sub, verifiedCredentials: decodedJwt.verifiedCredentials || [], wallet: wallet === null || wallet === void 0 ? void 0 : wallet.walletName }, kyc);
    return userProfile;
};

exports.createUserProfile = createUserProfile;
