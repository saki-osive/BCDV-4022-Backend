# FullStack Assignment Blockchain Completed

## Submission has ::

## backend-nestjs-server folder

### Which includes the following APIs

### 1. List of all addresses from Ganache
  ![Get All Account Addresses From Ganache](./images/getAllAccountAddresses.png)

### 2. Get Balance for the Address API
  ![Get Balance from Ganache for the given address](./images/getBalanceForAccountAddress.png)

### 3. Get list of all seeded transactions
  ![List API for seeded transactions in mongodb](./images/listAPI_for_seeded_transactions_in_mongodb.png)

### 4. Send Transaction API returning mocked receipt
  ![Send Transaction API](./images/sendTransactionAPIWithStaticMockedReceiptResponse.png)
         

## mongoDB-mongoose-script

## Seeds transactions data in the mongoDB using mongoose

### Console logs for the script
![Console logs of the script](./images/mongoDB-mongoose-script-console-logs.png)

### Seeded Transactions (Output of the script)
![Transactions seeded in mongodb using the script](./images/SeededTransactionsData.png)



## react-project folder

### Which includes

### 1. Ganache fetched addresses Screen
  ![React Axios Integration With Addresses List API from Ganache](./images/ReactAxiosIntegrationWithAddressesListAPIFromGanache.png)

### 2. Data Transfer Through Route
  ![Select Address For Transfer](./images/SelectAddressForTransfer.png)

  ![Received Selected Address](./images/ReceivedSelectedGanacheAddressThroughTheRoute.png)


- Selecting an address and viewing its balance fetched from Ganache
- Transfer Funds Screen (through two-way data binding)
- Successfully Transferred Funds Screen
- Transaction History Screen fetched data from mongodb using the nestjs API
  ![Transactions History Screen](./images/transactionsScreenUsingAPI_fetching_mongo_seeded_data.png)

  Above Showed Table is using the below shared API which fetches data from mongoDB
  ![List API for seeded transactions in mongodb](./images/listAPI_for_seeded_transactions_in_mongodb.png)


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
