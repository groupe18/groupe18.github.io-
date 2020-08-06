var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_sites_touristiques_0 = new ol.format.GeoJSON();
var features_sites_touristiques_0 = format_sites_touristiques_0.readFeatures(json_sites_touristiques_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sites_touristiques_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sites_touristiques_0.addFeatures(features_sites_touristiques_0);var lyr_sites_touristiques_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sites_touristiques_0, 
                style: style_sites_touristiques_0,
                title: '<img src="styles/legend/sites_touristiques_0.png" /> sites_touristiques'
            });var format_hotels_1 = new ol.format.GeoJSON();
var features_hotels_1 = format_hotels_1.readFeatures(json_hotels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hotels_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_hotels_1.addFeatures(features_hotels_1);var lyr_hotels_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hotels_1, 
                style: style_hotels_1,
                title: '<img src="styles/legend/hotels_1.png" /> hotels'
            });var format_AGENCEDETRANSPORT_2 = new ol.format.GeoJSON();
var features_AGENCEDETRANSPORT_2 = format_AGENCEDETRANSPORT_2.readFeatures(json_AGENCEDETRANSPORT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGENCEDETRANSPORT_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AGENCEDETRANSPORT_2.addFeatures(features_AGENCEDETRANSPORT_2);var lyr_AGENCEDETRANSPORT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGENCEDETRANSPORT_2, 
                style: style_AGENCEDETRANSPORT_2,
                title: '<img src="styles/legend/AGENCEDETRANSPORT_2.png" /> AGENCE DE TRANSPORT'
            });var format_restaurant_3 = new ol.format.GeoJSON();
var features_restaurant_3 = format_restaurant_3.readFeatures(json_restaurant_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_restaurant_3.addFeatures(features_restaurant_3);var lyr_restaurant_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_restaurant_3, 
                style: style_restaurant_3,
                title: '<img src="styles/legend/restaurant_3.png" /> restaurant'
            });

lyr_sites_touristiques_0.setVisible(true);lyr_hotels_1.setVisible(true);lyr_AGENCEDETRANSPORT_2.setVisible(true);lyr_restaurant_3.setVisible(true);
var layersList = [baseLayer,lyr_sites_touristiques_0,lyr_hotels_1,lyr_AGENCEDETRANSPORT_2,lyr_restaurant_3];
lyr_sites_touristiques_0.set('fieldAliases', {'id_sites': 'id_sites', 'nom_sites': 'nom_sites', 'types_sites': 'types_sites', 'localisation_sites': 'localisation_sites', 'X': 'X', 'Y': 'Y', 'id_arrondissement': 'id_arrondissement', });
lyr_hotels_1.set('fieldAliases', {'id_Hôtel': 'id_Hôtel', 'nom_Hôtel': 'nom_Hôtel', 'localisation': 'localisation', 'Capacité (CHBRES)': 'Capacité (CHBRES)', 'restaurant': 'restaurant', 'Catégorie': 'Catégorie', 'x': 'x', 'y': 'y', 'id_arrondissement': 'id_arrondissement', });
lyr_AGENCEDETRANSPORT_2.set('fieldAliases', {'id_agence': 'id_agence', 'nom_agence': 'nom_agence', 'localisation_agence': 'localisation_agence', 'X': 'X', 'Y': 'Y', });
lyr_restaurant_3.set('fieldAliases', {'id_restaurant': 'id_restaurant', 'nom_restaurant': 'nom_restaurant', 'localisation_restaurant': 'localisation_restaurant', 'x': 'x', 'y': 'y', });
lyr_sites_touristiques_0.set('fieldImages', {'id_sites': 'TextEdit', 'nom_sites': 'TextEdit', 'types_sites': 'TextEdit', 'localisation_sites': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'id_arrondissement': 'TextEdit', });
lyr_hotels_1.set('fieldImages', {'id_Hôtel': 'TextEdit', 'nom_Hôtel': 'TextEdit', 'localisation': 'TextEdit', 'Capacité (CHBRES)': 'TextEdit', 'restaurant': 'TextEdit', 'Catégorie': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'id_arrondissement': 'TextEdit', });
lyr_AGENCEDETRANSPORT_2.set('fieldImages', {'id_agence': 'TextEdit', 'nom_agence': 'TextEdit', 'localisation_agence': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_restaurant_3.set('fieldImages', {'id_restaurant': 'TextEdit', 'nom_restaurant': 'TextEdit', 'localisation_restaurant': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_sites_touristiques_0.set('fieldLabels', {'id_sites': 'inline label', 'nom_sites': 'inline label', 'types_sites': 'inline label', 'localisation_sites': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'id_arrondissement': 'inline label', });
lyr_hotels_1.set('fieldLabels', {'id_Hôtel': 'inline label', 'nom_Hôtel': 'inline label', 'localisation': 'inline label', 'Capacité (CHBRES)': 'inline label', 'restaurant': 'inline label', 'Catégorie': 'inline label', 'x': 'inline label', 'y': 'inline label', 'id_arrondissement': 'inline label', });
lyr_AGENCEDETRANSPORT_2.set('fieldLabels', {'id_agence': 'inline label', 'nom_agence': 'inline label', 'localisation_agence': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_restaurant_3.set('fieldLabels', {'id_restaurant': 'inline label', 'nom_restaurant': 'inline label', 'localisation_restaurant': 'inline label', 'x': 'inline label', 'y': 'inline label', });
lyr_restaurant_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});