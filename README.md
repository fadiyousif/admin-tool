# Admin Tool

Figurative insurance system that processes events in the backend and generates an administration tool in the frontend.

## Project Specifications

- Parse contract events on the back-end
- Fetch a list of all contracts from the backend, based on existing events
- Render contracts on the front-end with pagination
- Handle requests to create and terminate contracts

## Coded with

- React
- Node.js
- Express

## Notes

Due to issues with proxy when the GET route is set to `/`, I ended up prepending `/api` to all routes:<br>
`GET /api` returns a list of all contracts, based on existing events <br>
`POST /api/create` saves new **ContractCreatedEvent** event <br>
`POST /api/terminate` saves new **ContractTerminatedEvent** event <br>

Due to the large number of contracts, I added client-side pagination to facilitate navigation. No more than 10 contracts will be rendered per page. I also implemented rate limiting on the front-end, so the user is only allowed to create one contract every 2 seconds.

<hr>

Live Site URL: https://admin-tool.onrender.com/

<img src="./screenshot.png" alt="screenshot">
