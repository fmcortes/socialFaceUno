# Getting Started

1. Ensure you have the correct version of node installed. If using [nvm](https://github.com/nvm-sh/nvm) run `nvm use`
2. Install the dependecies `npm ci`
3. Run the back end server 
    1.  In a second terminal navigate to the folder where you downladed the backend  code 
    2. In the correct folder run the command `npm run start-auth` (Check [Prerequisites page ](./PREREQUISITES.md))
4. In the first terminal run the command `npm start`
5. Acces the application by manually visit http://localhost:4200/#

## Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

TO-DO
Implement playwright for E2E