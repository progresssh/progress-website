import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { compareDesc } from "date-fns";
import { journalPost } from "../types/journalPost";

function Items({ currentItems, isTransmission }) {
  return (
    <>
      <ul className="space-y-3 text-left md:text-right h-3/6">
        {currentItems?.map((post: journalPost) => (
          <li key={post.key}>
            <Link
              href={`${isTransmission ? "transmission/" : "entry/"}${post.key}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function PaginatedItems({ itemsPerPage, data, isTransmission }) {
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
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="flex justify-between items-center h-10"
        pageClassName="w-full text-center"
        pageLinkClassName="w-full inline-block"
        activeClassName="text-[#FFD600]"
      />
      <Items currentItems={currentItems} isTransmission={isTransmission} />
    </>
  );
}

export default function PaginatedList({ data, items, isTransmission }) {
  return (
    <PaginatedItems
      itemsPerPage={items}
      data={data}
      isTransmission={isTransmission}
    />
  );
}
