---
layout: posts
title: Google Mapで背景色とマーカーを設定する
---
Google Mapで背景色とマーカーを設定する

```
<script>
function initMap() {
    let position = {lat: 20, lng: 130};
    let mapTypeId = 'TypeId';
    let styles = [{
        'featureType': 'all',
        'elementType': 'geometry',
        'stylers': [
            {'hue': '#29B6F6'},
            {'saturation': 45},
            {'lightness': -5},
            {'visibility': 'simplified'}
        ]
    }];
    let map = new google.maps.Map(document.getElementById('map'), {
            'center': position,
            'zoom': 18,
            'mapTypeControl': false,
            'scrollwheel': false
        });
    let mapType = new google.maps.StyledMapType(styles, {'name': mapTypeId});
    map.mapTypes.set(mapTypeId, mapType);
    map.setMapTypeId(mapTypeId);
    let marker = new google.maps.Marker({
        'position': position,
        'map': map
    });
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=KEY&callback=initMap" async defer></script>
```
