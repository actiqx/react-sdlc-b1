import React from 'react';

const PeopleList = (props) => {
    const {plist}= props;
    return (
        <div className="justify-content-center">
             <table class="table">
             <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Height</th>
      <th scope="col">Mass</th>
      <th scope="col">Color</th>
      <th>Action</th>

    </tr>
  </thead>
<tbody>
    

            {props.plist.map((ppl,key)=>{
                return(
                   
                        <tr key={key}>
                         <td>{key +1}</td>   
                        <td >{ppl.name}</td>   
                        <td >{ppl.height}</td>
                        <td >{ppl.mass}</td>
                        <td >{ppl.hair_color}</td>
                        <td><span className="btn btn-link">
                            edit
                        </span> <span className="btn btn-link">delete</span></td>
                        </tr>
                   
                    // <div key={key}>{ppl.name}</div>
                )
            })}
            </tbody>
             </table>
        </div>
    );
};

export default PeopleList;