"use client";

import { useScrollObserver } from "@/layout/Header/hooks/useScrollObserver";
import { table } from "@/utils/mock.table";
import { useRef, useState } from "react";

const ROWS_VISIBLE = 5;

export default function Products() {
  const [expanded, setExpanded] = useState(false);
  const tableHeaderTop = useRef<HTMLDivElement>(null);
  const { elementRef, isScrolling } = useScrollObserver();

  const totalColumn = table.header.products.length;
  const visibleRows = expanded ? table.body : table.body.slice(0, ROWS_VISIBLE);

  const handleToggleExpansion = () => {
    setExpanded((prev) => !prev);
  };

  const handleTableHorizontalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const tableHeaders = tableHeaderTop.current;
    const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
    if (tableHeaders) tableHeaders.scrollLeft = scrollLeft;
  };

  return (
    <>
      <div className="h-56">ff</div>
      <div className="h-4">hhhh</div>
      <div className="max-w-7xl mx-auto">
        <div ref={elementRef} className="relative">
          <div
            ref={tableHeaderTop}
            className="overflow-x-hidden sticky top-0 bg-white z-30"
          >
            <table className="w-full border-collapse sm:table-fixed table-auto">
              <colgroup>
                {Array.from({ length: totalColumn }).map((_, index) => (
                  <col key={index} className="min-w-32" />
                ))}
              </colgroup>
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-6 d text-left bg-white left-0 sticky min-w-32">
                    {table.header.title}
                  </th>
                  {table.header.products.map((product) => (
                    <th key={product.id} className="px-2 py-4 d min-w-32">
                      <div className="flex items-center flex-col">
                        <p>{product.name}</p>
                        {!isScrolling && (
                          <>
                            <p>{product.description}</p>
                            <p>{product.value}</p>
                          </>
                        )}
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                          label
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>

          <div
            id="tableBody"
            style={{ overflowX: "scroll" }}
            onScroll={handleTableHorizontalScroll}
          >
            <table className="w-full border-collapse sm:table-fixed table-auto">
              <colgroup>
                {Array.from({ length: totalColumn }).map((_, index) => (
                  <col key={index} className="min-w-32" />
                ))}
              </colgroup>
              <thead className="opacity-0 leading-0">
                <tr>
                  <th className="left-0 sticky min-w-32">
                    {table.header.title}
                  </th>
                  {table.header.products.map((product) => (
                    <th key={product.id} className="min-w-32">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {visibleRows.map((item, index) => (
                  <>
                    {item.subtitle && (
                      <tr key={index} className="h-14 border-b border-gray-300">
                        <td
                          className={`d text-left left-0 sticky text-nowrap py-6 px-4 bg-white min-w-32`}
                        >
                          {item.subtitle}
                        </td>
                        {item.inforProducts?.map((product) => (
                          <td
                            key={product.id}
                            className="px-2 py-4 d text-center min-w-32"
                          >
                            {product.name} gggg dddhhhhhh fffdd
                          </td>
                        ))}
                      </tr>
                    )}
                    {item.section && (
                      <tr className="h-14 bg-gray-200">
                        <td className="p-4 sticky left-0 text-nowrap">
                          {item.section}
                        </td>
                        <td colSpan={4}></td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className={`w-full flex justify-center p-6 lg:p-10 ${
              expanded ? "relative" : "absolute  bottom-0"
            }`}
          >
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleToggleExpansion}
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
      <div style={{ minHeight: "2000px" }}>
        <p> Just some long body content</p>
      </div>
    </>
  );
}
