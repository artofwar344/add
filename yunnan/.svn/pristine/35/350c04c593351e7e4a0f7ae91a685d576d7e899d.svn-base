
const Gdmap = {
  initMap: (mapBox, onComplete, onError) => {
    var mapObj = new AMap.Map(mapBox, {
      zoom: 10,
      resizeEnable: true,

    });
    // return mapObj
    if(!onComplete || !onError){
      return
    }
    AMap.plugin(['AMap.Geolocation','AMap.ToolBar'], function () {
      //定位插件
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: false,        //显示定位按钮，默认：true
        buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 30),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: false,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: false      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      mapObj.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
      AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
      //在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      mapObj.addControl(new AMap.ToolBar(
        {
          position: 'RB',
          ruler:false,
          locate:true,
          liteStyle:false,
          autoPosition:false,
        }
      ));
    });
    return mapObj
  },
  //设置标记点
  setPoints(mapObj,markers,handle,context){

    //自定义标记dom
    mapObj.clearMap();  // 清除地图覆盖物
    markers.forEach((marker) => {
      var makerItem =  new AMap.Marker({
        map: mapObj,
        id: marker.ID,
        distance:marker.DISTANCE,
        title: marker.VENUE_NAME,
        content:'<div  class="custom-content-marker">' +
                '   <img class="mapIcon"  src="../../static/image-mapIcon/'+marker.VENUE_TYPE+'.png">' +
                '</div>',
        position: [marker.LON, marker.LAT],
        offset: new AMap.Pixel(-13, -30)
      });
      //给标记点添加点击事件
      makerItem.on('click',handle,context);
    });
    // 添加事件监听使地图根据标记点自适应
    mapObj.setFitView()
  },
  //改变地图中心坐标点, position 为数组坐标值
  setCenter(mapObj,position){
    mapObj.setCenter(position)
  },
  //在客户端中设置标记点
  openAppSetpoint(){
    var gaodeLoc = [121.43140199998, 31.219317000733];
    var marker = new AMap.Marker({
      position: gaodeLoc
    });
    marker.markOnAMAP({
      position: marker.getPosition(),
      name: '海埂大坝'
    });

  }
}
export default Gdmap
