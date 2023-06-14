npx @cypress/chrome-recorder <relative path to target test file>
npx @cypress/chrome-recorder <relative path to target test folder>/*.json
npx @cypress/chrome-recorder *.json

##Cypress
`npx cypress open`

# will use http://localhost:4200
npx cypress open --env version="local"
# will use http://staging.example.com
npx cypress open --env version="staging"
# will use http://example.com
npx cypress open --env version="prod"
# will use fallback to http://localhost:4200
npx cypress open 