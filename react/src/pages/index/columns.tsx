import { Modal, Typography, Image, Space } from "antd";
import { CountriesCatalogItem } from "./type";
import { ColumnType } from "antd/es/table";

const { Text, Link, Paragraph } = Typography;

const DetailItem = ({
  label,
  value,
}: {
  label: string | number;
  value?: string | number;
}) => (
  <Paragraph>
    <Text strong>{label}:</Text> {value}
  </Paragraph>
);

const handleDetailCountries = (record: CountriesCatalogItem) => {
  const { altSpellings, area, population, capital, idd, name, flags } =
    record || {};
  Modal.info({
    icon: null,
    okText: "Close",
    title: name.official,
    content: (
      <div className="flex flex-col">
        <Image
          src={flags.png}
          className="w-full self-center py-4"
          preview={false}
        />
        <DetailItem label="Country Area" value={area} />
        <DetailItem label="Population" value={population} />
        <DetailItem label="Capital" value={capital?.join(", ")} />
        <DetailItem label="Calling Codes" value={idd.root} />
        <DetailItem label="Alternative Country Name" value={altSpellings} />
      </div>
    ),
  });
};

export const columns: ColumnType<CountriesCatalogItem>[] = [
  {
    title: "Flag",
    dataIndex: "flags",
    key: "flags",
    render: (flags) => <Image src={flags.png} alt="flag" width={80} />,
  },
  {
    title: "Country Name",
    dataIndex: ["name", "official"],
    sorter: (a, b) => a.name.official.localeCompare(b.name.official),
    showSorterTooltip: true,
    render: (_, record) => (
      <Link type="warning" onClick={() => handleDetailCountries(record)}>
        {_}
      </Link>
    ),
  },
  { title: "2 character Country Code", dataIndex: "cca2" },
  { title: "3 character Country Code", dataIndex: "cca3" },
  {
    title: "Native Country Name",
    dataIndex: ["name", "nativeName"],
    render: (_, { name }) => {
      return name.official;
    },
  },
  {
    title: "Alternative Country Name",
    dataIndex: "altSpellings",
    render: (altSpellings) => altSpellings.join(", "),
  },
  {
    title: "Country Calling Codes",
    dataIndex: "idd",
    render: (_, { idd }) => {
      const { root, suffixes = [] } = idd || {};
      return root + suffixes.join?.(", ");
    },
  },
];
