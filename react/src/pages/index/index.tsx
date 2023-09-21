import { useState, useMemo } from "react";
import { useRequest, useDebounce } from "ahooks";
import { Table, Input, Typography, Space, Card } from "antd";
import { getAllCountries } from "./service";
import { columns } from "./columns";

const { Text } = Typography;

export default function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchValue = useDebounce(searchText.trim(), { wait: 500 });

  const { data: allCountries, loading: loadingAllCountries } =
    useRequest(getAllCountries);

  const filteredData = useMemo(() => {
    if (!Array.isArray(allCountries?.data)) return [];

    //fuzzy filter
    return allCountries?.data.filter((country) =>
      country.name.official
        .toLowerCase()
        .includes(debouncedSearchValue.toLowerCase())
    );
  }, [allCountries, debouncedSearchValue]);

  return (
    <div className="container mx-auto">
      <Card
        bordered={false}
        title={
          <Space size="large">
            <Text strong type="danger">
              Country Catalog
            </Text>
            <Input
              allowClear
              placeholder="Search Country"
              onChange={(e) => setSearchText(e.target.value)}
              className="sm:w-[200px] w-full"
            />
          </Space>
        }
      >
        <Table
          rowKey={(item) => item.area}
          loading={loadingAllCountries}
          columns={columns}
          dataSource={filteredData}
          pagination={{
            defaultPageSize: 25,
            showTotal: (total) => `Total ${total}`,
          }}
          scroll={{
            scrollToFirstRowOnChange: true,
            // bellow tablet will have auto scroll x
            x: 767,
            y: "60vh",
          }}
        />
      </Card>
    </div>
  );
}
