# Wallet Book

## Updating Wallet Book

- [Wallet Book](#wallet-book)
  - [Updating Wallet Book](#updating-wallet-book)
    - [Adding First Party Wallet](#adding-first-party-wallet)
    - [Updating Wallet Connect Data](#updating-wallet-connect-data)
    - [Adding overrides to WalletConnect](#adding-overrides-to-walletconnect)
    - [Compile \& Publish](#compile--publish)

### Adding First Party Wallet

Simply add an entry to `firstPartyWalletsData` in `packages/wallet-book/src/build/sources/firstParty/index.ts` and [Compile & Publish](#compile--publish)

For example:

```
  argentx: {
    brand: {
      alt: 'Argent Wallet',
      primaryColor: '#FF875B',
      spriteId: 'argentx',
    },
    desktop: {
      chromeId: 'dlcobpjiigpikoobohmabehhmhfoodbb',
      firefoxId: 'argent-x',
    },
    name: 'Argent X',
    injectedConfig: [
      {
        chain: 'EVM',
        extensionLocators:
      }
    ]
  },
```

Required fields:

- `brand`
  - `alt`
  - `primaryColor`
  - `spriteId` - The id used in the iconic svg
  - `name`

Refer to `WalletRecordsSchema` for more schema options

### Adding injected (browser extension) wallets

Similar to [adding first party wallets](#adding-first-party-wallet), we add another key, `injectedConfig` to the wallet object.

```
...
injectedConfig: [
  {
    chain: 'EVM',
    extensionLocators: [
      { flag: 'isOkxWallet', value: true },
      { flag: 'isOkexWallet', value: true }
    ],
    windowLocations: ['okxwallet']
  }
],
name: 'OKX'
```

#### Things to remember when adding a new wallet

- `IF the new wallet is also in wallletconnect.json`: make sure that the key used in `firstParty/index.ts` is the `same` as the value from `walletconnect.json` as to inherit the properties from that wallet definition.
- The value(s) in `windowLocations` map to `window.<value from windowLocations>`. i.e. `okxwallet` means `window.okxwallet`. The values can be a nested path that is dot delimited. If the wallet lives under `window.ethereum` or `window.ethereum.providers`, those window locations are imported by default.
- For every extension locator you add for the new wallet, add the negation `[{ flag: 'isOkxWallet', value: false }, ...]` to the extensionLocators under the `metamask` key in firstParty.
- If the new wallet is wallet connect enabled (exists in `walletconnect.json`), make sure to add: `filterFromWalletConnect: true` as a sibling to `injectedConfig` which will filter the wallet from the wallet connect connectors list and use wallet connect as fallback.

Refer to `injectedConfigSchema` for the schema options

### Updating Wallet Connect Data

- Download the data from : https://registry.walletconnect.org/data/wallets.json replace
- Replace packages/wallet-book/src/build/sources/walletConnect/walletconnect.json
- [Compile & Publish](#compile--publish)

### Adding overrides to WalletConnect

- modify packages/wallet-book/src/build/sources/walletConnectOverrides/index.ts
- [Compile & Publish](#compile--publish)

### Compile & Publish

The compiled json is stored in `packages/wallet-book/wallet-book.json`. When the file is updated
and merged to main it will be published to S3 automatically.

Simply, make any changes that you need and:

- run `npx nx compile wallet-book`
- commit `wallet-book.json`
- Open PR with changes and merge
