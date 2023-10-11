# ProjectManager.com SDK for API v4

This software development kit contains all API definitions for the [ProjectManager.com](https://www.projectmanager.com) REST API v4 as a software development kit for TypeScript / JavaScript.  

# Why use the SDK?

The ProjectManager API v4 is available as a REST definition in OpenAPI format.  You can read the documentation online at [developer.projectmanager.com](https://developer.projectmanager.com).

This SDK provides a few capabilities that developers may find more useful than hand-writing REST API code:
* Documentation is available in your editor via autocomplete and hover docblocks
* Automated updates whenever new API endpoints are added

# Using this SDK

Here's how to add this SDK to create a project.

```bash
npm install projectmanager-sdk
```

To create an API client for ProjectManager, you must specify:
* Your API key, and
* Your environment URL.

For the ProjectManager production environment, the environment URL is `https://api.projectmanager.com`.

To [obtain a ProjectManager.com API key](https://developer.projectmanager.com/reference/api-keys):
* Log on to ProjectManager.com
* Click your name in the bottom left hand corner
* Select Account, then API
* Follow the instructions on the page to create a new API key

```typescript
import process from 'process';
import { ProjectManagerClient } from 'projectmanager-sdk';

// Construct a client to talk to the ProjectManager API using your server and token
var client = ProjectManagerClient
    .withEnvironment(process.env["PM_ENV"])
    .withBearerToken(process.env["PM_API_KEY"]);

// Call the RetrieveMe endpoint to verify that you are logged on
var result = await client.Me.retrieveMe();
if (result.suc)
console.log(`Connected as ${result.data?.fullName} (${result.data?.emailAddress})`);
```

        
        
        
