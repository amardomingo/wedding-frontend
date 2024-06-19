# Backend

Needs the `GOOGLE_APPLICATION_CREDENTIALS` environment
variable pointing to a gcp service account keyfile,
or some other google auth method.

## How to run

From the `backend` folder run the following command

```bash
GOOGLE_APPLICATION_CREDENTIALS=<credential.json> BANK_ACCOUNT='ESxxxx' node index.js
```
