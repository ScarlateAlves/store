"use client";

export default function About() {
  return (
    <div>
      <div>
        <div
          id="tableHeaders"
          style={{
            overflowX: "hidden",
            position: "sticky",
            top: 0,

            background: "red",
            color: "white",
          }}
        >
          <table>
            <thead>
              <tr>
                <th
                  style={{ whiteSpace: "nowrap", left: 0, position: "sticky" }}
                >
                  1. A Very Long Header That Never Ends
                </th>
                <th style={{ whiteSpace: "nowrap" }}>
                  1. A Very Long Header That Never Ends
                </th>
                <th style={{ whiteSpace: "nowrap" }}>
                  1. A Very Long Header That Never Ends
                </th>{" "}
                <th style={{ whiteSpace: "nowrap" }}>
                  1. A Very Long Header That Never Ends
                </th>{" "}
                <th style={{ whiteSpace: "nowrap" }}>
                  1. A Very Long Header That Never Ends
                </th>{" "}
                <th style={{ whiteSpace: "nowrap" }}>
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
          <table>
            <thead style={{ lineHeight: "0px", opacity: 0 }}>
              <tr>
                <th style={{ whiteSpace: "nowrap" }}>
                  1. A Very Long Header That Never Ends
                </th>
                <th style={{ whiteSpace: "nowrap" }}>
                  2. A Very Long Header That Never Ends
                </th>
                <th style={{ whiteSpace: "nowrap" }}>
                  3. A Very Long Header That Never Ends
                </th>
                <th style={{ whiteSpace: "nowrap" }}>
                  4. A Very Long Header That Never Ends
                </th>
                <th style={{ whiteSpace: "nowrap" }}>
                  5. A Very Long Header That Never Ends
                </th>
                <th style={{ whiteSpace: "nowrap" }}>
                  6. A Very Long Header That Never Ends
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    whiteSpace: "nowrap",
                    background: "pink",
                    left: 0,
                    position: "sticky",
                  }}
                >
                  1. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  2. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  3. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  4. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  5. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  6. This is some very long content
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    whiteSpace: "nowrap",
                    background: "pink",
                    left: 0,
                    position: "sticky",
                  }}
                >
                  1. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  2. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  3. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  4. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  5. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  6. This is some very long content
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    whiteSpace: "nowrap",
                    background: "pink",
                    left: 0,
                    position: "sticky",
                  }}
                >
                  1. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  2. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  3. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  4. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  5. This is some very long content
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  6. This is some very long content
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
