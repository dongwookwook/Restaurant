
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
    title:'희래등',
    address_name:'인천 서구 탁옥로86번길 6-1',
    road_address_name:'심곡동 302-2',
    phone:'0507-1431-5801',
    review:'https://naver.me/GeW5CHIY',
    latlng: new kakao.maps.LatLng(37.54311684955919,126.67892166354578)
},
{
    title: '번개청룡각',
    address_name:'인천 서구 염곡로327번길 41',
    road_address_name:'신현동 131-13',
    phone:'032-573-0288',
    review:'https://naver.me/xdIBVbqF',
    latlng: new kakao.maps.LatLng(37.51716262937313,126.66781641172267)
},
{
    title: '길림성',
    address_name:'인천 서구 가정로308번길 4',
    road_address_name:'석남동 457-1',
    phone:'032-581-6551',
    review:'https://naver.me/GgeQYkAX',
    latlng: new kakao.maps.LatLng(37.51205276021517,126.67320034637176)
},
{
    title: '탕짜우',
    address_name:'인천 서구 검단로 795 1층 탕짜우',
    road_address_name:'불로동 319-10',
    phone:'032-568-3990',
    review:'https://naver.me/5gi4jbwk',
    latlng: new kakao.maps.LatLng(37.6160142978717,126.68701723821087)
},
{
    title: '만리성',
    address_name:'인천 서구 완정로34번길 53 현대아파트',
    road_address_name:'마전동 1004',
    phone:'032-581-6551',
    review:'https://naver.me/5wmgbb7A',
    latlng: new kakao.maps.LatLng(37.59762476665316,126.67421699892257)
},
{
    title: '복성원',
    address_name:'인천 서구 도요지로 221 에스엠빌딩',
    road_address_name:'검암동 662-13',
    phone:'0504-1400-1744',
    review:'https://naver.me/5L3oX26w',
    latlng: new kakao.maps.LatLng(37.55699527135455,126.67478781592516)
},
{
    title: '칭칭차이나',
    address_name:'인천 서구 호두산로58번길 4',
    road_address_name:'경서동 350-96',
    phone:'032-569-2580',
    review:'https://naver.me/FmgMtEN0',
    latlng: new kakao.maps.LatLng(37.546544243151416,126.64493651614801)
},
{
    title: '신신각',
    address_name:'인천 서구 서달로221번길 8-1',
    road_address_name:'가정동 556-4',
    phone:'032-571-2343',
    review:'https://naver.me/xyUSzDEu',
    latlng: new kakao.maps.LatLng(37.518576903485716,126.6801127661347)
},
{
    title: '이화원',
    address_name:'인천 서구 가정로 387 신현이편한세상하늘채',
    road_address_name:'신현동 302-1',
    phone:'032-582-4080',
    review:'https://naver.me/5HSj3p3C',
    latlng: new kakao.maps.LatLng(37.519436351771844,126.67283784141821)
},
{
    title: '아래향',
    address_name:'인천 서구 청라커낼로 252',
    road_address_name:'청라동 159-1',
    phone:'050-4111-3870',
    review:'https://naver.me/GazdC3bz',
    latlng: new kakao.maps.LatLng(37.530911199999714,126.64278579999986)
},
{
    title: '짬뽕타임 청라점',
    address_name:'인천 서구 경명대로 465',
    road_address_name:'경서동 249-1',
    phone:'032-566-3003',
    review:'https://naver.me/GUvtzN1L',
    latlng: new kakao.maps.LatLng(37.55289152621823,126.65985828758757)
},
{
    title: '불간짬뽕 청라점',
    address_name:'인천 서구 청라라임로 40 골드클래스 아파드 정문 맞은편 에이스부동산옆',
    road_address_name:'청라동 164-1',
    phone:'0507-1311-6573',
    review:'https://naver.me/xNdpwEau',
    latlng: new kakao.maps.LatLng(37.53091624064356,126.65304324971576)
},
{
    title: '2900황소반점',
    address_name:'인천 서구 가정로 322 108,109호',
    road_address_name:'가정동 525-1',
    phone:'0507-1334-8791',
    review:'https://naver.me/Ft8RyDDv',
    latlng: new kakao.maps.LatLng(37.513569638345295,126.67305347647608)
},
{
    title: '고구려짬뽕10101 신현점',
    address_name:'인천 서구 가정로 419',
    road_address_name:'신현동 259-8',
    phone:'032-575-8882',
    review:'https://naver.me/5Tv3uVwz',
    latlng: new kakao.maps.LatLng(37.52246533767266,126.67342643016052)
},
{
    title: '청도 양꼬치 숯불구이',
    address_name:'인천 서구 중봉대로612번길 10-8',
    road_address_name:'청라동 162-4',
    phone:'032-566-8377',
    review:'https://naver.me/G0fJlkXh',
    latlng: new kakao.maps.LatLng(37.533352907415185,126.65072391774477)
},
{
    title: '화련',
    address_name:'인천 서구 푸른로8번길 11',
    road_address_name:'청라동 105-23',
    phone:'032-561-9666',
    review:'https://naver.me/5xlnnIAB',
    latlng: new kakao.maps.LatLng(37.5244820183299,126.62896816417972)
},
{
    title: '진진',
    address_name:'인천 서구 봉화로 51 송화빌딩',
    road_address_name:'오류동 1717-12',
    phone:'032-567-8944',
    review:'https://naver.me/GQ4uKmIy',
    latlng: new kakao.maps.LatLng(37.59784110160069,126.63718755345036)
},
{
    title: '미소반점',
    address_name:'인천 서구 장고개로337번길 18-3 영프라자 2층 204호',
    road_address_name:'가좌동 30-132',
    phone:'0507-1372-2607',
    review:'https://naver.me/FFvLb6UA',
    latlng: new kakao.maps.LatLng(37.493317009799064,126.68435017828394)
},
{
    title: '만흥',
    address_name:'인천 서구 신석로 56',
    road_address_name:'석남동 162-2',
    phone:'032-574-5553',
    review:'https://naver.me/x35donAZ',
    latlng: new kakao.maps.LatLng(37.509991737039556,126.66819655374034)
},
{
    title: '황후',
    address_name:'인천 서구 청라에메랄드로41번길 28 1층 황후',
    road_address_name:'청라동 191-6',
    phone:'0507-1425-3383',
    review:'https://naver.me/5358Opql',
    latlng: new kakao.maps.LatLng(37.52925256441937,126.65597431865473)
},
{
    title: '착한쭝식 당하점',
    address_name:'인천 서구 청마로 177',
    road_address_name:'당하동 1092-11',
    phone:'032-568-1840',
    review:'https://naver.me/FLBI10Iw',
    latlng: new kakao.maps.LatLng(37.59301059911632,126.67643377163378)
},
{
    title: '착한쭝식 청라점',
    address_name:'인천 서구 중봉대로586번길 22 에이동 138호 (인천광역시 서구 청라동 164-1 에이동 138호)',
    road_address_name:'청라동 164-1 에이동 138호 (인천광역시 서구  164-1 에이동 138호)',
    phone:'0507-1332-6484',
    review:'https://naver.me/5Onclatw',
    latlng: new kakao.maps.LatLng(37.53154461373217,126.65103103132596)
},
{
    title: '이비가짬뽕 인천본점',
    address_name:'인천 서구 서곶로 322 이비가짬뽕 인천본점',
    road_address_name:'심곡동 278-9',
    phone:'032-566-7484',
    review:'https://naver.me/FslqpxGG',
    latlng: new kakao.maps.LatLng(37.54636311211721, 126.67726014319398)
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