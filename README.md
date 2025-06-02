# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

# Reproduction

1. install dependencies
2. start the app
3. in the dashboard click on Home
4. Now click on the next Menu Item, with ID 1

## expected behavior

https://play.vuetifyjs.com/#eNqNVttu4zYQ/RVWLWAvaklxm2YXhhOkb8lDgWJR9GW1D4o1jthSlEDSyrqG/72HF8myLW9sJDA5c+bOmfGXXaTVKq1yLpN/dLSIeNXUyrAdWynKDf3eNGzP1qqu2KTd0CSTPQBXw9fbnp2kgQJFB5yqN4ZUD/HXI4Q10bFxTo7MgKbJbBovkclVLbVhOUTuDx5O8f8hk6Am4K/5a0JK1eopl4WA7XtG7P6BWdFakOdNCQJeZKNpGjwPSizFO9qDqnojzXTyI84TEKOZS1twF2lbGqoaAXceMsnYso0BdEd3sellK5FrfZ9FZbzeCJFFge0A8M0AQ6onOrKq3waEgBSIRFhFvwx09HxdErmsy4IKgMTrGcrhBEce34EB+EMch+MbNyVywvj8k2QPTFFVt8REvcoF/ZmbspeJ4zFF3mLMkSdmuBFkM1FXlEVsYWpcJukEZ8Hlvyy9VgEv2HygwOpL50dqRhUVvOUFHkZXkWobI5eX8QfDyHytIPGqaAvya2lIxreQ7Tz6TGtFurwcyTL1+k4rB7Ir3XG9QYXJE7/8K7hU+orLuCTrGtz5eNNaX95/DmMPsGf7XohbTm8XIrok/l5YQ8rwsY/ptDTbSL7DcPEttkwHrYe+9IMDSDszaone3FkBPBbH0Fm0YI5iaWhee8dTNKbRizRdFXYOFiR4qxJJJpVNlT4ClioMAF5RXNTV46/Jb8n8Li1QxyE9IV3FL4hDuxGXRbOBHTtfrrAVkDDxKfnoLQRSLPIXbU2cqcaIVC0KpAhVVqSuDelE7CisE953Q0Pp7AO5LroAfryFsZs+wEC9bMY5XFBragw/lJ5fG+RQ5vEuuUtuU8FfUhhKOWL7lqBhnClraZ/JfZjt/aY6X4p/YPap7RNcx9csED/7RTdYliGmwzJ7wnzqV529HO86S3kujgDPRYB0m8+p1FhpX6y74R03GL8LNpmEZMm8IlxddB1tVXJRoJgLL4hPkB2RH+iwE3VIXtVwVZI0C+dtz9nPUKNwPlfs5vKCFxcMPB8xTkw8FyNGvrpagYHDUWbssh+WY+qcKX2lFmPlm35w+n1ecdy7lU/fXEUKWucb0enu135XurG930+tw3Yx8fyun7qAQMJsY20g1YVWUl5gYdgN8nf4WfUzw4n5MPzjtB8O/QD91A+UjrHQ/D8rPr+5ORC7rfQXMsDwlyOiqmb12up2VuxWHzHkp/zpFD4dtV0u/Cu12dArxRvD3E82p6LrHPykchZG28MW3ZZw1+Qqr/QeRezwU5RjmXq1bg2eJByr/GEX5BJe7PdLjJT2zNf9LPLDDV67yRrN1rnQdNrqM6M29PV/Zrh9tA==

If the item with the ID is clicked, both should menu items should be highlighted, since the ID is a nested route of the home route

## current behavior

each route is highlighted for its own
