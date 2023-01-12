import React from 'react';
import './sortOptions.css';
import { renderHREF, getParamValue, pathName } from '../AscendUtility/utils';
import { useHistory } from 'react-router-dom';

const SortOptions = () => {
    const sortValue = getParamValue('sort');
    let itemsClass = 'sort-item';
    const itemsClassDesc =
        sortValue === '1' ? itemsClass : itemsClass + ' active';
    const itemsClassAsc =
        sortValue === '1' ? itemsClass + ' active' : itemsClass;
    let history = useHistory();
    let pageDesc = renderHREF('sort', 0, 0);
    let pageAsc = renderHREF('sort', 1, 0);
    let pathname = pathName();
    return (
        <div className="sortmenu">
            <button aria-label="sort by">SORT BY</button>
            <ul className="sort-options">
                <li className={itemsClassDesc}>
                    <a
                        onClick={() =>
                            history.push({
                                pathname: pathname,
                                search: pageDesc
                            })
                        }
                    >
                        Newest
                    </a>
                </li>
                <li className={itemsClassAsc}>
                    <a
                        onClick={() =>
                            history.push({
                                pathname: pathname,
                                search: pageAsc
                            })
                        }
                    >
                        Oldest
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SortOptions;
