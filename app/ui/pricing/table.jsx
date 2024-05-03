export default function table({ header, data }) {
  return (
    <table className="rounded-[1rem]">
      <thead className="bg-[#B9B9B9] p-2 rounded-[1rem]">
        {header?.map(({ title, value }) => (
          <th key={value}>{title}</th>
        ))}
      </thead>
      <tbody>
        {data?.map((obj, idx) => (
          <tr key={idx} className="border border-solid border-[#000000]">
            {header?.map(({ value, id }) => (
              <td key={id} className="p-2">
                {obj[value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
