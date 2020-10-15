const columns = [
    {
      title: "A",
      dataIndex: "key",
      width: 150,
    },
    {
      title: "B",
      dataIndex: "key",
    },
    {
      title: "C",
      dataIndex: "key",
    },
    {
      title: "D",
      dataIndex: "key",
    },
    {
      title: "E",
      dataIndex: "key",
      width: 200,
    },
    {
      title: "F",
      dataIndex: "key",
      width: 100,
    },
  ];

  const data = Array.from(
    {
      length: 100000,
    },
    (_, key) => ({
      key,
    })
  );

  const config={
    columns,
    data
  }

  export default config