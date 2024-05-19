import React from 'react'

export function DetailView(props) {
  const id = props.group;
  console.log("nisse");

  return (
    <div className="container">
      <div>
      <div className="row g-3 my-2">
        <div className="col-sm-6">
          <label htmlFor="grpName" className="form-label">Group name</label>
          <input type="text" className="form-control" id="grpName" value={id?.name}/>
        </div>
        <div className="col-sm-6">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input type="text" className="form-control" id="genre" value={id?.genre}/>
        </div>
        <div className="col-sm-6">
          <label htmlFor="estYear" className="form-label">Established year</label>
          <input type="text" className="form-control" id="estYear" value={id?.establishedYear}/>
        </div>
      </div>
     
     <div className="row g-1">
      <h1 className="pb-2">Artists</h1>
      <div className="col-md-12 themed-grid-head-col">Name</div>
      {id?.artists?.map((row) => (
        <div className="row mb-2 text-center">{row.firstName} {row.lastName}</div>
      ))}
     </div>

     <div className="row g-1">
      <h1 className="pb-2">Albums</h1>
      <div className="col-md-10 justify-content-center themed-grid-head-col">
        <div className="col-md-10 themed-grid-head-col">Name</div>
        <div className="col-md-2 themed-grid-head-col">Year</div>
      </div>
      {id?.albums?.map((row) => (
        <div className="row mb-2 text-center">
          <div className="col-md-10 themed-grid-col">{row.name}</div>
          <div className="col-md-2 themed-grid-col">{row.releaseYear} </div>
       </div>
      ))}
     </div>
     </div>
    </div>
  )
}
