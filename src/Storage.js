import React from 'react';


class Storage extends React.Component{
    constructor (storageName = 'gameScoreboard',initialValue = '[]'){
        this.storageName =storageName 
        if (!localStorage.getItem(storageName)){
            localStorage.setItem(storageName,initialValue)
        }
    }
    getData(){
        return JSONparse(localStorage.getItem(this.storageName))
    }
    update(data){
        localStorage.setItem(this.storageName,JSON.stringify(data))
    }
}

export default Storage