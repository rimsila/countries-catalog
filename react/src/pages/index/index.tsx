import { Table, Input, Typography, Space, Card } from "antd";

const { Text } = Typography;

export default function App() {
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
              className="sm:w-[200px] w-full"
            />
          </Space>
        }
      >
        <Table
          columns={[]}
          dataSource={[]}
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
