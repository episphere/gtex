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

gtex.created_at=Date()

gtex.getSample= async function (q){ // get samples with q atributes
    q=q||''
    if(typeof(q)=='object'){
        let qstr=''
        Object.keys(q).forEach(k=>{
            qstr+=`${k}=${q[k]}&`
        })
        q=qstr.slice(0,-1)
    }
    return await (await fetch('https://gtexportal.org/rest/v1/biobank/sample?format=json&'+q)).json()
}


window.onload=gtex.ui

// let's make sure it can be imported in applications like https://observablehq.com/@episphere/gtex

if(typeof(define)!="undefined"){
    //define({gtex:gtex})
    define(gtex)
}

