import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { compareDesc } from "date-fns";

// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {
  return (
    <>
      <ul className="space-y-3 h-3/6">
        {currentItems?.map((post) => (
          <li key={post.key}>
            <Link href={"entry/" + post.key}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function PaginatedItems({ itemsPerPage, data }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    data.sort((a, b) => compareDesc(a.time, b.time));
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="flex justify-between items-center h-10 "
        pageLinkClassName=""
        activeClassName="text-[#FFD600]"
      />
      <Items currentItems={currentItems} />
    </>
  );
}

export default function PaginatedList({ data }) {
  return <PaginatedItems itemsPerPage={3} data={data} />;
}
