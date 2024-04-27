
var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
    center: new kakao.maps.LatLng(37.55467635939195, 126.67816588382323), // 지도의 중심좌표
    level: 8 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
var Overlayar = []
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title:'강선생의냉면막국수',
        address_name:'인천 서구 담지로86번길 5-41',
        road_address_name:'청라동 133-12',
        phone:'032-576-3939',
        review:'https://naver.me/5Amf0qoT',
        latlng: new kakao.maps.LatLng(37.53786950370686,126.6621487273967),
    },
    {
        title: '석남동함흥냉면',
        address_name:'인천 서구 석남로 87',
        road_address_name:'석남동 582-18',
        phone:'032-583-8445',
        review:'https://naver.me/FCb4klHU',
        latlng: new kakao.maps.LatLng(37.50104475820689,126.6714072123511)
    },
    {
        title: '경복궁 가좌점',
        address_name:'인천 서구 원적로 132',
        road_address_name:'가좌동 75-22',
        phone:'032-583-7767',
        review:'https://naver.me/FU394lJP',
        latlng: new kakao.maps.LatLng(37.49691301816001,126.685402561097)
    },
    {
        title: '경복궁 송림점',
        address_name:'인천 서구 백범로 884 201호',
        road_address_name:'가좌동 178-379',
        phone:'032-574-7767',
        review:'https://naver.me/G14F9d95',
        latlng: new kakao.maps.LatLng(37.486319707516934,126.66027341435647)
    },
    {
        title: '김생곤의 한우생각',
        address_name:'인천 서구 원창로64번길 16-8',
        road_address_name:'원창동 152-11',
        phone:'032-565-8444',
        review:'https://naver.me/GfaMTMH6',
        latlng: new kakao.maps.LatLng(37.51808135736991,126.65390807299087)
    },
    {
        title: '숙성명작', 
        address_name:'인천 서구 담지로8번길 14',
        road_address_name:'청라동 171-12',
        phone:'0507-1402-5670',
        review:'https://naver.me/G5rQQywV',
        latlng: new kakao.maps.LatLng(37.53073407642761,126.6610540855324)
    },
    {
        title: '등촌샤브칼국수',
        address_name:'인천 서구 탁옥로 69',
        road_address_name:'심곡동 280-3',
        phone:'032-565-3334',
        review:'https://naver.me/FiEUUrys',
        latlng: new kakao.maps.LatLng(37.544085706818194,126.67737406443544)
    },
    {
        title: '촌장골 서구청점',
        address_name:'인천 서구 서곶로 296 촌장골',
        road_address_name:'심곡동 280-2',
        phone:'032-562-4343',
        review:'https://naver.me/FPseBbAC',
        latlng: new kakao.maps.LatLng(37.544463836056295,126.67726833112435)
    },
    {
        title: '권오길손국수 본점',
        address_name:'인천 서구 검단로 789',
        road_address_name:'불로동 779-4',
        phone:'032-564-7541',
        review:'https://naver.me/FZJWfqQM',
        latlng: new kakao.maps.LatLng(37.6155808921297,126.68666567113722)
    },
    {
        title: '청수한방횡계백숙',
        address_name:'인천 서구 서곶로255번길 7 심곡마을회관 1층',
        road_address_name:'심곡동 261-2',
        phone:'032-567-2446',
        review:'https://naver.me/5bXus7UG',
        latlng: new kakao.maps.LatLng(37.540524017455226,126.67571026094788)
    },
    {
        title: '섬진강',
        address_name:'인천 서구 탁옥로33번길 22',
        road_address_name:'심곡동 240-15',
        phone:'032-566-6121',
        review:'https://naver.me/F4NdMFGM',
        latlng: new kakao.maps.LatLng(37.546382166151034,126.6737023363949)
    },
    {
        title: '교동찹쌀순대',
        address_name:'인천 서구 심곡로55번길 5',
        road_address_name:'심곡동 254-10',
        phone:'032-563-3838',
        review:'https://naver.me/FuVtpYMk',
        latlng: new kakao.maps.LatLng(37.54277686591927,126.67584081378521)
    },
    {
        title: '굴세상 석남점',
        address_name:'인천 서구 새오개로 36',
        road_address_name:'석남동 181-10',
        phone:'032-584-8292',
        review:'https://naver.me/5EQRkQUa',
        latlng: new kakao.maps.LatLng(37.51349411586963,126.66538950707319)
    },
    {
        title: '촌장골 당하점',
        address_name:'인천 서구 서곶로 850 촌장골',
        road_address_name:'당하동 1092-21',
        phone:'032-569-4112',
        review:'https://naver.me/xqfo73H2',
        latlng: new kakao.maps.LatLng(37.59329664851802,126.67429927649802)
    },
    {
        title: '채선당 플러스 서구청점',
        address_name:'인천 서구 서곶로 277 2층',
        road_address_name:'심곡동 248-6',
        phone:'0507-1415-7577',
        review:'https://naver.me/56IDR0p5',
        latlng: new kakao.maps.LatLng(37.542631734489674,126.67680098395937)
    },
    {
        title: '한라담 제주숯불구이',
        address_name:'인천 서구 경명대로 401',
        road_address_name:'경서동 346-2',
        phone:'032-565-0092',
        review:'https://naver.me/5IFs18ez',
        latlng: new kakao.maps.LatLng(37.55329587594891,126.65267244514948)
    },
    {
        title: '두리문가든',
        address_name:'인천 서구 가정로 221',
        road_address_name:'석남동 537',
        phone:'032-574-2474',
        review:'https://naver.me/G6D4EMHe',
        latlng: new kakao.maps.LatLng(37.50466467140282,126.67194325682223)
    },
    {
        title: '종가집 본점',
        address_name:'인천 서구 검단로 505 이지화인프라자 종가집 본점',
        road_address_name:'마전동 932-1',
        phone:'0507-1323-0621',
        review:'https://naver.me/5GyhMhog',
        latlng: new kakao.maps.LatLng(37.60342009586281,126.6602217624649)
    },
    {
        title: '미가원',
        address_name:'인천 서구 서곶로 872',
        road_address_name:'마전동 1056-1',
        phone:'032-564-3291',
        review:'https://naver.me/G8UfgRRB',
        latlng: new kakao.maps.LatLng(37.59495286505213,126.67502580584392)
    },
    {
        title: '육대장',
        address_name:'인천 서구 서곶로301번길 16 태영프라자',
        road_address_name:'심곡동 245-6',
        phone:'0507-1436-3014',
        review:'https://naver.me/xYQ41wPN',
        latlng: new kakao.maps.LatLng(37.544995188895136,126.67521110780396)
    }
];
var placeOverlay = new kakao.maps.CustomOverlay({zIndex:1}), 
    contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다 
    markers = []
