---
page_type: sample
languages:
- nodejs
products:
- functions
description: "This repository includes examples demonstrating how to run tests against an HTTP-triggered and timer-triggered function in JavaScript using Mocha, chai and Sinon"
urlFragment: "azure-functions-unit-testing-using-mocha"
---

# Testing Azure Functions using Mocha


This repository includes examples demonstrating how to run tests against an HTTP-triggered and timer-triggered function in JavaScript using  [Mocha](https://mochajs.org) and works best with [Visual Studio Code](https://code.visualstudio.com/).

Testing all code is recommended, however you may get the best results by wrapping up a Function's logic and creating tests outside the Function. Abstracting logic away limits a Function's lines of code and allows the Function to be solely responsible for calling other classes or modules. There are two functions with associated tests available, these examples include:

* HTTP-triggered function: The example demonstrates how to pass in query string parameters to the function.
* Timer-triggered function: A non-HTTP triggered function (in the form of a timer-triggered function) is included to demonstrate how to test a function that is not callable via a standard HTTP request.


To read more about the testing Azure functions, read [Strategies for testing your code in Azure Functions](https://docs.microsoft.com/azure/azure-functions/functions-test-a-function)


## Setup

Open the folder src in VS Code. Run npm install to install the dependencies and then run npm test to run the tests. The output from the tests should look something like the following:

![Testing Azure Functions with JavaScript in VS Code](./media/azure-functions-test-vs-code-mocha.png)

### Debug tests

To debug your tests, add the following configuration if not present to your *launch.json* file:

```json
{
    "type": "node",
    "request": "launch",
    "name": "Mocha Tests",
    "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
    "args": 
    [
        "--timeout",
        "999999",
        "--colors",
        "'${workspaceFolder}/{,!(node_modules)/}*/*.test.js'"
    ],
  "internalConsoleOptions": "openOnSessionStart"
}
```

Next, set a breakpoint in your test and press **F5**.

To learn more on how to setup & debug from scratch, please read this [document](/walkthrough.md)

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
