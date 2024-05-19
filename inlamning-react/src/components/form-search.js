import React, {useState} from 'react'

export function FormSearch(props) {
    const [searchFilter, setSearchFilter] = useState(props.searchFilter || "");

    const handleChange = (e) => {
        const id = e.target.id;
        const val = e.target.value;
        let s = searchFilter;
     
        switch (id) {
          case 'search':
            s = val;
            break;
          default:
            return;
        }
        setSearchFilter(s);
      }

      //Sätter sökordet i eventet, och skickar den ett steg högre upp.
    const onSave = (e) => {
        e.searchFilter = searchFilter;
        props.onSave(e);
      }
  
  return (
    <div className="row mb-1 text-center">
    <div className="container px-4 py-4 col-md-8" id="edit-item">
      <div className="row">
        <div className="col-sm-6"> 
          <form className="d-flex">
            <div className="row g-3 align-items-center">
              <div className="col">
                <label htmlFor="name" className="form-label">Search</label>
                <input type="text" className="form-control" id="search" value={searchFilter} onChange={handleChange} />
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-6"> 
          <button className="btn btn-primary" onClick={onSave}>Search</button>
        </div>
      </div>
    </div>
  </div>
  
  )
}