placeOverlay.setContent(contentNode);  
contentNode.className = 'placeinfo_wrap';

// 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
// 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다 
function displayPlaceInfo(positions) {
    var content = '<div class="placeinfo">' +
    '   <a class="title" href="' + positions.review + '" target="_blank" title="' + positions.title + '">' + positions.title + '</a>';   

if (positions.address_name) {
content += '    <span title="' + positions.address_name + '">' + positions.address_name + '</span>' +
    '  <span class="jibun" title="' + positions.roade_address_name + '">(지번 : ' + positions.road_address_name + ')</span>';
}  else {
content += '    <span title="' + positions.address_name + '">' + positions.address_name + '</span>';
}                

content += '    <span class="tel">' + positions.phone + '</span>' + 
'</div>' + 
'<div class="after"></div>';


contentNode.innerHTML = content;
placeOverlay.setPosition(positions.latlng);
placeOverlay.setMap(map);  
}
for (var i=0;i<positions.length;i++){    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        clickable: true
    });
    (function(marker, positions) {
        kakao.maps.event.addListener(marker, 'click', function() {
            displayPlaceInfo(positions);
        });
    })(marker, positions[i]);
    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
function closeOverlay() {
    overlay.setMap(null);     
}
function openOverlay(map,overlay){
    overlay.setMap(map);
}
}