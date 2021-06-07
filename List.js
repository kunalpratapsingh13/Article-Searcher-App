import React from 'react';

const List = ({results}) => {
    const renderedList = results.map((item)=>{
        return (
            <div className="ui segment">
                <h2>
                    <a 
                    href={"https://en.wikipedia.org?curid=" + item.pageid} 
                    className="header"
                    target ="_blank"
                    >{item.title}</a>
                </h2>
                <p dangerouslySetInnerHTML={{__html: item.snippet}}></p>
            </div>
        );
    });

    return renderedList;
}

export default List;