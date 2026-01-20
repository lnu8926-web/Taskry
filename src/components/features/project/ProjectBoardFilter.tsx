import { useProjectBoard } from "@/providers/ProjectBoardProvider";
import { DateSelect } from "./DateSelect";
import { SortSelect } from "./SortSelect";
import { ViewSelect } from "./ViewSelect";
import { cn } from "@/lib/utils/utils";

export default function PorjectBoardFilter() {
  const { filter, setFilter } = useProjectBoard();
  const handleSelectChange = (name: string, value: string) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };
  return (
    <div className={cn("flex mb-4 sm:mb-5", "justify-between")}>
      <div
        className="
        p-3 sm:p-4
        flex flex-col sm:flex-row justify-start gap-3 sm:gap-4 md:justify-center flex-wrap 
        border
        rounded-xl 
        w-full"
      >
        <div className="flex justify-between sm:justify-center items-center">
          <div className="mr-2 text-sm sm:text-base whitespace-nowrap">
            View Type:
          </div>
          <div className="flex-1 sm:flex-none">
            <ViewSelect
              value={filter.view}
              onValueChange={(value) => {
                handleSelectChange("view", value);
              }}
            />
          </div>
        </div>

        <div className="flex justify-between sm:justify-center items-center">
          <div className="mr-2 text-sm sm:text-base whitespace-nowrap">
            정렬 기준:
          </div>
          <div className="flex-1 sm:flex-none">
            <DateSelect
              value={filter.date}
              onValueChange={(value) => {
                handleSelectChange("date", value);
              }}
            />
          </div>
        </div>

        <div className="flex justify-between sm:justify-center items-center">
          <div className="mr-2 text-sm sm:text-base whitespace-nowrap">
            정렬:
          </div>
          <div className="flex-1 sm:flex-none">
            <SortSelect
              value={filter.sort}
              onValueChange={(value) => {
                handleSelectChange("sort", value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
