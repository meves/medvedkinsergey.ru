import React, { useCallback } from 'react'
import { getClientMessages, selectPaginator } from '../../../client/store/adminPanelSlice'
import { useAppDispatch, useAppSelector } from '../../../client/store'
import { writeUrl } from '../../../lib/writeUrl'
import styles from './index.module.scss'


export const Paginator = () => {
    const {pageSize, totalCount, blockSize, currentPage} = useAppSelector(selectPaginator)
    
    const pagesCount = Math.ceil(totalCount / pageSize)
    const currentBlock = Math.ceil(currentPage / blockSize)
    const blockCount = Math.ceil(pagesCount / blockSize)
    // start and end pages of current block
    const getPageNumber = (label: 'start' | 'end', current: number, size: number): number => {
        switch (label) {
            case 'start':
                return (current - 1) * size + 1
            case 'end':
                return current * size
        }
    }
    const startPage = getPageNumber('start', currentBlock, blockSize)
    const endPage = getPageNumber('end', currentBlock, blockSize)
    const pagesArray = []
    for (let i = startPage; i <= endPage && i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    
    // get messages for current page
    const dispatch = useAppDispatch()

    const handleOnPageClick = useCallback((event: React.MouseEvent<HTMLSpanElement>) => {
        const currentPage = event.currentTarget.textContent
        writeUrl(String(currentPage), String(pageSize))
        dispatch(getClientMessages(Number(currentPage), pageSize))
    }, [dispatch, pageSize])

    // handle clicks on button 
    const handleButtonClick = useCallback((targetPage: number) => {
        writeUrl(String(targetPage), String(pageSize))
        dispatch(getClientMessages(targetPage, pageSize))
    }, [dispatch, pageSize])
    
    return (
        <div className={styles.paginator}>
            <button onClick={() => {
                if (currentBlock > 1) {
                    handleButtonClick(getPageNumber('end', 1, blockSize))
                }}
            }>start</button>
            <button onClick={() => {
                if (currentBlock > 1) {
                    handleButtonClick(getPageNumber('end', currentBlock - 1, blockSize))
                }}
            }>prev</button>
            {currentBlock > 1 ? '<<<' : ''}
            <div className={styles.pages}>
                {pagesArray.map(p => (
                    <span
                        onClick={handleOnPageClick} 
                        key={p}
                        className={`${styles.page} ${(p === currentPage) ? 'selected' : ''}`}
                    >
                        { p }
                    </span>
                ))}
            </div>
            {currentBlock < blockCount ? '>>>' : ''}
            <button onClick={() => {
                if (currentBlock < blockCount) {
                    handleButtonClick(getPageNumber('start', currentBlock + 1, blockSize ))
                }}
            }>next</button>
            <button onClick={() => {
                if (currentBlock < blockCount) { 
                    handleButtonClick(getPageNumber('start', blockCount, blockSize))
                }}
            }>last</button>
        </div>
    )
}