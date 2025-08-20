"use client";

const table = {
  header: {
    title: "title",
    products: [
      {
        id: "1",
        name: "Product",
        description: "This is some very long content",
      },
      {
        id: "2",
        name: "Product",
        description: "This is some very long content",
      },
      {
        id: "3",
        name: "Product",
        description: "This is some very long content",
      },
      {
        id: "4",
        name: "Product",
        description: "This is some very long content",
      },
    ],
  },
  body: [
    {
      subtitle: "subtitle",
      section: "section Title",
      inforProducts: [
        {
          id: "1",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "2",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "3",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "4",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
      ],
    },
    {
      subtitle: "subtitle",
      section: "section Title",
      inforProducts: [
        {
          id: "1",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "2",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "3",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "4",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
      ],
    },
    {
      subtitle: "subtitle",
      section: "section Title",
      inforProducts: [
        {
          id: "1",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "2",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "3",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "4",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
      ],
    },
    {
      subtitle: "subtitle",
      section: "section Title",
      inforProducts: [
        {
          id: "1",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "2",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "3",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "4",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
      ],
    },
    {
      subtitle: "subtitle",
      section: "section Title",
      inforProducts: [
        {
          id: "1",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "2",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "3",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
        {
          id: "4",
          name: "A Very Long Header That Never Ends",
          description: "This is some very long content",
        },
      ],
    },
  ],
};

export default function Products() {
  const numberLength = table.header.products.length;
  console.log("numberLength", numberLength);
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
                <col key={index} className="min-w-48" />
              ))}
            </colgroup>
            <thead>
              <tr className="h-14">
                <th className="px-3 py-2 align-middle text-left bg-white left-0 sticky">
                  {table.header.title}
                </th>
                {table.header.products.map((product) => (
                  <th
                    key={product.id}
                    className="px-3 py-2 align-middle text-left"
                  >
                    {product.name}
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
                <col key={index} className="min-w-48" />
              ))}
            </colgroup>
            <thead style={{ lineHeight: "0px", opacity: 0 }}>
              <tr>
                <th className=" left-0 sticky">{table.header.title}</th>
                {table.header.products.map((product) => (
                  <th key={product.id}>{product.name}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="h-14">
                <td className="px-3 py-2 align-middle text-left bg-white left-0 sticky">
                  1. This is some very long content
                </td>
                <td className="px-3 py-2 align-middle text-left">
                  2. This is some very long content
                </td>
                <td className="px-3 py-2 align-middle text-left">
                  3. This is some very long content
                </td>
                <td className="px-3 py-2 align-middle text-left">
                  2. This is some very long content
                </td>
              </tr>
              <tr className="h-14">
                <td className="px-3 py-2 align-middle text-left bg-white left-0 sticky">
                  1. This is some very long content
                </td>
                <td className="px-3 py-2 align-middle text-left">
                  2. This is some very long content
                </td>
                <td className="px-3 py-2 align-middle text-left">
                  3. This is some very long content
                </td>
                <td className="px-3 py-2 align-middle text-left">
                  2. This is some very long content
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ minHeight: "2000px" }}>
        <p> Just some long body content</p>
      </div>
    </div>
  );
}
