// import React from 'react';
// import './showFilter.css';
// import { getParamValue } from '../AscendUtility/utils';
// import { useHistory } from 'react-router-dom';
// import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';
// import { post } from 'jquery';

// const ShowFilter = () => {
//     const selectedShowValueMappedState = {
//         10: 10,
//         20: 20,
//         30: 30
//     };
//     let history = useHistory();
//     const pageNumberValue = getSearchParam('page', location);
//     const postLimit = getParamValue('post_limit')
//         ? getParamValue('post_limit')
//         : 10;
//     let page = pageNumberValue ? '?page=' + pageNumberValue : '?page=1';
//     return (
//         <div className="showmenu">
//             <button aria-label="show">SHOW</button>
//             <ul className="show-options">
//                 <li
//                     onClick={() =>
//                         history.push({
//                             pathname: '/blog',
//                             search: page + postLimit
//                         })
//                     }
//                 >
//                     10
//                 </li>
//                 <li
//                     onClick={() =>
//                         history.push({
//                             pathname: '/blog',
//                             search: page + postLimit
//                         })
//                     }
//                 >
//                     20
//                 </li>
//                 <li
//                     onClick={() =>
//                         history.push({
//                             pathname: '/blog',
//                             search: page + '&post_limit=30'
//                         })
//                     }
//                 >
//                     30
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default ShowFilter;

// import { usePagination } from '@magento/peregrine/lib/hooks/usePagination.js';
// import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';
// import React, { useState, useCallback } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
// import './showFilter.css';

// const ShowFilter = () => {
//     let location = useLocation();
//     let history = useHistory();
//     const pageLimit = getSearchParam('post_limit', location);
//     const pageNumberValue = getSearchParam('page', location);
//     const pageNumber = pageLimit ? pageLimit : 10;
//     const [limitOpen, setLimitOpen] = useState(false);
//     const handleLimitOpen = val => {
//         setLimitOpen(!limitOpen);
//     };
//     // const [paginationValues, paginationApi] = usePagination(
//     //     '',
//     //     'post_limit',
//     //     10
//     // );
//     // const { currentPage } = paginationValues;
//     // const { setCurrentPage } = paginationApi;
//     // console.log(currentPage);
//     let page = pageNumberValue ? '?page=' + pageNumberValue : '?page=1';
//     // let postLimit = pageLimit ? '&post_limit=' + pageLimit : '&post_limit=10';
//     return (
//         <div className="showmenu">
//             <button onClick={handleLimitOpen}>SHOW</button>
//             {limitOpen ? (
//                 <ul className="show-options">
//                     <li
//                         onClick={() =>
//                             history.push({
//                                 pathname: '/blog',
//                                 search: page + '&post_limit=10'
//                             })
//                         }
//                     >
//                         10
//                     </li>
//                     <li
//                         onClick={() =>
//                             history.push({
//                                 pathname: '/blog',
//                                 search: page + '&post_limit=20'
//                             })
//                         }
//                     >
//                         20
//                     </li>
//                     <li
//                         onClick={() =>
//                             history.push({
//                                 pathname: '/blog',
//                                 search: page + '&post_limit=30'
//                             })
//                         }
//                     >
//                         30
//                     </li>
//                 </ul>
//             ) : null}
//         </div>
//     );
// };

// export default ShowFilter;

import './showFilter.css';
import {
    getParamValue,
    renderCOMP,
    renderHREF,
    pathName
} from '../AscendUtility/utils';
import React from 'react';
import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';
import { useHistory, useLocation } from 'react-router-dom';
const ShowFilter = () => {
    const selectedShowValueMappedState = {
        10: 10,
        20: 20,
        30: 30
    };
    let history = useHistory();
    let itemsClass = 'show-item';
    // const pageNumberValue = getSearchParam('page', location);
    // const sortValue = getSearchParam('sort', location);
    const itemClassChecked = itemsClass + ' active';
    const itemClassUnchecked = itemsClass;
    const postLimit = getParamValue('post_limit')
        ? getParamValue('post_limit')
        : 10;
    // const { pathname } = useLocation();
    // console.log('pathname', pathname);

    return (
        <div className="showmenu">
            <button aria-label="show">SHOW</button>
            <ul className="show-options">
                {Object.keys(selectedShowValueMappedState).map(element => {
                    // let page2 = renderHREF('post_limit', element, 0);
                    let url = renderCOMP('post_limit', element, 0);
                    let pathname = pathName();
                    return (
                        <li
                            key={element}
                            className={
                                element == postLimit
                                    ? itemClassChecked
                                    : itemClassUnchecked
                            }
                        >
                            <a
                                onClick={() =>
                                    history.push({
                                        pathname: pathname,
                                        search: url
                                    })
                                }
                            >
                                {element}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default ShowFilter;
