
     ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map ("map-canvas", {
                center: [56.099560, 47.262263],
                zoom: 17
            }); 
            
   

var myPlacemark = new ymaps.Placemark([56.099560, 47.262263], {
	hintContent: 'TEXT'
}, 
{
        preset: 'twirl#redDotIcon' 
    });


			// Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё РЅР° РєР°СЂС‚Сѓ
			myMap.geoObjects.add(myPlacemark);
        }
