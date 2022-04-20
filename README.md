# R3e Spectator dashboard

### This still is a work in progress feel free to contribute
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run start:build`

Runs the app in production mode.
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## How to use in game

* Download RaceRoom Racing Experience from Steam
* Go into the game's Properties in the Steam client and change "SET LAUNCH OPTIONS..." to:
  * -webDev -broadcastUrl=http://localhost:3000/ **Dev mode**
  * -broadcastUrl=http://localhost:4000/
* Start RaceRoom Racing Experience
* Enter the Multiplayer server list though the game menus
* Join the server you want to spectate 
  * **There are no requirements to own the content used on the server**
