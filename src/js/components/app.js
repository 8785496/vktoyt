import React from 'react'

import YPlayList from './youtobe'
import VKPlayList from './vk'

export default class App extends React.Component{
    render() {
        return (
            <div>
                <VKPlayList />
            </div>
        )
    }
}