import CommentItem from './CommentItem';import {useGetCommentsQuery} from '../../../redux/api/apiSlice';import {forwardRef, useState, useEffect} from 'react';const CommentsSection = forwardRef((props, ref) => {  const [currentPage, setCurrentPage] = useState(1);  const [sortOrder, setSortOrder] = useState('desc');  const [hasNextPage, setHasNextPage] = useState(true);  const {data: comments, isLoading: isCommentsQueryLoading, isError: isCommentsQueryError} =    useGetCommentsQuery({page: currentPage, sortOrder});  const generatePagination = (currentPage, hasNextPage) => {    const pages = [];    if (currentPage > 2) {      pages.push(1);      pages.push('...');    }    if (currentPage > 1) {      pages.push(currentPage - 1);    }    pages.push(currentPage);    if (hasNextPage) {      pages.push(currentPage + 1);      pages.push('...');    }    return pages;  };  const handlePageChange = (page) => {    setCurrentPage(page);    ref.current.scrollIntoView({ behavior: 'smooth' });  };  useEffect(() => {    if (comments?.length < 10) {      setHasNextPage(false);    } else {      setHasNextPage(true);    }  }, [comments]);  const pagesToRender = generatePagination(currentPage, hasNextPage);  if (isCommentsQueryLoading) {    return <div className="bg-background-lighted text-white text-center animate-pulse py-4">...</div>;  }  if (isCommentsQueryError) {    setHasNextPage(false);    return (<div className="bg-background-darken text-white">Error loading comments.</div>)  }  return (    <div      className="bg-background-darken text-white py-24 md:py-32 px-4"      ref={ref}    >      <div className="max-w-[960px] ml-auto mr-auto">        <div className="flex justify-between items-center">          <h2 className="text-3xl font-semibold">Comments</h2>          <div className="font-bold">            <span              className={`hover:underline cursor-pointer ${sortOrder === 'asc' ? 'underline' : ''}`}              onClick={() => setSortOrder('asc')}            >              oldest            </span>            {" | "}            <span              className={`hover:underline cursor-pointer ${sortOrder === 'desc' ? 'underline' : ''}`}              onClick={() => setSortOrder('desc')}            >              newest            </span>          </div>        </div>        <div className="flex flex-col gap-12 mt-8">          {            comments.map(item => (              <CommentItem                data={item}                key={item.id}              />            ))          }        </div>        <div className="flex gap-2 mt-8 items-center">          {pagesToRender.map((page, index) => (            page === '...' ? <span key={index}>...</span> :              <button                key={index}                onClick={() => handlePageChange(page)}                className={`w-[48px] h-[60px] flex justify-center items-center font-semibold ${page === currentPage ? 'bg-primary' : 'bg-background-lighten'}`}              >                {page}              </button>          ))}        </div>      </div>    </div>  )});export default CommentsSection;