"use client";

export default function Products() {
  return (
    <div>
      <div>
        <div
          id="tableHeaders"
          style={{
            overflowX: "hidden",
            position: "sticky",
            top: 0,
            background: "white",
            zIndex: 50,
          }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="h-14">
                <th
                  className="px-3 py-2 align-middle text-left bg-white"
                  style={{
                    whiteSpace: "nowrap",
                    left: 0,
                    position: "sticky",
                  }}
                >
                  1. A Very Long Header That Never Ends
                </th>
                <th
                  className="px-3 py-2 align-middle text-left"
                  style={{ whiteSpace: "nowrap" }}
                >
                  1. A Very Long Header That Never Ends
                </th>
                <th
                  className="px-3 py-2 align-middle text-left"
                  style={{ whiteSpace: "nowrap" }}
                >
                  1. A Very Long Header That Never Ends
                </th>
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
          <table className="w-full border-collapse">
            <thead style={{ lineHeight: "0px", opacity: 0 }}>
              <tr>
                <th
                  className="px-3 align-middle text-left "
                  style={{
                    whiteSpace: "nowrap",
                    left: 0,
                    position: "sticky",
                  }}
                >
                  1. A Very Long Header That Never Ends
                </th>
                <th
                  className="px-3  align-middle text-left"
                  style={{ whiteSpace: "nowrap" }}
                >
                  2. A Very Long Header That Never Ends
                </th>
                <th
                  className="px-3  align-middle text-left"
                  style={{ whiteSpace: "nowrap" }}
                >
                  3. A Very Long Header That Never Ends
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-14">
                <td
                  className="px-3 py-2 align-middle text-left bg-white"
                  style={{
                    whiteSpace: "nowrap",
                    left: 0,
                    position: "sticky",
                  }}
                >
                  1. This is some very long content
                </td>
                <td
                  className="px-3 py-2 align-middle text-left"
                  style={{ whiteSpace: "nowrap" }}
                >
                  2. This is some very long content
                </td>
                <td
                  className="px-3 py-2 align-middle text-left"
                  style={{ whiteSpace: "nowrap" }}
                >
                  3. This is some very long content
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
