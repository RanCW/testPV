class WatcherPagePV {
    constructor(){
        this.name='hahaha'
    }
    init(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("这里是我的统计过的东西哦")
            },1000)
        })

    }
}

export default WatcherPagePV