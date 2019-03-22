export default {
    /*  时间戳转换 */
    timeEnd(data,parms) {
        console.log(parms.d,parms.hh,'ssssssssssssssssssssssssssssssss');
        console.log(data,'这是什么数据');
        var time_start = new Date().getTime(); //设定当前时间
        var timer = null
        var farTime = Math.floor(data);
        console.log(farTime,'fartiemdsmfsamdfdsf');
        var lastTime = farTime - time_start;

        if (lastTime > 0) {
            parms.d = Math.floor((lastTime / 1000 / 3600) / 24);
            console.log(parms.d,'函数1');
            parms.hh = Math.floor((lastTime / 1000 / 3600) % 24);
            parms.m = Math.floor((lastTime / 1000 / 60) % 60);
            parms.s = Math.floor(lastTime / 1000 % 60);
        } else {
            parms.d = 0;
            parms.hh = "00";
            parms.m = "00";
            parms.s = "00";
            clearInterval(timer);
        }
        /*开启倒计时功能*/
        // clearInterval(timer);
        // timer = setInterval(this.timeEnd,1000)
    },

}
