"use client";

import { table } from "@/utils/mock.table";
import { useState, useEffect, useRef } from "react";

const INITIAL_ROWS_VISIBLE = 5;
const TABLE_HEADERS_ID = "tableHeaders";

export default function Products() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  console.log({ isScrolling });

  const totalProductsCount = table.header.products.length;
  const visibleRows = expanded
    ? table.body
    : table.body.slice(0, INITIAL_ROWS_VISIBLE);

  const handleToggleExpansion = () => {
    setExpanded((prev) => !prev);
  };

  const handleTableHorizontalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const tableHeaders = document.getElementById(TABLE_HEADERS_ID);
    const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
    if (tableHeaders) tableHeaders.scrollLeft = scrollLeft;
  };

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      setIsScrolling(rect.top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-56">ff</div>
      <div className="h-4">hhhh</div>
      <div className="max-w-7xl mx-auto">
        <div ref={elementRef} className="relative">
          <div
            id="tableHeaders"
            className="overflow-x-hidden sticky top-0 bg-white z-50"
          >
            <table className="w-full border-collapse table-fixed">
              <colgroup>
                {Array.from({ length: totalProductsCount }).map((_, index) => (
                  <col key={index} className="min-w-32" />
                ))}
              </colgroup>
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-6 align-middle text-left bg-white left-0 sticky">
                    {table.header.title}
                  </th>
                  {table.header.products.map((product) => (
                    <th key={product.id} className="px-2 py-4 align-middle">
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
            <table className="w-full border-collapse table-fixed">
              <colgroup>
                {Array.from({ length: totalProductsCount }).map((_, index) => (
                  <col key={index} className="min-w-32" />
                ))}
              </colgroup>
              <thead className="opacity-0 leading-0">
                <tr>
                  <th className="left-0 sticky">{table.header.title}</th>
                  {table.header.products.map((product) => (
                    <th key={product.id}>{product.name}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {visibleRows.map((item, index) => (
                  <>
                    {item.subtitle && (
                      <tr key={index} className="h-14 border-b border-gray-300">
                        <td
                          className={`align-middle text-left left-0 sticky text-nowrap py-6 px-4 bg-white`}
                        >
                          {item.subtitle}
                        </td>
                        {item.inforProducts?.map((product) => (
                          <td
                            key={product.id}
                            className="px-2 py-4 align-middle text-center"
                          >
                            {product.name}
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
