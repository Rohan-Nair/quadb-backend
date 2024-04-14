## File Structure Explanation: 
`db > dbConfig` contains function to connect to database 

`server.ts` is the entry file 

`routes.ts` contains the api routes and the controllers in the route are in `controllers`

`model` contains the `CurrencyModel.ts` which contains the Schema for mongodb

!! cors not added 

## Explanation
`fetchAllStocks` function will run once when the server is started and store the top 10 stocks data in the database. 
after that cron-scheduler has been set to 5 minutes and will call `fetchAllStocks` every 5 minutes and update the database. 

in the frontend list the stocks by fetching all stocks from `fetchAllStocks` route

on clicking single stock in the list fetch single stock details from `fetchSingleStock` route

(store the previous value in localStorage to calculate 5 mins, one hour and other differences) 

