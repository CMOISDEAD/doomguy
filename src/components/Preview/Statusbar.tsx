import useDoomStore from "../../store/store";

export const Statusbar = () => {
  const { response } = useDoomStore((state) => state);

  return (
    <div className="flex gap-2 items-center px-3 w-full h-10 text-sm border-gray-600">
      <div className="flex gap-2 pr-2 border-r border-gray-600">
        Response:
        <div className="flex gap-2 content-center items-center">
          <div
            className={`w-2 h-2 bg-${
              response.status === 200
                ? "success"
                : response.status === 404
                ? "danger"
                : "warning"
            } rounded-full`}
          />
          <span
            className={`text-${
              response.status === 200
                ? "success"
                : response.status === 404
                ? "danger"
                : "warning"
            }`}
          >
            {response.status || "N/A"}
          </span>
        </div>
      </div>
      <div className="pr-2 border-r border-gray-600">
        Time:{" "}
        <span className="text-primary">{response.timeout || "N/A"}ms</span>
      </div>
      <div>
        Size: <span className="text-warning">1.2KB</span>
      </div>
      <div className="flex-grow text-end">
        method:{" "}
        <span className="uppercase text-primary">
          {response.method || "N/A"}
        </span>
      </div>
    </div>
  );
};
