# Enrollment Form Server

A backend for the enrollment client form (https://github.com/devleague/enrollment_form_client) and possibly other internal facing clients for dev league.

## Before Starting
1. You will need a running instance of MongoDB for this server to use.
1. A **CONFIG** file located at `config/index.json` file.

Example config file:

```
{
  "DEVELOPMENT": {
    "SERVER": {
      "PORT": 9393
    },
    "DATABASE": {
      "URL": "mongodb://instance/to/somewhere"
    },
    "SENDGRID": {
      "API_KEY": "SECRET_KEY_HERE",
      "TEMPLATES" : {
        "ENROLLMENT_ID": "SEND_GRID_ID_FOR_ENROLLMENT_FORM"
      }
    }
  }
}
```

## Getting Started
1. clone
1. `npm install` for dependencies
1. run `index.js` to start the server

## Developing
- This server uses Node 6.3.0+.
- run `npm run dev` to start developing
- Do work in the `src/` directory
  - files will be output to `dist/`
