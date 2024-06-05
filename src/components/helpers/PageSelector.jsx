import { classNames } from "../../utils/CommonFunctions";

export default function PageSelector({ pagecount, currentPage, setPage }) {
  return (
    <div className="flex flex-row w-max mx-auto">
      {[...Array(pagecount)].map((_, i) => {
        var _i = i + 1;
        return (
          <div
            key={_i}
            className={classNames(
              "p-3 cursor-pointer",
              _i === 1 ? "border-x-2" : "border-r-2",
              currentPage === _i ? "bg-black text-white" : ""
            )}
            onClick={() => setPage(_i)}
          >
            {_i}
          </div>
        );
      })}
    </div>
  );
}
