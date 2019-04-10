import React from 'react'
const ShowList = ({Showlist,DeleteList}) =>{

        const details = Showlist.map(show =>{
            if(Showlist.length>0){
                return(
                    <div className="showList">
                        <span onClick={()=> {DeleteList(show.id)}} className="anchore">{show.name}</span>
                    </div>
                )
            }
            else{
                return(
                    <h1>Nothing is here?</h1>
                )
            }
         
        })
        return(
            <div>

                {details}

            </div>
        )

}
export default ShowList;