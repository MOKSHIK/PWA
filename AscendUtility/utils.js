import { useLocation, useHistory } from 'react-router-dom';
import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';
/**
 * Prepare filter url
 */
export function getQueryParams() {
    const location = useLocation();
    const { search } = location;
    return {
        queryParams: new URLSearchParams(search),
        location: location
    };
}

export function renderHREF(parameter, value, includePath = 1) {
    let params = getQueryParams();
    let queryParams = params['queryParams'];
    let location = params['location'];
    queryParams.set(parameter, value);
    const destination = { search: queryParams.toString() };
    let url = includePath
        ? location.pathname + '?' + destination.search
        : destination.search;
    return url;
}

export function getParamValue(parameter) {
    let val;
    let params = getQueryParams();
    let queryParams = params['queryParams'];
    val = queryParams.get(parameter);
    return val;
}

export function renderCOMP(parameter, value) {
    let params = getQueryParams();
    let queryParams = params['queryParams'];
    let location = params['location'];
    const pageNumberValue = getSearchParam('page', location);
    const sortValue = getSearchParam('sort', location);
    let page = pageNumberValue ? '?page=' + pageNumberValue : '?page=1';
    // let sort = sortValue ? '&sort=' + sortValue : '';
    queryParams.set(parameter, value);
    const destination = { search: queryParams.toString() };
    let url = destination.search;
    return url;
}

export function pathName() {
    const { pathname } = useLocation();
    return pathname;
}
// export function history(parameter, value) {
//     let history = useHistory();
//     let params = getQueryParams();
//     let queryParams = params['queryParams'];
//     let location = params['location'];
//     let name = location.pathname;
//     queryParams.set(parameter, value);
//     const destination = { search: queryParams.toString() };
//     let url2 = history.push({
//         pathname: name + '?',
//         search: destination.search
//     });
//     return url2;
// }
// export function renderCOMP(parameter, value) {
//     let link = history(parameter, value);
//     let url = link;
//     return url;
// }
