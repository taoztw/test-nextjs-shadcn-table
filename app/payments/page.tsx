import { columns } from "./columns";
import { DataTable } from "./data-table";
import { data } from "../data";

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
