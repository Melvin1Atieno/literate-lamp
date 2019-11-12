# JAVASCRIPT STARTER KIT.
This is a javascript starter kit that  sets up a javascript development environment with most decisions made. It handles;
  1. package management
  2. Bundling 
  3. Minification
  4. sourcemaps
  5. Transpiling
  6. Centralized HTTP
  7. Mock API framework
  8. Componet libraries
  9. Dynamic HTM Generation
  10. Development Webserver
  11. Linting
  12. Automated testing
  13. Continous Integration
  14. Automated build
  15. Automated deployment
  16. Working example app

# Getting Started
1. clone repo
`git clone https://github.com/Melvin1Atieno/literate-lamp.git`
2. install nvm
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash`
3. install node 
`nvm install node 10.16.3`
4. install packages.
`npm install`


## Editor 

### configuration
[Editorconfig](https://editorconfig.org/)
Some editors will require a plugin. Download [here](https://editorconfig.org/#download)

## Package Management

### package manager
[npm](https://docs.npmjs.com/cli/npm)
npm comes bundled with node. npm's packages manifest is `package.json`  

**usage**
`npm install`

### package security
[npm-audit](https://docs.npmjs.com/cli/audit). The command submits a description of the dependencies configured in your project to your default registry and asks for a report of known vulnerabilities. The report returned includes instructions on how to act on this information. The command will exit with a 0 exit code if no vulnerabilities were found.  
The command is configured to automatically install any compatible updates to vulnerable dependencies.
**usage**
`npm run security-check`

