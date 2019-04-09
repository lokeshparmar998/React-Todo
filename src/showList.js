import React from 'react'
const ShowList = ({Showlist,deleteList}) =>{
        const details = Showlist.map(show =>{
            return(
                <div className="showList">
                <a href="" onClick={()=>{deleteList(show.id)}}>{show.name}</a>
                <div>{show.dueDate}</div>
            </div>
            )
        })
        return(
            <div>

                {details}

            </div>
        )

}
export default ShowList;