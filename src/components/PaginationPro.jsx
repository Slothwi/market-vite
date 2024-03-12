import { Pagination } from 'react-bootstrap';

const PaginationPro = ({ getNextPageProd, getPreviousPageProd, currentPage }) => {

  return (
    <Pagination>
      <Pagination.Prev onClick={() => getPreviousPageProd()} />
      <Pagination.Item active>{currentPage}</Pagination.Item>
      <Pagination.Next onClick={() => getNextPageProd()} />
    </Pagination>
  )
}
export default PaginationPro
