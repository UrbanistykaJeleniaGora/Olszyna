var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.702000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_kierunkistudium_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_olszyna",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_kierunki",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'kierunki studium',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_kierunkistudium_1, 1]);
var lyr_przeznaczeniampzp_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_olszyna",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mpzp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'przeznaczenia mpzp',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_przeznaczeniampzp_2, 1]);
var format_dzialkiewidencyjne_3 = new ol.format.GeoJSON();
var features_dzialkiewidencyjne_3 = format_dzialkiewidencyjne_3.readFeatures(json_dzialkiewidencyjne_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dzialkiewidencyjne_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dzialkiewidencyjne_3.addFeatures(features_dzialkiewidencyjne_3);
var lyr_dzialkiewidencyjne_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dzialkiewidencyjne_3, 
                style: style_dzialkiewidencyjne_3,
                popuplayertitle: 'dzialki ewidencyjne',
                interactive: true,
                title: '<img src="styles/legend/dzialkiewidencyjne_3.png" /> dzialki ewidencyjne'
            });
var format_wnioski_4 = new ol.format.GeoJSON();
var features_wnioski_4 = format_wnioski_4.readFeatures(json_wnioski_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wnioski_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_4.addFeatures(features_wnioski_4);
var lyr_wnioski_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wnioski_4, 
                style: style_wnioski_4,
                popuplayertitle: 'wnioski',
                interactive: true,
                title: '<img src="styles/legend/wnioski_4.png" /> wnioski'
            });
var format_granicagminy_5 = new ol.format.GeoJSON();
var features_granicagminy_5 = format_granicagminy_5.readFeatures(json_granicagminy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granicagminy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granicagminy_5.addFeatures(features_granicagminy_5);
var lyr_granicagminy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granicagminy_5, 
                style: style_granicagminy_5,
                popuplayertitle: 'granica gminy',
                interactive: false,
                title: '<img src="styles/legend/granicagminy_5.png" /> granica gminy'
            });

lyr_OSMStandard_0.setVisible(true);lyr_kierunkistudium_1.setVisible(true);lyr_przeznaczeniampzp_2.setVisible(true);lyr_dzialkiewidencyjne_3.setVisible(true);lyr_wnioski_4.setVisible(true);lyr_granicagminy_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kierunkistudium_1,lyr_przeznaczeniampzp_2,lyr_dzialkiewidencyjne_3,lyr_wnioski_4,lyr_granicagminy_5];
lyr_dzialkiewidencyjne_3.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', 'scalone': 'scalone', });
lyr_wnioski_4.set('fieldAliases', {'NUMER_DZIA': 'NUMER_DZIA', 'NAZWA_OBRE': 'NAZWA_OBRE', 'scalone': 'scalone', '1': '1', '2': '2', '3': '3', '3a': '3a', 'Scalone_2': 'Scalone_2', '4.3': '4.3', '5': '5', '6': '6', '7': '7', 'nr_wniosku': 'nr_wniosku', 'wniosek': 'wniosek', });
lyr_granicagminy_5.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', 'pole': 'pole', 'pole1': 'pole1', });
lyr_dzialkiewidencyjne_3.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', 'scalone': '', });
lyr_wnioski_4.set('fieldImages', {'NUMER_DZIA': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'scalone': 'TextEdit', '1': 'TextEdit', '2': 'TextEdit', '3': 'TextEdit', '3a': 'TextEdit', 'Scalone_2': 'TextEdit', '4.3': 'TextEdit', '5': 'TextEdit', '6': 'TextEdit', '7': 'TextEdit', 'nr_wniosku': 'Range', 'wniosek': 'TextEdit', });
lyr_granicagminy_5.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', 'pole': '', 'pole1': '', });
lyr_dzialkiewidencyjne_3.set('fieldLabels', {'ID_DZIALKI': 'hidden field', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'hidden field', 'NUMER_JEDN': 'hidden field', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'hidden field', 'POLE_EWIDE': 'hidden field', 'KLASOUZYTK': 'no label', 'GRUPA_REJE': 'hidden field', 'DATA': 'hidden field', 'scalone': 'hidden field', });
lyr_wnioski_4.set('fieldLabels', {'NUMER_DZIA': 'hidden field', 'NAZWA_OBRE': 'hidden field', 'scalone': 'hidden field', '1': 'hidden field', '2': 'hidden field', '3': 'hidden field', '3a': 'hidden field', 'Scalone_2': 'hidden field', '4.3': 'hidden field', '5': 'hidden field', '6': 'hidden field', '7': 'hidden field', 'nr_wniosku': 'header label - always visible', 'wniosek': 'header label - always visible', });
lyr_granicagminy_5.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'no label', 'NUMER_JEDN': 'no label', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'no label', 'POLE_EWIDE': 'no label', 'KLASOUZYTK': 'no label', 'GRUPA_REJE': 'no label', 'DATA': 'no label', 'pole': 'no label', 'pole1': 'no label', });
lyr_granicagminy_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});