console.log('gtex.js loaded')

gtex={
    ui:function(div){
        console.log('gtex initiatized')
        gtex.div=div||document.getElementById('gtexDiv')
        if(gtex.div){
            console.log('gtexDiv found')
        }

    }
}

gtex.create_at=Date()

window.onload=gtex.ui

// let's make sure it can be imported in applications like https://observablehq.com/@episphere/gtex

if(typeof(define)!="undefined"){
    //define({gtex:gtex})
    define(gtex)
}

