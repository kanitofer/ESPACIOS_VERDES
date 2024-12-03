var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EspaciosVerdesEspaciosVerdes_2 = new ol.format.GeoJSON();
var features_EspaciosVerdesEspaciosVerdes_2 = format_EspaciosVerdesEspaciosVerdes_2.readFeatures(json_EspaciosVerdesEspaciosVerdes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspaciosVerdesEspaciosVerdes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspaciosVerdesEspaciosVerdes_2.addFeatures(features_EspaciosVerdesEspaciosVerdes_2);
var lyr_EspaciosVerdesEspaciosVerdes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspaciosVerdesEspaciosVerdes_2, 
                style: style_EspaciosVerdesEspaciosVerdes_2,
                popuplayertitle: "EspaciosVerdes — Espacios Verdes",
                interactive: true,
                title: '<img src="styles/legend/EspaciosVerdesEspaciosVerdes_2.png" /> EspaciosVerdes — Espacios Verdes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_EspaciosVerdesEspaciosVerdes_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_EspaciosVerdesEspaciosVerdes_2];
lyr_EspaciosVerdesEspaciosVerdes_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'NUMERO': 'NUMERO', 'Descriptio': 'Descriptio', 'Ordenanza': 'Ordenanza', });
lyr_EspaciosVerdesEspaciosVerdes_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'NUMERO': 'Range', 'Descriptio': 'TextEdit', 'Ordenanza': 'TextEdit', });
lyr_EspaciosVerdesEspaciosVerdes_2.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'NUMERO': 'inline label - always visible', 'Descriptio': 'inline label - always visible', 'Ordenanza': 'inline label - always visible', });
lyr_EspaciosVerdesEspaciosVerdes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});