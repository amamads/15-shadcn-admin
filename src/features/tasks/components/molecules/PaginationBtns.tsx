import { Button } from "@/components/atoms/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/atoms/pagination";
import { cn } from "@/lib/utils";
import type { Task } from "@/features/tasks/types";
import type { Table as TableType } from "@tanstack/react-table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";

// const PaginationBtns = ({ table }: { table: TableType<Task> }) => {
//   return (
//     <Pagination>
//       <PaginationContent>

//         <PaginationItem>
//           <Button
//             variant='ghost'
//             size='icon'
//             className='rounded-full'
//             onClick={() => table?.firstPage()}
//             disabled={!table?.getCanPreviousPage()}
//           >
//             <ChevronFirstIcon className='size-4' />
//           </Button>
//         </PaginationItem>

//         <PaginationItem>
//           <Button
//             variant='ghost'
//             size='icon'
//             className='rounded-full'
//             onClick={() => table?.previousPage()}
//             disabled={!table?.getCanPreviousPage()}
//           >
//             <ChevronLeftIcon className='size-4' />
//           </Button>
//         </PaginationItem>

//         <PaginationItem>
//           <Select
//             value={String(table.getState().pagination.pageIndex + 1)}
//             onValueChange={e => table.setPageIndex(Number(e) - 1)}
//           >
//             <SelectTrigger id='select-page' className='w-fit whitespace-nowrap' aria-label='Select page'>
//               <SelectValue placeholder='Select page' />
//             </SelectTrigger>
//             <SelectContent>
//               {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(page => (
//                 <SelectItem key={page} value={String(page)}>
//                   Page {page}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </PaginationItem>

//         <PaginationItem>
//           <Button
//             variant='ghost'
//             size='icon'
//             className='rounded-full'
//             onClick={() => table?.nextPage()}
//             disabled={!table?.getCanNextPage()}
//           >
//             <ChevronRightIcon className='size-4' />
//           </Button>
//         </PaginationItem>
//         <PaginationItem>
//           <Button
//             variant='ghost'
//             size='icon'
//             className='rounded-full cursor-pointer'
//             onClick={() => table?.lastPage()}
//             disabled={!table?.getCanNextPage()}
//           >
//             <ChevronLastIcon className='size-4' />
//           </Button>
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//   )
// }

// export default PaginationBtns
// const pages = [1, 2, 3];

function getPages(pageCount: number, currentPage: number) {
  let pages: number[] = [];
  if (pageCount <= 5) return Array.from({ length: pageCount }, (_, i) => i + 1);
  else if (currentPage < 4) pages = [1, 2, 3, 4, 0, pageCount];
  else if (currentPage < pageCount - 2)
    pages = [1, 0, currentPage - 1, currentPage, currentPage + 1, 0, pageCount];
  else pages = [1, 0, pageCount - 3, pageCount - 2, pageCount - 1, pageCount];

  return pages;
}

const PaginationBtns = ({
  table,
  pageDetails: { pageCount, currentPage },
}: {
  table: TableType<Task>;
  pageDetails: { pageCount: number; currentPage: number };
}) => {
  const pages = getPages(pageCount, currentPage);
  return (
    <Pagination className="w-fit max-sm:mx-0">
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-lg"
            onClick={() => table?.firstPage()}
            disabled={!table?.getCanPreviousPage()}
          >
            <ChevronsLeftIcon className="size-4" />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-lg"
            onClick={() => table?.previousPage()}
            disabled={!table?.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="size-4" />
          </Button>
        </PaginationItem>
        {pages.map((pageNum, i) => {
          if (pageNum === 0)
            return (
              <PaginationItem key={`${pageNum} ${i}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          return (
            <PaginationItem key={`${pageNum} ${i}`}>
              <Button
                variant="outline"
                size="icon-sm"
                className={cn(
                  "rounded-lg bg-primary",
                  currentPage === pageNum
                    ? "bg-primary! text-primary-foreground"
                    : "",
                )}
                onClick={() => table?.setPageIndex(pageNum - 1)}
              >
                {pageNum}
              </Button>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-lg"
            onClick={() => table?.nextPage()}
            disabled={!table?.getCanNextPage()}
          >
            <ChevronRightIcon className="size-4" />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-lg"
            onClick={() => table?.lastPage()}
            disabled={!table?.getCanNextPage()}
          >
            <ChevronsRightIcon className="size-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBtns;
