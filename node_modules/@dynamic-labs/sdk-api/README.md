# sdk-api

This library contains a generated TypeScript client using [openapi](https://spec.openapis.org/oas/v3.0.1). It can be used with any Javascript/Typescript project.

Documentation on the current set of REST APIs can be found at: https://docs.dynamic.xyz/api-reference/overview

# APIs

- SdkApi
  - These are endpoints used exclusively by the [Dynamic React SDK](https://www.npmjs.com/package/@dynamic-labs/sdk-react). Several endpoints in these APIs require a [JWT](https://docs.dynamic.xyz/react-sdk/references/user-payload#-the-jwt-update) created by the `verify` or `signin` endpoints, and are specific to a user in the SDK's environment. These APIs are typically used on a client site or frontend to enhance their customers' experience.
- Dashboard APIs
  - These endpoints are used by admins of an organization to update site settings and manage users of the environment. These APIs require an [API token](https://docs.dynamic.xyz/api-reference/overview#authentication) scoped for a specific environment. These APIs are typically used on a client backend, to manage all their users' data and make corresponding settings changes that affect all users of a site.
  - The most commonly used API among the dashboard APIs is `UsersApi`
  - You can read about all the other available APIs [here](https://docs.dynamic.xyz/api-reference/overview)

# Examples

This section provides an example of how to use `SDKApi`. This would be similar to using the other available generated APIs, like `UsersApi` or `ExportsApi`, etc.

### SdkApi

Initialize a new instance of the `SDKApi` class:
```typescript
import { Configuration, SDKApi } from '@dynamic-labs/sdk-api';

const sdkApi = (jwt: string) => {
  const settings = {
    basePath: ApiEndpoint.getBaseUrl(),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  settings.headers.Authorization = `Bearer ${jwt}`;
  return new SDKApi(new Configuration(settings));
};
```

Then you would be able to use it like this:
```typescript
const response = await sdkApi(jwt).updateSelf({
  environmentId,
  userFields: fields, // { alias, firstName, lastName, username, ... }
});
// do something with the response
```
