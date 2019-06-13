
export default {
    AddNum: function (num,toPath) {
        console.log(toPath);
        // toPath('/card')
        num++
        if (num >= 10) {
            return 10
        }
        console.log(num)
        return num
    },
    SubNum: function (num) {
        num--
        if (num <= 0) {
            console.log(num)
            return 0
        }
        return num
    }
}
