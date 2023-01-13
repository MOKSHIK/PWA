import EMP_SEARCH from './empDetails.gql';
import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import { useLazyQuery } from '@apollo/client';
import { usePagination } from '@magento/peregrine/lib/hooks/usePagination';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { EMP_ADD } from './empAdd.gql';

export const useEmpDetails = (props = {}) => {
    const defaultPageSize = 5;
    const defaultPageNumber = 1;
    const [paginationValues, paginationApi] = usePagination();
    const [pageSize, setPagesize] = useState(defaultPageSize);
    const { currentPage, totalPages } = paginationValues;
    const { setCurrentPage, setTotalPages } = paginationApi;
    const operations = mergeOperations(EMP_SEARCH, props.operations);
    const { siteSearchQuery } = operations;
    const location = useLocation();

    const [runQuery, { called, data, loading, error }] = useLazyQuery(
        EMP_SEARCH,
        {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        }
    );

    useEffect(() => {
        runQuery();
    }, []);

    return {
        data: data
    };
};
