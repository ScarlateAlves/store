"use client";

import { table } from "@/utils/mock.table";
import { useState } from "react";

export default function Products() {
  const numberLength = table.header.products.length;
  const tableBody = table.body.slice(0, 5);
  const maxSize = table.body;
  const [sizeBody, setSizeBody] = useState(tableBody);

  const handleSize = () => {
    setSizeBody(maxSize);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div
          id="tableHeaders"
          className="overflow-x-hidden sticky top-0 bg-white z-50"
        >
          <table className="w-full border-collapse table-fixed">
            <colgroup>
              {Array.from({ length: numberLength }).map((_, index) => (
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
                      <p>{product.description}</p>
                      <p>{product.value}</p>
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
          onScroll={(e) => {
            const tableHeaders = document.getElementById("tableHeaders");
            if (tableHeaders) {
              tableHeaders.scrollLeft = (e.target as HTMLDivElement).scrollLeft;
            }
          }}
        >
          <table className="w-full border-collapse table-fixed">
            <colgroup>
              {Array.from({ length: numberLength }).map((_, index) => (
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
              {sizeBody.map((item, index) => (
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
          <div className="w-full flex justify-center p-6 lg:p-10">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleSize}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>

      <div style={{ minHeight: "2000px" }}>
        <p> Just some long body content</p>
      </div>
    </div>
  );
}
