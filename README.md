# earth-topojson [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

TopoJSON files of the Earth sourced from
[Natural Earth](http://www.naturalearthdata.com/).

## Usage

[![NPM](https://nodei.co/npm/earth-topojson.png)](https://nodei.co/npm/earth-topojson/)

Load the TopoJSON files using the following:

``` javascript
var highRes = require('earth-topojson/10m.json')
var normRes = require('earth-topojson/50m.json')
var lowRes = require('earth-topojson/110m.json')
var lowRes = require('earth-topojson')
```

You can then use the [topojson](http://github.com/mbostock/topojson) package on
npm to convert those files into GeoJSON:

``` javascript
var world = require('earth-topojson')
var topojson = require('topojson')

var countries = topojson.feature(world, world.objects.countries)
```

## See Also

* [topojson](http://github.com/mbostock/topojson)
* [shapefile](http://github.com/mbostock/shapefile)
* [earth-shapefiles](http://github.com/mbostock/earth-shapefiles)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/earth-topojson/blob/master/LICENSE.md) for details.
