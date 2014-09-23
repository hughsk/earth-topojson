var files     = require('earth-shapefiles')
var shapefile = require('shapefile')
var topojson  = require('topojson')
var fs        = require('fs')

Object.keys(files).forEach(function(scale) {
  var file = files[scale]
  var outfile = scale + '.json'

  shapefile.read(file, {}, function(err, collection) {
    if (err) throw err

    var features = collection.features
    var index    = {}
    var objects  = {
      countries: collection
    }

    for (var i = 0; i < features.length; i++) {
      var props = features[i].properties
      var id = props.ISO_A3 || props.iso_a3
      index[id] = props
    }

    topojson.stitch(objects)

    var object = topojson.topology(objects, {
        'verbose': true
      , 'stitch-poles': true
      , 'ignore-properties': false
      , 'id': function(d) {
        return d.properties.ISO_A3 || d.properties.iso_a3
      }
    })

    topojson.clockwise(object, {
        'verbose': true
      , 'coordinate-system': 'spherical'
    })

    var countries  = object.objects.countries
    var geometries = countries.geometries

    for (var i = 0; i < geometries.length; i++) {
      geometries[i].properties = index[geometries[i].id]
    }

    fs.writeFileSync(outfile, JSON.stringify(object))
  })
})
