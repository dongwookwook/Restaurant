
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
    title:'어부횟집',
    address_name:'인천 서구 검단로 467 다섬프라자 2층',
    road_address_name:'왕길동 639-3',
    phone:'032-568-2922',
    review:'https://naver.me/xIh2mtO1',
    latlng: new kakao.maps.LatLng(37.601851599999975,126.6520604999993)
},
{
    title: '참조은복집',
    address_name:'인천 서구 서곶로315번길 23-1 참조은복집',
    road_address_name:'심곡동 243-2',
    phone:'0507-1333-7019',
    review:'https://naver.me/IgTNDi1v',
    latlng: new kakao.maps.LatLng(37.54568959999978,126.66990719999984)
},
{
    title: '삿뽀로 송림점',
    address_name:'인천 서구 백범로 884 203호',
    road_address_name:'가좌동 178-379',
    phone:'032-583-7776',
    review:'https://naver.me/x35ibU0U',
    latlng: new kakao.maps.LatLng(37.48582969999959,126.65611429999952)
}
]
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
})(marker, positions[i]);0
// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
function closeOverlay() {
overlay.setMap(null);     
}
function openOverlay(map,overlay){
overlay.setMap(map);
}
}