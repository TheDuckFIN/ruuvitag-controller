# ruuvitag-controller

## Requirements

* NodeJS
  * Tested to work on the version specified in `.nvmrc`, use `nvm install` to automatically install that version if using nvm.
* Yarn
* Bluetooth support
  * [Noble](https://github.com/noble/noble) is the Bluetooth library used here, check it's repository for more information about requirements

### InfluxDB
InfluxDB is a time-series database, which is used for saving ruuvitag readings.

#### Install on macOS
```
brew update
brew install influxdb
```

#### Install on Raspberry Pi (Raspbian)
Check [InfluxDB downloads](https://portal.influxdata.com/downloads) for latest version number and run (with the correct version)
```
wget https://dl.influxdata.com/influxdb/releases/influxdb_<VERSION>_armhf.deb
sudo dpkg -i influxdb_<VERSION>_armhf.deb
```

After install, start InfluxDB and run `yarn run initdb` to initialize database.

## Development

### Backend
Backend source files are located under `src` folder. In order to start backend, run `yarn start`. There is currently no reloading on changes.

### Frontend
Frontend files are located under `web` folder. [Parcel](https://parceljs.org/) is used for bundling. For development, run `yarn run front-dev` to start Parcel with hot reloading enabled. Development server will be started at `localhost:1234`.

## Usage

1. Install all requirements
2. Add correct environment variables by creating `.env` file and filling in the variables specified in `.env.example`
3. Build frontend using `yarn run front-build`
4. `yarn start`