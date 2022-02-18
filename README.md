# Sample Teams Connector

This is an example to show how to write a connector for Microsoft Teams.

Connector files and pages:
* `./src/connector.ts` - implementation of the Connector that manages registering new subscriptions (`Connect()`) as well as a sample method to send a message to all subscribers (`Ping()`).
* `./src/public/config.html` - the configuration of the Connector .
* `./src/connectorConfig/connectorConfig.tsx` - React component of the configuration page.

Connector APIs:

For the Connector you will have two generated end-points, defined in `./src/server/server.ts`.

* `/api/connector/connect` - this is the end-point that is connected to the `Connect` method of the Connector implementation and is used when registering a Connector. 
* `/api/connector/ping` - this is a test end-point to demonstrate how to invoke the Connector using a simple HTTP GET operation. It is highly recommended that you remove this end-point and implement your own logic for invoking the connector.

## Prerequisites
* Node.js - v12.* (or higher)
* NPM (installed with Node.js) - v6.* (or higher)
* Gulp - v4.* (or higher)
* [Yeoman Generator for Microsoft Teams](https://github.com/OfficeDev/generator-teams) - v3.2.0 (or higher)
* M365 account with Teams sideloading permission enabled.

## How to Run
1. In a terminal, navigate to the project root.
1. Run `npm install` to install node modules for this project.
1. Run `gulp ngrok-serve` to start the project and get the ngrok tunnelling endpoint (e.g. https://[replace].ngrok.io).
1. Register a new connector in the [Connector Developer Portal](https://outlook.office.com/connectors/publish)
   1. Fill in all the basic details such as name, logo, descriptions etc. for the new connector.
   1. For the configuration page, you'll use our sample code's setup endpoint: `https://[replace].ngrok.io/config.html`
   1. For Valid domains, make enter your domain's http or https URL, e.g. XXXXXXXX.ngrok.io.
   1. Enable the action on connector card by selecting the Yes radio button and enter the update endpoint: `https://[replace].ngrok.io/config.html`
   1. Click on Save. After the save completes, you will see your connector id.
1. Within your project, locate and open the ./.env file. Set the CONNECTOR_ID to the ID of the Connector you just created.
1. The manifest zip package under .package folder will be automatically refresh with the connector id.
1. Now you can sideload your app package under .package folder to test your new connector.

You can refer to [this tutorial](https://docs.microsoft.com/en-us/learn/modules/msteams-webhooks-connectors/7-exercise-o365-connectors) for more details on the above steps.

## Building the manifest

To create the Microsoft Teams Apps manifest, run the `manifest` Gulp task. This will generate and validate the package and finally create the package (a zip file) in the `package` folder. The manifest will be validated against the schema and dynamically populated with values from the `.env` file.

``` bash
gulp manifest
```

## Deploying the manifest

Using the `yoteams-deploy` plugin, automatically added to the project, deployment of the manifest to the Teams App store can be done manually using `gulp tenant:deploy` or by passing the `--publish` flag to any of the `serve` tasks.


## More Information
For more information about getting started with Teams, please review the following resources:
- Review [Getting Started with Teams Connector](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-creating)
