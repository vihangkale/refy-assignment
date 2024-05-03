export default function table({ header, data }) {
  return (
    <table>
      <thead className="bg-[#B9B9B9] p-2">
        {header?.map(({ title, value }) => (
          <th key={value}>{title}</th>
        ))}
      </thead>
      <tbody>
        {data?.map((obj, idx) => (
          <tr key={idx} className="border border-solid border-[#000000]">
            {header?.map(({ value, id }) => (
              <td key={id}>{obj[value]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
