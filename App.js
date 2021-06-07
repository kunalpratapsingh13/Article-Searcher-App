import React from 'react';
import Search from './Components/Search';

class App extends React.Component{
    render(){
        return(
            <div className = "ui grid container center aligned">
                <div className = "column eight wide">
                <Search />
                </div>
                
            </div>
        );
    }
}

export default App;