# FullStack Assignment Blockchain Completed

Code includes

1. backend-nestjs-server folder

Includes the APIs
- List of all addresses from Ganache
- Get Balance for the Address API
- Get list of all seeded transactions
- Send Transaction API returning mocked receipt

2. mongoDB-mongoose-script

- Seeds transactions data in the mongoDB using mongoose
  (Refer the detailed step-by-step guide mentioned below for running it)

3. react-project folder

Includes

- Ganache fetched addresses Screen
- Selecting an address and viewing its balance fetched from Ganache
- Transfer Funds Screen (through two-way data binding)
- Successfully Transferred Funds Screen
- Transaction History Screen fetched data from mongodb 


## Output of the Project

![Output of the project](./images/img.png)

## Student Details

Sarthak Kaushik (101471600)


## Steps for running the project

In the project directory, run:

### For Database

Installation

```bash
$ npm install
```

Running the script

```bash
$ node seed.js
```


### For Backend

Installation

```bash
$ npm install
```

Running the backend

```bash
$ npm run start
```


### For Frontend

Installation

```bash
$ npm install
```

Running the frontend

```bash
$ npm start
```
