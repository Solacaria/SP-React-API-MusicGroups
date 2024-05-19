import React, { useEffect, useState } from 'react'
import { FormSearch } from './form-search';
import { useParams } from 'react-router-dom';
import musicService from "../services/music-group-service";

export function ListViewer(props) {
    const {search} = useParams();
    const [groups, setGroups] = useState(props.groups || []);
    
    useEffect(() => {
      if (props.groups !== undefined ) {
        setGroups(props.groups);
      }
    }, [props.groups])

    //Skickar sökordet ett steg högre.
    const onSave = (e) => {
      props.onSave(e);
     }

  return (
    <div className="container">
    <FormSearch searchFilter={search} onSave={onSave}/>
      <div className="row row-cols-1 row-cols-xlg-4 justify-content-center g-4 py-5">
        <div className="col-md-2 col-md-5">
          <div className="row mb-2 text-center">
            <div className="mb-4 col-md-12 themed-grid-head-col container border-bottom">Gruppernas namn</div>
            </div>
          </div>
        </div>
        {groups?.map((row, idx) => (
          <div className="bg-info row mb-1 justify-content-md-center" key={idx} data-rowalbumid={row.musicGroupId} onClick={props.onClick}>
            <div className="col-md-3 my-2 md text-center justify-content-md-center ">{row.name}</div>
          </div>
        ))}
    </div>
  )
}
