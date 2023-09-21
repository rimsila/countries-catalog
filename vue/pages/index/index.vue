<script setup lang="ts">
import { DetailItem } from "#components";
import { ElImage } from "element-plus";
import { CountriesCatalog } from "./type";
import { debounce } from "lodash";

const { data: allCountries, pending } = await useRequest<CountriesCatalog>(
  "/all"
);

const state = reactive({
  page: 1,
  pageSize: 25,
  searchText: "",
});

const debouncedSearch = debounce((val: string) => {
  state.searchText = val;
}, 500);

const handleDetailCountries = (record: CountriesCatalog[number]) => {
  const { altSpellings, area, population, capital, idd, name, flags } =
    record || {};
  ElMessageBox({
    confirmButtonText: "Close",
    title: name.official,
    message: h("div", [
      h(ElImage, {
        src: flags.png,
        class: "py-4 flex justify-center",
      }),
      h(DetailItem, { label: "Country Area", value: area }),
      h(DetailItem, { label: "Population", value: population }),
      h(DetailItem, { label: "Capital", value: capital?.join(", ") }),
      h(DetailItem, { label: "Calling Codes", value: idd.root }),
      h(DetailItem, {
        label: "Alternative Country Name",
        value: altSpellings.join(","),
      }),
    ]),
  });
};

const filteredData = computed(() => {
  if (!Array.isArray(allCountries.value)) return [];
  return allCountries.value.filter((country) =>
    country.name.official
      .toLowerCase()
      .includes(state.searchText.toLowerCase())
  );
});

const paginateData = computed(() => {
  return filteredData.value.slice(
    state.pageSize * state.page - state.pageSize,
    state.pageSize * state.page
  );
});
</script>

<template>
  <main>
    <el-card class="box-card">
      <template #header>
        <div class="flex gap-4">
          <el-text type="primary"> Countries Catalog</el-text>
          <el-input
            class="!w-56"
            v-model="state.searchText"
            placeholder="Search Country"
            @input="debouncedSearch"
            clearable
          />
        </div>
      </template>

      <el-table
        height="70vh"
        :rowKey="(item) => item.area"
        :data="paginateData"
        :loading="pending"
        :default-sort="{ prop: 'area', order: 'ascending' }"
      >
        <el-table-column prop="flags" label="Flag">
          <template v-slot="{ row }: { row: CountriesCatalog[number] }">
            <el-image
              :src="row.flags.png"
              fit="contain"
              alt="flag"
              :width="80"
            />
          </template>
        </el-table-column>

        <el-table-column
          label="Country Name"
          sortable
          show-sort-tooltip
          :sort-method="
            (a, b) => a.name.official.localeCompare(b.name.official)
          "
        >
          <template #default="{ row }">
            <el-link type="warning" @click="handleDetailCountries(row)">
              {{ row.name.official }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column label="2 character Country Code">
          <template v-slot="{ row }: { row: CountriesCatalog[number] }">
            {{ row.cca2 }}
          </template>
        </el-table-column>

        <el-table-column label="3 character Country Code">
          <template v-slot="{ row }: { row: CountriesCatalog[number] }">
            {{ row.cca3 }}
          </template>
        </el-table-column>

        <el-table-column label="Alternative Country Name">
          <template v-slot="{ row }: { row: CountriesCatalog[number] }">
            {{ row.altSpellings.join(", ") }}
          </template>
        </el-table-column>

        <el-table-column label="Country Calling Codes">
          <template v-slot="{ row }: { row: CountriesCatalog[number] }">
            <el-text>
              {{ row.idd.root }}
            </el-text>
            <el-text>
              {{ row.idd.suffixes?.join(",") }}
            </el-text>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="total, prev, pager, next, sizes"
        class="py-6"
        @current-change="(val: number) => state.page = val"
        :page-size="state.pageSize"
        @size-change="(val: number) => state.pageSize = val"
        :total="filteredData.length"
        :page-sizes="[5, 10, 25, 30, 40]"
      >
      </el-pagination>
    </el-card>
  </main>
</template>
