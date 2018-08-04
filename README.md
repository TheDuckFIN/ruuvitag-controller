# ruuvitag-controller

## Install InfluxDB
InfluxDB is a time-series database, which is used for saving ruuvitag readings.

### macOS
```
brew update
brew install influxdb
```

### Raspberry Pi
Check [InfluxDB downloads](https://portal.influxdata.com/downloads) for latest version number and run (with the correct version)
```
wget https://dl.influxdata.com/influxdb/releases/influxdb_<VERSION>_armhf.deb
sudo dpkg -i influxdb_<VERSION>_armhf.deb
```

After install, start InfluxDB and run `yarn run initdb` to initialize database.