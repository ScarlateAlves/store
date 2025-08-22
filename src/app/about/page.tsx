"use client";

export default function About() {
  return (
    <div>
      <div className="max-w-full" style={{ overflow: "clip" }}>
        <div className="overflow-x-auto">
          <table className="border-collapse min-w-[800px] w-full">
            <thead>
              <tr>
                <th className="sticky top-0 left-0 bg-white z-[15] p-3 border border-gray-300 drop-shadow-custom font-semibold">
                  Header 1
                </th>
                <th className="sticky top-0 bg-white z-10 p-3 border border-gray-300 drop-shadow-custom">
                  Header 2
                </th>
                <th className="sticky top-0 bg-white z-10 p-3 border border-gray-300 drop-shadow-custom">
                  Header 3
                </th>
                <th className="sticky top-0 bg-white z-10 p-3 border border-gray-300 drop-shadow-custom">
                  Header 4
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sticky left-0 bg-white z-[5] p-3 border border-gray-300 drop-shadow-custom font-medium">
                  Célula 1
                </td>
                <td className="p-3 border border-gray-300">Conteúdo 1</td>
                <td className="p-3 border border-gray-300">Conteúdo 2</td>
                <td className="p-3 border border-gray-300">Conteúdo 3</td>
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
