export default function BigO() {
  //crescimento linear (busca linear)
  const printFirst = (items: Array<string>) => {
    console.log(items[0]); //Big O de O(1) acessa direto o primeiro elemnto
    return items[0];
  };

  const printFirstMap = (items: Array<string>) => {
    return items.map((item) => console.log(item)); // O(n)  n = quantidade de items
  };

  const a = printFirst(["Lucas", "Montano", "Sara"]);
  const b = printFirstMap(["Lucas", "Montano", "Sara"]);

  //busca binaria O (log n)
  const funcBinary = (items: Array<string>, element: any) => {
    let left = 0;
    let right = items.length - 1;

    while (left <= right) {
      let mid = (left + element) / 2;
      if (items[mid] === element) return mid;

      if (items[mid] < element) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return null;
  };

  const binary = funcBinary(["Lucas", "Montano", "Sara"], "Sara");
  return (
    <div>
      <h3>{a}</h3>
      <h2>Resumo da diferença</h2>
      <ul>
        <li>Acesso direto por índice (array) = O(1)</li>
        <li>Iteração completa (map, forEach, etc.) = O(n)</li>
      </ul>

      <h3>Busca binaria</h3>
      <div>{binary}</div>
    </div>
  );
}
