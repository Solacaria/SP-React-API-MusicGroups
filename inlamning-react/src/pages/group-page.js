import React, {useState, useEffect} from 'react';
import "../style/style.css"
import { Outlet, useParams, useOutletContext, useNavigate } from "react-router-dom";
import { PaginatorList } from '../components/paginator-list';
import { ListViewer } from "../components/list-viewer";
import { DetailView } from "../components/detail-view";
import { ArrowCounterclockwise } from 'react-bootstrap-icons'
import musicService from "../services/music-group-service";


export function GroupPagePager() {

  const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);   
  
  return (
    <div>
      <Outlet context={service}/>
    </div>
  )
}
export function GroupPageList() {

  const service = useOutletContext();
  const navigate = useNavigate();
  const [pageData, setPageData] = useState({});
  const [searchFilter, setSearchFilter] = useState();
  const [totalGroups, setTotalGroups] = useState();

  let { pageNr } = useParams();
  pageNr ??= 0;

  //håller reda på sidonummer och vilka objekt som ska visas
  const [currentPage, setCurrentPage] = useState(pageNr);
  useEffect(() => {
     async function getApiData() {
      let data = await service.readMusicGroupsAsync(pageNr, false, searchFilter);
      setPageData(data);
      setTotalGroups(data.dbItemsCount);
     }
     getApiData();
  }, [service, pageNr, searchFilter]);

  //logik för hur många objekt som ska visas på varje sida
  const pageSize = 10;
  const maxNrPages = Math.ceil(pageData?.dbItemsCount/pageSize);

  //ritar om sidan med nya grupper, anpassad efter filtrering.
  const onPageChange = async (e) => {
    if (searchFilter !== "") {
      let newGroups = await service.readMusicGroupsAsync(e.currentPage, false, searchFilter);
      setPageData(newGroups);
    }
    else {
      let data = await service.readMusicGroupsAsync(e.currentPage);
      setPageData(data);
    }
  }

  //Går till detalj-vyn för den klickade gruppen.
  const onAlbumView = (e) => {
    const albumId = e.currentTarget.dataset.rowalbumid;
    navigate(`/groups/${albumId}/${currentPage}`);
  }

  //Hämtar sökordet ifrån sökfunktionen och sätter sökfiltret. Detta triggar useEffect som skriver om sidan.
  const onSave = async (e) => {
    setSearchFilter(e.searchFilter);
  }

  return (
    <div className="container">
      <p>Number of groups found {totalGroups}</p>
      <ListViewer groups={pageData?.pageItems} onSave={onSave} onClick={onAlbumView} total={pageData?.dbItemsCount}/>

      <PaginatorList   currentPage={currentPage} maxNrPages={maxNrPages}
        setCurrentPage={setCurrentPage} onPageChange={onPageChange}/>

    </div>
  )
}


export function GroupPageDetail() {
  const service = useOutletContext();
  const navigate = useNavigate();
  const {id, prevPage } = useParams();
  const [pageData, setPageData] = useState();


  useEffect(() => {
      async function readGroupApi() {
        const data = await service.readMusicGroupAsync(id, false);
        setPageData(data);
      } readGroupApi(id);
    }, [service, id]);

  //Återgår till list-vyn, kommer ihåg sidan man var på och återgår till den.
  const onUndo = (e) => {
    navigate(`/groups/${prevPage}/page`)
  }
  


  return (
    <div>
      <h2 className="text-center mb-4">
        Detailed view of {pageData?.name}
        <button className="btn btn-primary-outline" onClick={onUndo}>
          <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
        </button>
      </h2>
      <DetailView group={pageData} />
    </div>
  )
}

